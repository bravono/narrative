import React, { useState, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollArrow from "../ScrollArrow";
import Queue from "../Queue";
import Teleprompter from "../standalone/Teleprompter";
import MiddleButton from "../MiddleButton";
import Barrel from "./Barrel";
import Bar from "./Bar";
import Ring from "./Ring";
import Triangle from "./Triangle";

function ActiveModePage() {
  const containerRef = useRef(null); // Step 1: Create a ref

  const textLines = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni perspiciatis quae vero.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem voluptatem similique!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur. Fugiat quaerat",
  ];

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
    console.log("Scroll Down");
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 50, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="main-container">
      <section className="top-section">
        <Header classNameA={"primary"} />
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
              <Teleprompter textLines={textLines} containerRef={containerRef} />
            </Queue>
          </div>
          <MiddleButton />
          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <Bar />
            </Queue>
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

export default ActiveModePage;
