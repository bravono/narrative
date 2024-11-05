import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollArrow from "../ScrollArrow";
import Queue from "../Queue";
import Teleprompter from "../Telepromter";
import MiddleButton from "../MiddleButton";
import Barrel from "./Barrel";
import Bar from "./Bar";
import Ring from "./Ring";

function ActiveModePage() {
  const text = `
  START hello my name is Najeem Mohammed , from Ilorin Kwara State hello my name is Njeem Mohammed , ,hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed , from Ilorin Kwara State END`;
  return (
    <main className="main-container">
      <section className="top-section">
        <Header classNameA={"primary"} />
      </section>
      <section className="middle-section">
        <div className="body_content">
          <div className="story_queue-group">
            <ScrollArrow />
            <Queue className={"queue question"}>
              <Teleprompter text={text} />
            </Queue>
          </div>
          <MiddleButton />
          <div className="story_queue-single">
            <Queue className={"queue answer"}>
              <Ring />
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
