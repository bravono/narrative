import React, { useState, useRef, useEffect } from "react";
import { getNextBlank, getSurvey } from "../../services/surveyServices";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
  sortChoiceListByValue,
  sortChoiceListByName,
} from "../../utilities/choiceListSorter";
import Queue from "../Queue";
import Teleprompter from "../standalone/Teleprompter";
import Barrel from "../composed/Barrel";
import Bar from "../composed/Bar";
import Ring from "../composed/Ring";
import Triangle from "../composed/Triangle";
import Logo from "../Logo";
import Edge from "../Edge";
import EdgeChair from "../EdgeChair";
import Timer from "../../utilities/Timer";
import Button from "../Button";
import Talk from "../composed/Talk";

function ActiveModePage() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { data } = location.state || {};
  const initialDuration = 60;
  const [counterComplete, setCounterComplete] = useState(false);
  const [arrowColor, setArrowColor] = useState("gray"); // Initial SVG color
  const [timerLabel, setTimerLabel] = useState("pending");
  const [isWelcome, setIsWelcome] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [error, setError] = useState("");
  const [story, setStory] = useState("");
  const [storyBuild, setStoryBuild] = useState();
  const [questionType, setQuestionType] = useState("");
  const [widget, setWidget] = useState("");
  const [heading, setHeading] = useState("");
  const [choiceList, setChoiceList] = useState([]);
  const [instruction, setInstruction] = useState("");
  const [duration, setDuration] = useState(initialDuration);
  const [countDirection, setCountDirection] = useState("");
  const [pauseDuration, setPauseDuration] = useState(100);
  const [timeLeft, setTimeLeft] = useState(100);
  const [isRecording, setIsRecording] = useState(false);
  const [wantsToTalk, setWantsToTalk] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [blankName, setBlankName] = useState("");
  const [isDescending, setIsDescending] = useState(true);
  const [activeRow, setActiveRow] = useState();
  const [allChoicesHaveValue, setAllChoicesHaveValue] = useState(false);
  const [canContinue, setCanContinue] = useState(0); // Decide when the Continue button can be used
  const [chooseOne, setChooseOne] = useState(false);
  const [noSelectedChoices, setNoSelectedChoices] = useState(0); // Use for checkboxes
  const [isBar, setIsBar] = useState(false); // Only bar can have one item in the choice list
  const meetOneCondition =
    isBar ||
    canContinue == 100 ||
    allChoicesHaveValue ||
    chooseOne ||
    noSelectedChoices >= 3;

  useEffect(() => {
    const storedIsWelcome = localStorage.getItem("isWelcome");
    console.log(storedIsWelcome);
    if (storedIsWelcome) {
      setIsWelcome(JSON.parse(storedIsWelcome));
    } else {
      // Set initial value or fetch from backend
      setIsWelcome(true); // Assuming first visit
      localStorage.setItem("isWelcome", JSON.stringify(true));
    }
  }, []);

  // Fake backend for testing
  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const survey = await getSurvey();
        const data = survey.data;
