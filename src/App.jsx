import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePageAM from "./components/activeModePages/WelcomePageAM";
import ActiveModePage from "./components/activeModePages/ActiveModePage";
import Preview from "./components/activeModePages/Preview";
import WelcomePageLM from "./components/learnmodepages/WelcomePageLM";
import Compare from "./components/activeModePages/Compare";
import Exit from "./components/activeModePages/ExitPage";
import LearnModeTimer from "./components/learnmodepages/LearnModeTimer";
import LearnModeStart from "./components/learnmodepages/LearnModeStart";
import LearnModePause from "./components/learnmodepages/LearnModePause";
import LearnModeAddToStory from "./components/learnmodepages/LearnModeAddToStory";
import LearnModePreview from "./components/learnmodepages/LearnModePreview";
import LearnModeCompare from "./components/learnmodepages/LearnModeCompare";
import LearnModeTalk from "./components/learnmodepages/LearnModeTalk";
import LearnModePdfIt from "./components/learnmodepages/LearnModePdfIt";
import LearnModeExit from "./components/learnmodepages/LearnModeExit";
import LearnModeBarrel from "./components/learnmodepages/LearnModeBarrel";
import LearnModeToggle from "./components/learnmodepages/LearnModeToggle";
import LearnModeStickyArrowMultiple from "./components/learnmodepages/LearnModeStickyArrowMultiple";
import LearnModeStickyArrowSingle from "./components/learnmodepages/LearnModeStickyArrowSingle";
import LearnModeStickyArrowRanking from "./components/learnmodepages/LearnModeStickyArrowRanking";
import LearnModeStickyArrowRate from "./components/learnmodepages/LearnModeStickyArrowRate";
import LearnModeColumn from "./components/learnmodepages/LearnModeColumn";
import LearnModeRadio from "./components/learnmodepages/LearnModeRadio";
import LearnModeCheckBox from "./components/learnmodepages/LearnModeCheckBox";
import LearnModeBarDrag from "./components/learnmodepages/LearnModeBarDrag";
import LearnModeBarClick from "./components/learnmodepages/LearnModeBarClick";
import LearnModeBarScreen from "./components/learnmodepages/LearnModeBarScreen";
import LearnModeRingTally from "./components/learnmodepages/LearnModeRingTally";
import LearnModeRingTotal from "./components/learnmodepages/LearnModeRingTotal";
import LearnModeAddChoice from "./components/learnmodepages/LearnModeAddChoice";
import LearnModeContinue from "./components/learnmodepages/LearnModeContinue";
import LearnModeSelectAnything from "./components/learnmodepages/LearnModeSelectAnything";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePageLM />} />
        <Route path="/welcomeactivemode" element={<WelcomePageAM />} />
        <Route path="/activemode" element={<ActiveModePage />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/LearnModeTimer" element={<LearnModeTimer />} />
        <Route path="/LearnModeStart" element={<LearnModeStart />} />
        <Route path="/LearnModePause" element={<LearnModePause />} />
        <Route path="/LearnModeAddToStory" element={<LearnModeAddToStory />} />
        <Route path="/LearnModePreview" element={<LearnModePreview />} />
        <Route path="/LearnModeCompare" element={<LearnModeCompare />} />
        <Route path="/LearnModeTalk" element={<LearnModeTalk />} />
        <Route path="/LearnModePdfIt" element={<LearnModePdfIt />} />
        <Route path="/LearnModeExit" element={<LearnModeExit />} />
        <Route path="/LearnModeBarrel" element={<LearnModeBarrel />} />
        <Route path="/LearnModeToggle" element={<LearnModeToggle />} />
        <Route
          path="/LearnModeStickyArrowMultiple"
          element={<LearnModeStickyArrowMultiple />}
        />
        <Route
          path="/LearnModeStickyArrowSingle"
          element={<LearnModeStickyArrowSingle />}
        />
        <Route
          path="/LearnModeStickyArrowRanking"
          element={<LearnModeStickyArrowRanking />}
        />

        <Route
          path="/LearnModeStickyArrowRate"
          element={<LearnModeStickyArrowRate />}
        />

        <Route path="/LearnModeColumn" element={<LearnModeColumn />} />
        <Route path="/LearnModeRadio" element={<LearnModeRadio />} />
        <Route path="/LearnModeCheckBox" element={<LearnModeCheckBox />} />

        <Route path="/LearnModeBarDrag" element={<LearnModeBarDrag />} />
        <Route path="/LearnModeBarClick" element={<LearnModeBarClick />} />
        <Route path="/LearnModeBarScreen" element={<LearnModeBarScreen />} />

        <Route path="/LearnModeRingTally" element={<LearnModeRingTally />} />
        <Route path="/LearnModeRingTotal" element={<LearnModeRingTotal />} />

        <Route path="/LearnModeAddChoice" element={<LearnModeAddChoice />} />
        <Route path="/LearnModeContinue" element={<LearnModeContinue />} />

        <Route
          path="/LearnModeSelectAnything"
          element={<LearnModeSelectAnything />}
        />
      </Routes>
    </Router>
  );
}

export default App;
