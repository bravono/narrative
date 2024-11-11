import React, { useState, useRef, useEffect } from "react";
import { getSurvey } from "../../services/surveyServices";
import { Toastify as toast } from "toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Footer";
import Queue from "../Queue";
import Teleprompter from "../standalone/Teleprompter";
import MiddleButton from "../MiddleButton";
import Logo from "../Logo";
import Edge from "../Edge";
import EdgeChair from "../EdgeChair";
import Timer from "../../utilities/Timer";
import Button from "../Button";

function WelcomePageAM() {
  const [duration, setDuration] = useState(600);

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

  const navigate = useNavigate(); // Initialize useNavigate

  const handleStart = () => {
    navigate("/activemode");
  };

  return (
    <main className="main-container">
      <section className="top-section">
        <div className="logo">
          <Logo />
        </div>
        <div className="header">
          <EdgeChair />
          <Timer duration={duration} label={"PENDING"} />
          <div className="top_button-group">
            <Button
              label="START"
              className={"top_button primary"}
              onClick={handleStart}
            />
            <Button label="PAUSE" className="top_button" />
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
            <Queue className={"queue welcome"}>
              <Teleprompter
                textLines={`Welcome.
                This is a narrative survey
                mehtod and your story will
                appear here`}
              />
              <Edge type={"standing"} />
            </Queue>
          </div>
          <MiddleButton />
          <div className="story_queue-single">
            <Queue className={"queue answer"}></Queue>
          </div>
        </div>
      </section>
      <section className="bottom-section">
        <Footer
          classNameA={"primary"}
          classNameB={"primary"}
          classNameD={"primary"}
        />
      </section>
    </main>
  );
}

export default WelcomePageAM;
