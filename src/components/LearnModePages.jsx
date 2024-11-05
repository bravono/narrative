import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearnModeTimer from "./LearnModeTimer";
import LearnModePage from "./LearnModePage";
import LearnModeStart from "./LearnModeStart";
import LearnModePause from "./LearnModePause";
import LearnModeAddToStory from "./LearnModeAddToStory";
import LearnModePreview from "./LearnModePreview";
import LearnModeCompare from "./LearnModeCompare";
import LearnModeTalk from "./LearnModeTalk";
import LearnModePdfIt from "./LearnModePdfIt";
import LearnModeExit from "./LearnModeExit";
import LearnModeBarrel from "./LearnModeBarrel";
import LearnModeToggle from "./LearnModeToggle";
import LearnModeStickyArrowMultiple from "./LearnModeStickyArrowMultiple";
import LearnModeStickyArrowSingle from "./LearnModeStickyArrowSingle";
import LearnModeStickyArrowRanking from "./LearnModeStickyArrowRanking";
import LearnModeStickyArrowRate from "./LearnModeStickyArrowRate";
import LearnModeColumn from "./LearnModeColumn";
import LearnModeRadio from "./LearnModeRadio";
import LearnModeCheckBox from "./LearnModeCheckBox";
import LearnModeBarDrag from "./LearnModeBarDrag";
import LearnModeBarClick from "./LearnModeBarClick";
import LearnModeBarScreen from "./LearnModeBarScreen";
import LearnModeRingTally from "./LearnModeRingTally";
import LearnModeRingTotal from "./LearnModeRingTotal";
import LearnModeAddChoice from "./LearnModeAddChoice";
import LearnModeContinue from "./LearnModeContinue";
import LearnModeSelectAnyOne from "./LearnModeSelectAnyOne";
import LearnModeSelectAnyTwo from "./LearnModeSelectAnyTwo";
import LearnModeSelectAnyThree from "./LearnModeSelectAnyThree";
import LearnModeSelectAnyFour from "./LearnModeSelectAnyFour";
import LearnModeSelectAnyFive from "./LearnModeSelectAnyFive";

export default function LearnModePages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LearnModePage />} />
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
          path="/LearnModeSelectAnyOne"
          element={<LearnModeSelectAnyOne />}
        />
        <Route
          path="/LearnModeSelectAnyTwo"
          element={<LearnModeSelectAnyTwo />}
        />
        <Route
          path="/LearnModeSelectAnyThree"
          element={<LearnModeSelectAnyThree />}
        />
        <Route
          path="/LearnModeSelectAnyFour"
          element={<LearnModeSelectAnyFour />}
        />
        <Route
          path="/LearnModeSelectAnyFive"
          element={<LearnModeSelectAnyFive />}
        />
      </Routes>
    </Router>
  );
}
