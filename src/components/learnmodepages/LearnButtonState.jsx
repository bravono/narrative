import "../../css/LearnModePage.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function LearnButton({ classNameA }) {
  const navigate = useNavigate();

  const myClick = (label) => {
    if (label === "PREVIOUS" && location.pathname === "/LearnModeTimer") {
      alert("Routing to WelcomePageLM");
      navigate("/");
    } else if (label === "NEXT" && location.pathname === "/LearnModeTimer") {
      alert("Routing to LearnModeStart");
      navigate("/LearnModeStart");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeAddChoice"
    ) {
      alert("Routing to LearnModeRingTotal");
      navigate("/LearnModeRingTotal");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeAddChoice"
    ) {
      alert("Routing to LearnModeContinue");
      navigate("/LearnModeContinue");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeAddToStory"
    ) {
      alert("Routing to LearnModePause");
      navigate("/LearnModePause");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeAddToStory"
    ) {
      alert("Routing to LearnModePreview");
      navigate("/LearnModePreview");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarClick"
    ) {
      alert("Routing to LearnModeBarDrag");
      navigate("/LearnModeBarDrag");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarClick") {
      alert("Routing to LearnModeBarScreen");
      navigate("/LearnModeBarScreen");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarDrag"
    ) {
      alert("Routing to LearnModeCheckBox");
      navigate("/LearnModeCheckBox");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarDrag") {
      alert("Routing to LearnModeBarClick");
      navigate("/LearnModeBarClick");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarrel"
    ) {
      alert("Routing to LearnModeExit");
      navigate("/LearnModeExit");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarrel") {
      alert("Routing to LearnModeToggle");
      navigate("/LearnModeToggle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarScreen"
    ) {
      alert("Routing to LearnModeBarClick");
      navigate("/LearnModeBarClick");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeBarScreen"
    ) {
      alert("Routing to LearnModeRingTally");
      navigate("/LearnModeRingTally");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeCheckBox"
    ) {
      alert("Routing to LearnModeRadio");
      navigate("/LearnModeRadio");
    } else if (label === "NEXT" && location.pathname === "/LearnModeCheckBox") {
      alert("Routing to LearnModeBarDrag");
      navigate("/LearnModeBarDrag");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeColumn"
    ) {
      alert("Routing to LearnModeStickyArrowRate");
      navigate("/LearnModeStickyArrowRate");
    } else if (label === "NEXT" && location.pathname === "/LearnModeColumn") {
      alert("Routing to LearnModeRadio");
      navigate("/LearnModeRadio");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeCompare"
    ) {
      alert("Routing to LearnModePreview");
      navigate("/LearnModePreview");
    } else if (label === "NEXT" && location.pathname === "/LearnModeCompare") {
      alert("Routing to LearnModeTalk");
      navigate("/LearnModeTalk");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeContinue"
    ) {
      alert("Routing to LearnModeAddChoice");
      navigate("/LearnModeAddChoice");
    } else if (label === "NEXT" && location.pathname === "/LearnModeContinue") {
      alert("Routing to LearnModeSelectAnything");
      navigate("/LearnModeSelectAnything");
    } else if (label === "PREVIOUS" && location.pathname === "/LearnModeExit") {
      alert("Routing to LearnModePdfIt");
      navigate("/LearnModePdfIt");
    } else if (label === "NEXT" && location.pathname === "/LearnModeExit") {
      alert("Routing to LearnModeBarrel");
      navigate("/LearnModeBarrel");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePause"
    ) {
      alert("Routing to LearnModeStart");
      navigate("/LearnModeStart");
    } else if (label === "NEXT" && location.pathname === "/LearnModePause") {
      alert("Routing to LearnModeAddToStory");
      navigate("/LearnModeAddToStory");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePdfIt"
    ) {
      alert("Routing to LearnModeTalk");
      navigate("/LearnModeTalk");
    } else if (label === "NEXT" && location.pathname === "/LearnModePdfIt") {
      alert("Routing to LearnModeExit");
      navigate("/LearnModeExit");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePreview"
    ) {
      alert("Routing to LearnModeAddToStory");
      navigate("/LearnModeAddToStory");
    } else if (label === "NEXT" && location.pathname === "/LearnModePreview") {
      alert("Routing to LearnModeCompare");
      navigate("/LearnModeCompare");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRadio"
    ) {
      alert("Routing to LearnModeColumn");
      navigate("/LearnModeColumn");
    } else if (label === "NEXT" && location.pathname === "/LearnModeRadio") {
      alert("Routing to LearnModeCheckBox");
      navigate("/LearnModeCheckBox");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRingTally"
    ) {
      alert("Routing to LearnModeBarScreen");
      navigate("/LearnModeBarScreen");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeRingTally"
    ) {
      alert("Routing to LearnModeRingTotal");
      navigate("/LearnModeRingTotal");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRingTotal"
    ) {
      alert("Routing to LearnModeRingTally");
      navigate("/LearnModeRingTally");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeRingTotal"
    ) {
      alert("Routing to LearnModeAddChoice");
      navigate("/LearnModeAddChoice");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeSelectAnything"
    ) {
      alert("Routing to LearnModeContinue");
      navigate("/LearnModeContinue");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeSelectAnything"
    ) {
      alert(
        "This is the End. Click the previous button to go back to the previous page or Click Home to go back to the beginning."
      );
      // navigate("/WelcomePageLM");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStart"
    ) {
      alert("Routing to LearnModeTimer");
      navigate("/LearnModeTimer");
    } else if (label === "NEXT" && location.pathname === "/LearnModeStart") {
      alert("Routing to LearnModePause");
      navigate("/LearnModePause");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      alert("Routing to LearnModeToggle");
      navigate("/LearnModeToggle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      alert("Routing to LearnModeStickyArrowSingle");
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      alert("Routing to LearnModeToggle");
      navigate("/LearnModeToggle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      alert("Routing to LearnModeStickyArrowSingle");
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowRanking"
    ) {
      alert("Routing to LearnModeStickyArrowSingle");
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowRanking"
    ) {
      alert("Routing to LearnModeStickyArrowRate");
      navigate("/LearnModeStickyArrowRate");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowRate"
    ) {
      alert("Routing to LearnModeStickyArrowRanking");
      navigate("/LearnModeStickyArrowRanking");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowRate"
    ) {
      alert("Routing to LearnModeColumn");
      navigate("/LearnModeColumn");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowSingle"
    ) {
      alert("Routing to LearnModeStickyArrowMultiple");
      navigate("/LearnModeStickyArrowMultiple");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowSingle"
    ) {
      alert("Routing to LearnModeStickyArrowRanking");
      navigate("/LearnModeStickyArrowRanking");
    } else if (label === "PREVIOUS" && location.pathname === "/LearnModeTalk") {
      alert("Routing to LearnModeCompare");
      navigate("/LearnModeCompare");
    } else if (label === "NEXT" && location.pathname === "/LearnModeTalk") {
      alert("Routing to LearnModePdfIt");
      navigate("/LearnModePdfIt");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeToggle"
    ) {
      alert("Routing to LearnModeBarrel");
      navigate("/LearnModeBarrel");
    } else if (label === "NEXT" && location.pathname === "/LearnModeToggle") {
      alert("Routing to LearnModeStickyArrowMultiple");
      navigate("/LearnModeStickyArrowMultiple");
    }
  };

  return (
    <div className="talkbubble-btn">
      <Button
        onClick={() => myClick("PREVIOUS")}
        label="PREVIOUS"
        className={`${classNameA} bottom_button talk-btn-learn`}
      />
      <Button
        onClick={() => myClick("NEXT")}
        label="NEXT"
        className={`${classNameA} bottom_button talk-btn-exit`}
      />
    </div>
  );
}
