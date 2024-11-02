import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RadioButton from "./RadioButton";
import Queue from "./Queue";
import Button from "./Button";
import Ring from "./Ring";
import LowerPointerArrow from "./LowerPointerArrow";
import TalkBubble from "./TalkBubble";
import EdgeStanding from "./EdgeStanding";
import StickyArrow from "./StickyArrow";
import ActiveBlank from "./ActiveBlank";
import Percentage from "./Percentage";
import ChoiceRapper from "./ChoiceRapper";
import RingListContainer from "./RingListContainer";
import Column from "./Column";
import Barrel from "./Barrel";
import MiddleButton from "./MiddleButton";
import ScrollArrow from "./ScrollArrow";
import Teleprompter from "./Telepromter";
import "../css/mainContent.css";

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
              <Barrel />
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
