import "./App.css";
import StoryQueue from "./components/StoryQueue";
import TimerArrow from "./components/TimerArrow";
import { TimerArrowProvider } from "./components/TimerArrowProvider";
import Edge from "./components/Edge";
import Time from "./components/Time";
import Button from "./components/Button";

function App() {
  return (
    <main className="main-container">
      <section className="top-section">
        {/* <Edge
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
            <Button label="START" className="confirm-btn start" />
            <Button label="PAUSE" className="confirm-btn pause" />
          </div>
        </div> */}
      </section>
      <section className="mid-section">
        {/* <StoryQueue /> */}
      </section>
      <section className="bottom-section"></section>
    </main>
  );
}

export default App;