console.log(data)
        setStory(data.story);
        setQuestionType(data.blank.questionType);
        setWidget(data.blank.widget);
        setHeading(data.blank.heading);
        setChoiceList(data.blank.choiceList);
        setInstruction(data.blank.instruction);
        setDuration(data.durationInMin * 60);
        setPauseDuration(data.pauseDuration * 60);
        setBlankName(data.blank.name);
      } catch (error) {
        toast("Error with POST request");
      }
    };

    // fetchSurvey();
  }, []);

  useEffect(() => {
    setStory(data.story);
    setStoryBuild(data.story);
    setQuestionType(data.blanks[0].questionType);
    setWidget(data.blanks[0].widget);
    // setHeading(data.heading);
    const newChoiceList = data.blanks[0].choiceList.map((choice) => ({
      // Reinitializing value to 0
      ...choice,
      value: 0,
    }));
    setChoiceList(newChoiceList);
    // setInstruction(data.instruction);
    setDuration(data.durationInMin * 60);
    setCountDirection(data.countDirection);
    setPauseDuration(data.pauseDuration * 60);
    setBlankName(data.blanks[0].blank);
  }, []);

  // Get the next blank
  const fetchNextBlank = async () => {
    try {
      const session = location.search;
      const newBlank = await getNextBlank();
      const data = newBlank;

      return data;
    } catch (error) {
      toast("Error with POST request");
    }
  };

  useEffect(() => {
    if (isRunning) {
      const timerId = setInterval(() => {
        setDuration((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId);
            setCounterComplete(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }

    if (!isRunning) {
      const timerId = setInterval(() => {
        setPauseDuration((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning]);

  useEffect(() => {
    let recognition;

    if (isRecording) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();

      recognition.onstart = () => {
        console.log("Recording started...");
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        setTranscript((prevTranscript) => prevTranscript + transcript);
      };

      recognition.onend = () => {
        console.log("Recording stopped.");
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

  // Setting individual condition
  useEffect(() => {
    if (widget == "ring") {
      setCanContinue(
        choiceList.reduce((sum, choice) => sum + Number(choice.value), 0)
      );
    }

    if (questionType == "singleChoice" || widget == "triangle") {
      setChooseOne(
        choiceList.filter((choice) => choice.value === 1).length === 1
      ); //handles when only one choice is selected and exclude checkbox
    }

    if (questionType === "multipleChoice") {
      setNoSelectedChoices(
        choiceList.filter((choice) => choice.value === 1).length
      );
    }

    if (widget == "bar") {
      setIsBar(choiceList.length == 1 && choiceList[0].value > 1);
    }
  }, [choiceList]);

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

  useEffect(() => {
    if (choiceList.length)
      setAllChoicesHaveValue(choiceList.every((choice) => choice.value > 0));
  }, [choiceList, story]);

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
      containerRef.current.scrollBy({
        top: 50, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsWelcome(false);
    }
  };
  const handlePause = () => {
    if (!isWelcome) {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    }
  };

  const handleEdge = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    navigate("/");
  };

  const handleAddToStory = async () => {
    const regex = new RegExp(`_{1,}[a-z][1-9]?_{1,}`);

    // canContinue handles ring and allChoicesHaveValue handles rank and rate
    if (canContinue || allChoicesHaveValue) {
      setStoryBuild(
        storyBuild.replace(
          regex,
          `[${choiceList
            .map((choice) => `${choice.text} (${choice.value})`)
            .join(", ")}]`
        )
      );
    }

    // choseOne handle radio and triangle
    if (chooseOne && !isBar) {
      if (activeRow)
        setStoryBuild(
          storyBuild.replace(regex, `[${choiceList[activeRow].text}]`)
        );
    }

    // Handle checkbox case
    if (noSelectedChoices >= 3) {
      setStoryBuild(
        storyBuild.replace(
          regex,
          `[${choiceList
            .filter((choice) => choice.value === 1)
            .map((choice) => choice.text)
            .join(", ")}]`
        )
      );
    }

    // This handle bar
    if (isBar) {
      setStoryBuild(storyBuild.replace(regex, `[${choiceList[0].value}]`));
    }

    // Set all conditions to false
    setCanContinue(false);
    setAllChoicesHaveValue(false);
    setChooseOne(false);
    setIsBar(false);
    setNoSelectedChoices(0);
    setActiveRow(null);

    // Get the next question
    const newTask = await fetchNextBlank();
    const response = newTask.reply;
    console.log(response)

    if (meetOneCondition) {
      if (response.story) {
        setStory(response.story);
        setStoryBuild((prevStory) => {
          return prevStory + response.story;
        });
        setQuestionType(response.blanks[0].questionType);
        setWidget(response.blanks[0].widget);
        // setHeading(response.heading);
        const newChoiceList = response.blanks[0].choiceList.map((choice) => ({
          ...choice,
          value: 0,
        }));
        setChoiceList(newChoiceList);
        // setInstruction(response.instruction);
        // setDuration(response.durationInMin * 60);
        setCountDirection(response.countDirection);
        setPauseDuration(response.pauseDuration * 60);
        setBlankName(response.blanks[0].blank);
      }
    }
  };

  const handlePreview = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    navigate("/preview", { state: { storyBuild, duration } });
  };
  const handleCompare = () => {
    navigate("/compare");
  };
  const handleTalk = () => {
    setWantsToTalk(true);

    if (isRecording) {
      setIsRecording(false);
    }
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
    }
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
  };

  const handleUpdateChoiceList = (data) => {
    setChoiceList(data);
  };

  const handleSortToggle = () => {
    setIsDescending((prevIsDescending) => !prevIsDescending);

    if (allChoicesHaveValue) {
      setChoiceList((prevChoiceList) => {
        return sortChoiceListByValue(prevChoiceList, isDescending);
      });
    }
    setChoiceList((prevChoiceList) => {
      return sortChoiceListByName(prevChoiceList, isDescending);
    });
  };

  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          {isRunning || (!isRunning && !isWelcome) ? (
            <Edge onClick={handleEdge} />
          ) : (
            <EdgeChair />
          )}
          {isWelcome || isRunning ? (
            <Timer
              duration={duration}
              label={timerLabel.toUpperCase()}
              arrowColor={arrowColor}
              isWelcome={isWelcome}
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
              className={
                isWelcome ? "primary top_button" : "disabled top_button"
              }
              onClick={handleStart}
            />
            <Button
              label={isWelcome ? "PAUSE" : isRunning ? "PAUSE" : "RESUME"}
              className={
                isWelcome ? "disabled top_button" : "primary top_button "
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
            {isWelcome && !isRunning ? (
              <Queue className={"queue welcome"}>
                <Teleprompter />
                <Edge type={"standing"} />
              </Queue>
            ) : (
              <Queue className={"queue question"}>
                {wantsToTalk ? (
                  <Talk
                    onRecord={handleRecord}
                    onErase={handleErase}
                    onCancel={handleCancel}
                    onDone={handleDone}
                    isRecording={isRecording}
                    transcript={transcript}
                  />
                ) : (
                  <Teleprompter
                    story={story}
                    storyBuild={storyBuild}
                    containerRef={containerRef}
                  />
                )}
              </Queue>
            )}
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
              className={`middle_button primary`}
            />
          </div>
          <div className="story_queue-single">
            <Queue
              className={"queue answer"}
              handleAddToStory={handleAddToStory}
            >
              {widget === "barrel" && !isWelcome ? (
                <Barrel
                  heading={heading}
                  choiceList={choiceList}
                  questionType={questionType}
                  isFollowUP={isFollowUp}
                  instruction={instruction}
                  isRecording={isRecording}
                  onSortToggle={handleSortToggle}
                  onAddToChoice={handleTalk}
                  onSetChoiceList={handleUpdateChoiceList}
                  onSetAllChoiceHaveValue={setAllChoicesHaveValue}
                  onSetActiveRow={(row) => {
                    setActiveRow(row);
                  }}
                />
              ) : widget === "bar" && !isWelcome ? (
                <Bar
                  onSetChoice={handleUpdateChoiceList}
                  choiceList={choiceList}
                />
              ) : widget === "ring" && !isWelcome ? (
                <Ring
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                  allChoicesHaveValue={allChoicesHaveValue}
                  onSortToggle={handleSortToggle}
                  onSetChoiceList={handleUpdateChoiceList}
                  onSetAllChoiceHaveValue={setAllChoicesHaveValue}
                  onAddToChoice={handleTalk}
                  onAddToStory={handleAddToStory}
                  isRecording={isRecording}
                />
              ) : widget === "triade" && !isWelcome ? (
                <Triangle
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                  onSetChoiceList={handleUpdateChoiceList}
                />
              ) : (
                ""
              )}
              {meetOneCondition ? <div className="swipe__add-to-story">
                <img
                  src="/assets/PointerArrow.svg"
                  alt=""
                  className="animate__animated animate__slideInUp animate__slow animate__infinite"
                />
                {/* <p>Swipe Up to Add to Story</p> */}
              </div> : ""}
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
              className={`bottom_button primary`}
            />
            <Button
              onClick={handleTalk}
              label={isRecording ? "STOP" : "TALK"}
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
}

export default ActiveModePage;
