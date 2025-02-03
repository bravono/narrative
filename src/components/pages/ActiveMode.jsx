import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { addAndHighlightChoice } from "../../utilities/addAndHighlightChoice";
import Timer from "../../utilities/Timer";

import {
  loadSurveys,
  addToStory,
  moveToPreviousItem,
} from "../../store/surveys";
import { savePauseTimer, saveSessionTimer } from "../../store/timers";
import { storyAdded } from "../../store/responses";
import { persistor } from "../../store/configureStore";

import Barrel from "../composed/Barrel";
import Bar from "../composed/Bar";
import Ring from "../composed/Ring";
import Triangle from "../composed/Triangle";
import Talk from "../composed/Talk";

import Queue from "../Queue";
import Teleprompter from "../standalone/Teleprompter";
import Swipe from "../standalone/Swipe";
import Logo from "../Logo";
import Edge from "../Edge";
import Button from "../Button";

const ActiveMode = () => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null); // Ref to store the animation frame ID
  const scrollOffset = useRef(0); // Ref to track fractional scrolling
  const location = useLocation();
  const session = location.search;
  const initialDuration = 600;
  const [widgetOutAnimation, setWidgetOutAnimation] = useState("");
  const [counterComplete, setCounterComplete] = useState(false);
  const [arrowColor, setArrowColor] = useState("gray"); // Initial SVG color
  const [timerLabel, setTimerLabel] = useState("pending");
  const [isRunning, setIsRunning] = useState(true);
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [error, setError] = useState("");
  const [story, setStory] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [widget, setWidget] = useState("");
  const [heading, setHeading] = useState("Select Up to Six");
  const [choiceList, setChoiceList] = useState([]);
  const [newChoice, setNewChoice] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [duration, setDuration] = useState(initialDuration);
  const [countDirection, setCountDirection] = useState("");
  const [pauseDuration, setPauseDuration] = useState(300);
  const [timeLeft, setTimeLeft] = useState(100);
  const [isRecording, setIsRecording] = useState(false);
  const [wantsToTalk, setWantsToTalk] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [blankName, setBlankName] = useState("");
  const [activeRow, setActiveRow] = useState();
  const [rankRatePass, setRankRatePass] = useState(false);
  const [ringPass, setRingPass] = useState(false);
  const [radioPass, setRadioPass] = useState(false);
  const [checkboxPass, setCheckboxPass] = useState(false);
  const [selectEnough, setSelectEnough] = useState(false);
  const [barPass, setBarPass] = useState(false);
  const [scalePass, setScalePass] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // State to track scrolling status
  const [scrollingSpeed, setScrollingSpeed] = useState(0.3); // State to track scrolling speed
  const [seenCheckbox, setSeenCheckbox] = useState(false);
  const [seenRanking, setSeenRanking] = useState(false);

  const meetOneCondition =
    barPass ||
    ringPass ||
    rankRatePass ||
    radioPass ||
    checkboxPass ||
    scalePass;

  const dispatch = useDispatch();
  const { list, lastFetch, currentIndex } = useSelector(
    (state) => state.entities.surveys
  );
  const savedSession = useSelector(
    (state) => state.entities.timers.sessionTimer
  );
  const savedPause = useSelector((state) => state.entities.timers.pauseTimer);
  const storeStory = useSelector((state) => state.entities.responses.story);

  // API call with Redux
  useEffect(() => {
    if (list.length === 0) {
      dispatch(loadSurveys({ session }));
    }
    if (lastFetch) {
      const data = lastFetch.reply || lastFetch;

      const newChoiceList = data.blanks[0].choiceList.map((choice) => ({
        // Reinitializing value to 0
        ...choice,
        value: 0,
        scales: [0, 0, 0, 0, 0, 0],
      }));
      setStory(data.story);
      setWidget(data.blanks[0].widget);
      setHeading(data.blanks[0].columnHeaders);
      setQuestionType(data.blanks[0].questionType);
      setChoiceList(newChoiceList);
      setInstruction(data.blanks.instruction);
      // setDuration(data.durationInMin * 60);
      setPauseDuration(data.pauseDuration * 60);
      setCountDirection(data.countDirection);
      setBlankName(data.blanks.blank);
    }
  }, [list, lastFetch, dispatch]);

  useEffect(() => {}, [story, widget]);

  // Save timer to store every sec
  useEffect(() => {
    if (savedSession.startTime && isRunning) {
      const elapsed = Math.floor((Date.now() - savedSession.startTime) / 1000);
      setDuration(Math.max(savedSession.remainingTime - elapsed, 0));
    }

    if (savedPause.startTime && !isRunning) {
      const elapsed = Math.floor((Date.now() - savedPause.startTime) / 1000);
      setPauseDuration(Math.max(savedPause.remainingTime - elapsed, 0));
    }
  }, [isRunning]);

  useEffect(() => {
    // Push initial state to the history stack
    window.history.pushState({ custom: true }, "custom");
    // Listen for back button navigation
    const handlePopState = (event) => {
      if (event.state && event.state.custom) {
        if (currentIndex > 0) {
          // Dispatch an action to move to the previous item in the list
          dispatch(moveToPreviousItem());
          const previousQuestion = list[currentIndex] || null;
          const data = previousQuestion.survey.reply;
          const newChoiceList = data.blanks[0].choiceList.map((choice) => ({
            // Reinitializing value to 0
            ...choice,
            value: 0,
            scales: [0, 0, 0, 0, 0, 0],
          }));
          setStory(data.story);
          setWidget(data.blanks[0].widget);
          setHeading(data.blanks[0].columnHeaders);
          setQuestionType(data.blanks[0].questionType);
          setChoiceList(newChoiceList);
          setInstruction(data.blanks.instruction);
          // setDuration(data.durationInMin * 60);
          setPauseDuration(data.pauseDuration * 60);
          setCountDirection(data.countDirection);
          setBlankName(data.blanks.blank);
        } else {
          history.back();
        }
      } else {
        // Let the default navigation occur if it's not a custom state
        history.back();
      }
    };

    // Attach the popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [dispatch, currentIndex]);

  // Timers
  useEffect(() => {
    let timerId;

    if (isRunning) {
      // Save start time and duration to Redux
      const startTime = Date.now();
      dispatch(saveSessionTimer({ startTime, remainingTime: duration }));

      timerId = setInterval(() => {
        setDuration((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else {
      const startTime = Date.now();
      dispatch(savePauseTimer({ startTime, remainingTime: pauseDuration }));

      timerId = setInterval(() => {
        setPauseDuration((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, duration, pauseDuration, dispatch]);

  // Speech Recognition
  useEffect(() => {
    let recognition;

    if (isRecording) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();

      recognition.onstart = () => {};

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript((prevTranscript) => prevTranscript + transcript);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.continuous = true;
      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isRecording]);

  // Setting individual condition for widgets and question types
  useEffect(() => {
    if (widget == "ring") {
      setRingPass(
        choiceList.reduce((sum, choice) => sum + Number(choice.value), 0) ===
          100
        // && choiceList.every((choice) => choice.value > 0)
      );
    }

    if (questionType == "singleChoice" || widget == "triangle") {
      setRadioPass(
        choiceList.filter((choice) => choice.value === 1).length === 1
      ); //handles when only one choice is selected and exclude checkbox
    }

    if (questionType === "multipleChoice") {
      const list = choiceList.filter((choice) => choice.value === 1).length;
      setCheckboxPass(list >= 3);
      setSelectEnough(list < 3 && list >= 1);
    }

    if (widget == "bar") {
      setBarPass(choiceList.length == 1 && choiceList[0].value > 1);
    }

    if (choiceList.length)
      setRankRatePass(
        choiceList.every((choice) => choice.value > 0 && choice.value <= 6)
      );

    if (questionType === "scale") {
      setScalePass(
        choiceList.every((choice) => choice.scales.some((scale) => scale === 1))
      );
    }
  }, [choiceList]);

  // Rate the performance of the respondent
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;

        // Calculate percentage of time remaining
        const percentage = (newTime / 100) * 100;

        // Change SVG color based on percentage
        if (percentage <= 100) {
          setArrowColor("#5DFFA2");
          setTimerLabel("MOVER");
        } else if (percentage <= 95) {
          setArrowColor("#845300");
          setTimerLabel("LAGGARD");
        } else if (percentage <= 70) {
          setArrowColor("#FFF400");
          setTimerLabel("ARCHETYPE");
        } else if (percentage <= 20) {
          setArrowColor("#9BAAEF");
          setTimerLabel("TOAST");
        } else if (percentage <= 1) {
          setArrowColor("#9BAAEF");
          setTimerLabel("DANDY");
        }
        if (newTime <= 0) {
          clearInterval(timerInterval); // Stop the timer when it reaches 0
          return 0;
        }
        return newTime;
      });
    }, 1000); // Update every 1 second (1000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [duration]); // Empty dependency array ensures this runs once on mount

  useEffect(() => {}, [newChoice, widgetOutAnimation]);

  // Function to handle scrolling up
  const scrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: -50, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling down
  const scrollDown = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

      // Check if there's more content to scroll
      if (scrollTop + clientHeight < scrollHeight) {
        setIsScrolling(true); // Set scrolling to active
        scrollOffset.current += scrollingSpeed; // Accumulate fractional scrolling

        if (scrollOffset.current >= 1) {
          const scrollAmount = Math.floor(scrollOffset.current);
          containerRef.current.scrollTop += scrollAmount;
          scrollOffset.current -= scrollAmount;
        }

        animationFrameRef.current = requestAnimationFrame(scrollDown); // Continue scrolling
      } else {
        // Stop scrolling when the bottom is reached
        stopScrolling();
      }
    }
  };

  const stopScrolling = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsScrolling(false); // Set scrolling to inactive
  };

  useEffect(() => {
    // Start scrolling automatically when the component mounts
    animationFrameRef.current = requestAnimationFrame(scrollDown);

    // Cleanup the animation frame when the component unmounts
    return () => stopScrolling();
  }, []);

  const navigate = useNavigate();
  const handleStart = () => {
    persistor.purge(); // Remove activities from the browser
    window.location.reload(); // Reload the page
  };

  const handlePause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleEdge = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    navigate("/");
  };

  const handleAddToStory = async () => {
    // Scroll down the story
    animationFrameRef.current = requestAnimationFrame(scrollDown); 

    // Animate the outgoing widget
    setWidgetOutAnimation("animate__bounceOut");


    const regex = new RegExp(`_{1,}[?]?[1-9]?_{1,}`);
    let formData = [];
    let processedRespondentChoice = "";

    //  handles ring, rank and rate
    if (ringPass || rankRatePass) {
      setSeenRanking(true);
      processedRespondentChoice = `<mark>${choiceList
        .map((choice) => `${choice.text} (${choice.value})`)
        .join(", ")}</mark>`; // Process respondent choice to be added to story;

      formData = [...choiceList];
    }

    // choseOne handle radio and triangle
    if (radioPass && !barPass) {
      processedRespondentChoice = `<mark>${choiceList
        .filter((choice) => choice.value === 1)
        .map((choice) => choice.text)
        .join(", ")}</mark>`;

      formData = [...choiceList.filter((choice) => choice.value === 1)];
    }

    // Handle checkbox case
    if (checkboxPass) {
      setSeenCheckbox(true);
      processedRespondentChoice = `<mark>${choiceList
        .filter((choice) => choice.value === 1)
        .map((choice) => choice.text)
        .join(", ")}</mark>`;

      formData = [...choiceList.filter((choice) => choice.value === 1)];
    }

    // This handle bar
    if (barPass) {
      processedRespondentChoice = `<mark>${choiceList[0].value}</mark>`;

      formData = [...choiceList];
    }

    // Handle scale
    if (scalePass) {
      processedRespondentChoice = `<mark>${choiceList
        .map((choice) => choice.text)
        .join(", ")}</mark>`;

      formData = choiceList.map((choice) => {
        // Find the index of the scale that is equal to 1
        const scaleIndex = choice.scales.findIndex((scale) => scale === 1);

        return {
          ...choice, // Copy all other properties
          value: scaleIndex !== -1 ? scaleIndex : null, // Set value to index or null
        };
      });
    }

    if (meetOneCondition) {
      dispatch(
        storyAdded(addAndHighlightChoice(regex, story, processedRespondentChoice))
      );

      // Set all conditions to false
      setRingPass(false);
      setRankRatePass(false);
      setRadioPass(false);
      setBarPass(false);
      setCheckboxPass(0);
      setScalePass(false);
      setActiveRow(null);
      setWidgetOutAnimation("");
  
      // Get the next question
      addToStory(formData)(dispatch);
      const response = lastFetch.reply;
      if (meetOneCondition) {
        if (response.story) {
          const newChoiceList = response.blanks[0].choiceList.map((choice) => ({
            ...choice,
            value: 0,
            scales: [0, 0, 0, 0, 0, 0],
          }));
          setStory(response.story);
          setQuestionType(response.blanks[0].questionType);
          setWidget(response.blanks[0].widget);
          setHeading(response.heading);
          setChoiceList(newChoiceList);
          setInstruction(response.instruction);
          setBlankName(response.blanks[0].blank);
        }
      }
    }

  };

  const handlePreview = () => {
    if (typeof storeStory === "string") {
      navigate("/preview");
      setScrollingSpeed(5);
    }
  };
  const handleCompare = () => {
    navigate("/compare");
  };
  const handleTalk = () => {
    setWantsToTalk(true);

    if (wantsToTalk) setWantsToTalk(false);

    if (isRecording) setIsRecording(false);
  };

  const handleRecord = () => {
    setTranscript("");
    setIsRecording((prevIsRecording) => !prevIsRecording); // Toggle recording state
  };

  const handleErase = () => {
    setTranscript("");
  };

  const handleCancel = () => {
    setIsRecording(false);
    setWantsToTalk(false);
    setTranscript("");
  };

  const handleDone = () => {
    if (transcript.length) {
      setIsRecording(false);
      setWantsToTalk(false);
      const respondentChoiceList = newChoice.map(
        (choice) =>
          choice.length && {
            name: "",
            text: choice,
            value: 0,
            scales: [0, 0, 0, 0, 0, 0],
          }
      );
      // respondentChoiceList.pop(); // Remove the empty item in the array
      setChoiceList((prevChoiceList) => [
        ...respondentChoiceList,
        ...prevChoiceList,
      ]);
    }
  };

  const handleNewChoices = (respondentChoiceList) => {
    setNewChoice(respondentChoiceList);
  };

  const handlePDF = () => {
    // Check if the story is complete (replace with your actual logic)
    const isStoryComplete = false;

    if (isStoryComplete) {
      // Handle PDF download or action
      console.log("PDF button clicked - story is complete");
    } else {
      // Show the completion message
      const messageBox = document.getElementById("completionMessage");
      messageBox.classList.add("show");

      // Optionally, hide the message after a few seconds
      setTimeout(() => {
        messageBox.classList.remove("show");
      }, 3000); // Hide after 3 seconds
    }
  };
  const handleExit = () => {
    navigate("/exit");
    persistor.purge(); // Remove activities from the browser
  };

  const handleUpdateChoiceList = (data) => {
    setChoiceList(data);
  };

  return (
    <main className="main-container">
      <ToastContainer />
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <Edge onClick={handleEdge} />

          {isRunning ? (
            <Timer
              duration={duration}
              label={timerLabel.toUpperCase()}
              arrowColor={arrowColor}
              isRunning={isRunning}
            />
          ) : (
            <Timer
              duration={pauseDuration}
              label={"BACK IN"}
              arrowColor={"grey"}
            />
          )}

          <div className="top_button-group">
            <Button
              label="START"
              className={"disabled top_button"}
              onClick={handleStart}
            />
            <Button
              label={isRunning ? "PAUSE" : "RESUME"}
              className={
                savedPause.remainingTime || pauseDuration > 0
                  ? "primary top_button "
                  : "disabled top_button"
              }
              onClick={handlePause}
            />
          </div>
        </div>
      </section>
      <section className="middle-section">
        <div className="body_content">
          <div className="story_queue-group">
            <div className="scroll_arrow-group ">
              <img
                src="/assets/Arrow Up.svg"
                className="scroll_arrow-up teleprompter-buttons"
                onClick={scrollUp}
              />
              <img
                src="/assets/Arrow Up.svg"
                className="scroll_arrow-down teleprompter-buttons"
                onClick={scrollDown}
              />
            </div>
            {
              <Queue className={"queue question"}>
                {wantsToTalk ? (
                  <Talk
                    onRecord={handleRecord}
                    onErase={handleErase}
                    onCancel={handleCancel}
                    onDone={handleDone}
                    onSetNewChoices={handleNewChoices}
                    isRecording={isRecording}
                    transcript={transcript}
                  />
                ) : (
                  <Teleprompter
                    story={storeStory.length ? storeStory + "" + story : story}
                    containerRef={containerRef}
                  />
                )}
              </Queue>
            }
          </div>
          <div className="middle_buttons-group">
            <Button
              onClick={handleAddToStory}
              label="ADD TO STORY"
              className={meetOneCondition ? "primary" : "disabled"}
            />
            <Button
              onClick={handlePreview}
              label="PREVIEW"
              className={
                typeof storeStory === "string"
                  ? "middle_button primary"
                  : "middle_button disabled"
              }
            />
          </div>
          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              {widget === "barrel" && !isScrolling ? (
                <>
                  {!selectEnough && !seenCheckbox ? (
                    ""
                  ) : (
                    <div
                      className={
                        questionType === "multipleChoice" ||
                        questionType === "rank"
                          ? `question-type__instruction`
                          : ""
                      }
                    >
                      {questionType === "multipleChoice"
                        ? "Select at least 3 to proceed"
                        : questionType === "rank"
                        ? "Rank all items to proceed"
                        : ""}
                    </div>
                  )}

                  <Barrel
                    widgetOutAnimation={widgetOutAnimation}
                    heading={heading}
                    choiceList={choiceList}
                    questionType={questionType}
                    isFollowUP={isFollowUp}
                    instruction={instruction}
                    isRecording={isRecording}
                    onAddToChoice={handleTalk}
                    onSetChoiceList={handleUpdateChoiceList}
                    onSetAllChoiceHaveValue={setRankRatePass}
                    onSetActiveRow={(row) => {
                      setActiveRow(row);
                    }}
                  />
                </>
              ) : widget === "bar" && !isScrolling ? (
                <Bar
                  widgetOutAnimation={widgetOutAnimation}
                  onSetChoice={handleUpdateChoiceList}
                  choiceList={choiceList}
                />
              ) : widget === "ring" && !isScrolling ? (
                <Ring
                  widgetOutAnimation={widgetOutAnimation}
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                  ringPass={ringPass}
                  onSetChoiceList={handleUpdateChoiceList}
                  onSetAllChoiceHaveValue={setRankRatePass}
                  onAddToChoice={handleTalk}
                  onAddToStory={handleAddToStory}
                  isRecording={isRecording}
                />
              ) : widget === "triade" && !isScrolling ? (
                <Triangle
                  widgetOutAnimation={widgetOutAnimation}
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                  onSetChoiceList={handleUpdateChoiceList}
                />
              ) : (
                ""
              )}
              {meetOneCondition ? (
                <Swipe handleAddToStory={handleAddToStory} />
              ) : (
                ""
              )}
            </Queue>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <div className="bottom_buttons">
          <div className="bottom_buttons-row">
            <Button
              label="COMPARE"
              onClick={handleCompare}
              className={`bottom_button`}
            />
            <Button
              onClick={handleTalk}
              label={isRecording ? "STOP" : wantsToTalk ? "CANCEL" : "TALK"}
              className={`bottom_button primary`}
            />
          </div>
          <div className="bottom_buttons-row">
            <Button
              onClick={handlePDF}
              label="PDF IT"
              className={`bottom_button`}
            />
            <div className="completion-message" id="completionMessage">
              Complete Your Story to Use
            </div>
            <Button
              onClick={handleExit}
              label="EXIT"
              className={`bottom_button primary`}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

// Container component wraps dummy component (ActiveModePage)
export default ActiveMode;
