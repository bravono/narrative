import Logo from "./assets/Logo.svg";
import Timer_Arrow from "./assets/Timer_Arrow.svg";
import Edge_Emotional_States_Sitting_Stool_Blue from "./assets/Edge_Emotional_States_Sitting_Stool_Blue.svg";
import "./App.css";
import QuestionComp from "./components/Question";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-header">
          <img
            className="App-logo"
            src={Edge_Emotional_States_Sitting_Stool_Blue}
            alt="Edge"
          />

          <div className="App-header-div time-pending">
            <div className="time">4:59</div>
            <div className="pending">PENDING</div>
          </div>

          <div className="arrow">
            <img src={Timer_Arrow} alt="arrow" />
          </div>

          <div className="App-header-div">
            <div className="black-div"></div>
            <div className="confirm-btn start">START</div>
          </div>

          <div className="App-header-div-two">
            <img className="research-text" src={Logo} alt="logo" />

            <div className="confirm-btn pause">PAUSE</div>
          </div>
        </div>
        <QuestionComp />
      </div>
    </div>
  );
}

export default App;
