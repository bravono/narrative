import "./App.css";

import StoryQueue from "./components/StoryQueue";
import TimerArrow from "./components/TimerArrow";
import { TimerArrowProvider } from "./components/TimerArrowProvider";
import Edge from "./components/Edge";
import Time from "./components/Time";
import Button from "./components/Button";
import Ring from "./components/Ring";
import LowerPointerArrow from "./components/LowerPointerArrow";
import TalkBubble from "./components/TalkBubble";
import EdgeStanding from "./components/EdgeStanding";
import LoveScroll from "./components/LoveScroll";
// import Timer from "./components/Timer";

function App() {
  return (
    <main className="main-container">
      <section className="top-section">
        <Edge
          className="App-logo"
          src="/assets/Edge_Emotional_States_Sitting_Stool_Blue.svg"
          alt="Edge"
        />
        <div className="time-group">
          <div>
            <Time value="4:59" className="time" />
            <Time value="PENDING" className="pending" />
          </div>
          <TimerArrowProvider>
            <TimerArrow className="arrow" />
          </TimerArrowProvider>
        </div>
        <div>
          <Edge src="/assets/Logo.svg" alt="Logo" />
          <div className="btn-top">
            <Button className="btn btn-buyfacts" label="START" />
            <Button className="btn btn-buyfacts" label="PAUSE" />
          </div>
        </div>
      </section>
      <section className="middle-section">
        <StoryQueue />
      </section>
      <section className="bottom-section">
        <LoveScroll className="love-arrow-down"/>        
      </section>
    </main>
  );
}

export default App;
