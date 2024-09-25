import "./App.css";
import StoryQueue from "./components/StoryQueue";
import TimerArrow from "./components/TimerArrow";
import { TimerArrowProvider } from "./components/TimerArrowProvider";
import AppLogo from "./components/AppLogo";
import Time from "./components/Time";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-header">
          <AppLogo
            className="App-logo"
            src="/assets/Edge_Emotional_States_Sitting_Stool_Blue.svg"
            alt="Edge"
          />

          <div className="App-header-div time-pending">
            <Time value="4:59" className="time" />
            <Time value="PENDING" className="pending" />
          </div>

          <TimerArrowProvider>
            <TimerArrow className="arrow" />
          </TimerArrowProvider>

          <div className="App-header-div">
            <div className="black-div"></div>
            <Button value="START" className="confirm-btn start" />
          </div>

          <div className="App-header-div-two">
            <AppLogo src="/assets/Logo.svg" alt="Logo" />
            <Button value="PAUSE" className="confirm-btn pause" />
          </div>
        </div>
        <StoryQueue />
      </div>
    </div>
  );
}

export default App;
