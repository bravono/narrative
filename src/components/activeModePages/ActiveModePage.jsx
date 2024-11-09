import React, { useState, useRef, useEffect } from "react";
import { getSurvey } from "../../services/surveyServices";
import { Toastify as toast } from "toastify";
import Footer from "../Footer";
import Queue from "../Queue";
import Teleprompter from "../standalone/Teleprompter";
import MiddleButton from "../MiddleButton";
import Barrel from "../composed/Barrel";
import Bar from "../composed/Bar";
import Ring from "../composed/Ring";
import Triangle from "../composed/Triangle";
import Logo from "../Logo";
import Edge from "../Edge";
import Timer from "../../utilities/Timer";
import Button from "../Button";
import { Navigate, useNavigate } from "react-router-dom";
import ActiveBlank from "../ActiveBlank";

function ActiveModePage() {
  const containerRef = useRef(null);
  const [counterComplete, setCounterComplete] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [isFollowUp, setIsFollowUp] = useState(false);
  const [error, setError] = useState("");
  const [story, setStory] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [widget, setWidget] = useState("");
  const [heading, setHeading] = useState("");
  const [choiceList, setChoiceList] = useState("");
  const [instruction, setInstruction] = useState("");
  const [duration, setDuration] = useState(600);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [blankName, setBlankName] = useState("");

  // console.log(duration);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const survey = await getSurvey();
        const data = survey.data;

        setStory(data.story);
        setQuestionType(data.blank.questionType);
        setWidget(data.blank.widget);
        setHeading(data.blank.heading);
        setChoiceList(data.blank.choiceList);
        setInstruction(data.blank.instruction);
        setDuration(data.durationInMin * 60);
        setBlankName(data.blank.name);
        if (data.blank.children.length) {
          setIsFollowUp(true);
        }
      } catch (error) {
        setError("Error with POST request");
        toast("Something Failed");
      }
    };

    fetchSurvey();
  }, []); // Empty dependency array to run only on mount

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

      return () => clearInterval(timerId); // Clean up the interval on component unmount
    }
  }, [duration, isRunning]); // Only re-run if `duration` changes

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
    console.log("Started");
  };
  const handlePause = () => {
    console.log("Paused");
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleEdge = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    navigate("/");
  };

  const handleAddToStory = (data) => {
    // Triangle Case
    if (widget.toLocaleLowerCase() === "triangle") {
      setUserChoice(data);
    }
    // Bar Case
    if (widget.toLocaleLowerCase() === "bar") {
      setUserChoice(data);
    }

    // Add user's choice to the story;
    if (userChoice) {
      const regex = new RegExp(`_{1,}${blankName}[1-9]?_{1,}`);
      const newStory = story.replace(regex, `[${userChoice}]`);
      setStory(newStory);
      console.log(story);
    }
  };

  const handlePreview = () => {
    navigate("/fullstory");
  };
  const handleCompare = () => {
    navigate("/compare");
  };
  const handleTalk = () => {
    setIsRecording((prevIsRecording) => !prevIsRecording); // Toggle recording state
    console.log(transcript);
    setTranscript("");
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

  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <Edge onClick={handleEdge} />
          <Timer duration={duration} label={"PENDING"} />
          <div className="top_button-group">
            <Button
              label="START"
              className={"top_button"}
              onClick={handleStart}
            />
            <Button
              label={isRunning ? "PAUSE" : "RESUME"}
              className={duration ? "primary top_button" : " top_button"}
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
            <Queue className={"queue question"}>
              <Teleprompter textLines={story} containerRef={containerRef} />
            </Queue>
          </div>
          <div className="middle_buttons-group">
            <Button
              onClick={handleAddToStory}
              label="ADD TO STORY"
              className={` middle_button primary`}
            />
            <Button
              onClick={handlePreview}
              label="PREVIEW"
              className={`middle_button primary`}
            />
          </div>
          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              {widget === "barrel" ? (
                <Barrel
                  heading={heading}
                  choiceList={choiceList}
                  questionType={questionType}
                  isFollowUP={isFollowUp}
                />
              ) : widget === "bar" ? (
                <Bar onHaveChoice={handleAddToStory} />
              ) : widget === "ring" ? (
                <Ring
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                />
              ) : widget === "triangle" ? (
                <Triangle
                  heading={heading}
                  choiceList={choiceList}
                  instruction={instruction}
                  onHaveChoice={handleAddToStory}
                />
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
