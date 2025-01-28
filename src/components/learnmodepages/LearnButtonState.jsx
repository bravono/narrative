import "../../css/LearnModePage.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function LearnButton({ classNameA }) {
  const navigate = useNavigate();

  const myClick = (label) => {
    if (label === "EXIT") {
      navigate("/activemode");
    }
    if (label === "PREVIOUS" && location.pathname === "/LearnModeTimer") {
      navigate("/");
    } else if (label === "NEXT" && location.pathname === "/LearnModeTimer") {
      navigate("/LearnModeStart");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeAddChoice"
    ) {
      navigate("/LearnModeRingTotal");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeAddChoice"
    ) {
      navigate("/LearnModeContinue");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeAddToStory"
    ) {
      navigate("/LearnModePause");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeAddToStory"
    ) {
      navigate("/LearnModePreview");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarClick"
    ) {
      navigate("/LearnModeBarDrag");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarClick") {
      navigate("/LearnModeBarScreen");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarDrag"
    ) {
      navigate("/LearnModeCheckBox");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarDrag") {
      navigate("/LearnModeBarClick");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarrel"
    ) {
      navigate("/LearnModeExit");
    } else if (label === "NEXT" && location.pathname === "/LearnModeBarrel") {
      navigate("/LearnModeToggle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeBarScreen"
    ) {
      navigate("/LearnModeBarClick");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeBarScreen"
    ) {
      navigate("/LearnModeRingTally");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeCheckBox"
    ) {
      navigate("/LearnModeRadio");
    } else if (label === "NEXT" && location.pathname === "/LearnModeCheckBox") {
      navigate("/LearnModeBarDrag");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeColumn"
    ) {
      navigate("/LearnModeStickyArrowRate");
    } else if (label === "NEXT" && location.pathname === "/LearnModeColumn") {
      navigate("/LearnModeRadio");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeCompare"
    ) {
      navigate("/LearnModePreview");
    } else if (label === "NEXT" && location.pathname === "/LearnModeCompare") {
      navigate("/LearnModeTalk");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeContinue"
    ) {
      navigate("/LearnModeAddChoice");
    } else if (label === "NEXT" && location.pathname === "/LearnModeContinue") {
      navigate("/LearnModeSelectAnything");
    } else if (label === "PREVIOUS" && location.pathname === "/LearnModeExit") {
      navigate("/LearnModePdfIt");
    } else if (label === "NEXT" && location.pathname === "/LearnModeExit") {
      navigate("/LearnModeBarrel");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePause"
    ) {
      navigate("/LearnModeStart");
    } else if (label === "NEXT" && location.pathname === "/LearnModePause") {
      navigate("/LearnModeAddToStory");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePdfIt"
    ) {
      navigate("/LearnModeTalk");
    } else if (label === "NEXT" && location.pathname === "/LearnModePdfIt") {
      navigate("/LearnModeExit");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModePreview"
    ) {
      navigate("/LearnModeAddToStory");
    } else if (label === "NEXT" && location.pathname === "/LearnModePreview") {
      navigate("/LearnModeCompare");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRadio"
    ) {
      navigate("/LearnModeColumn");
    } else if (label === "NEXT" && location.pathname === "/LearnModeRadio") {
      navigate("/LearnModeCheckBox");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRingTally"
    ) {
      navigate("/LearnModeBarScreen");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeRingTally"
    ) {
      navigate("/LearnModeRingTotal");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeRingTotal"
    ) {
      navigate("/LearnModeRingTally");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeRingTotal"
    ) {
      navigate("/LearnModeAddChoice");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeSelectAnything"
    ) {
      navigate("/LearnModeContinue");
    } else if (
      label === "EXIT" &&
      location.pathname === "/LearnModeSelectAnything"
    ) {
      navigate("/activemode");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStart"
    ) {
      navigate("/LearnModeTimer");
    } else if (label === "NEXT" && location.pathname === "/LearnModeStart") {
      navigate("/LearnModePause");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      navigate("/LearnModeToggle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      navigate("/LearnModeToggle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowMultiple"
    ) {
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowRanking"
    ) {
      navigate("/LearnModeStickyArrowSingle");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowRanking"
    ) {
      navigate("/LearnModeStickyArrowRate");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowRate"
    ) {
      navigate("/LearnModeStickyArrowRanking");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowRate"
    ) {
      navigate("/LearnModeColumn");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeStickyArrowSingle"
    ) {
      navigate("/LearnModeStickyArrowMultiple");
    } else if (
      label === "NEXT" &&
      location.pathname === "/LearnModeStickyArrowSingle"
    ) {
      navigate("/LearnModeStickyArrowRanking");
    } else if (label === "PREVIOUS" && location.pathname === "/LearnModeTalk") {
      navigate("/LearnModeCompare");
    } else if (label === "NEXT" && location.pathname === "/LearnModeTalk") {
      navigate("/LearnModePdfIt");
    } else if (
      label === "PREVIOUS" &&
      location.pathname === "/LearnModeToggle"
    ) {
      navigate("/LearnModeBarrel");
    } else if (label === "NEXT" && location.pathname === "/LearnModeToggle") {
      navigate("/LearnModeStickyArrowMultiple");
    }
  };

  return (
    <div className="learn_mode_navigator">
      <Button
        onClick={() => myClick("PREVIOUS")}
        label="PREVIOUS"
        className={`${classNameA}  talk-btn-learn learntext`}
      />
      <Button
        onClick={() => myClick("NEXT")}
        label="NEXT"
        className={`${classNameA}  talk-btn-next nexttext`}
      />

      <Button
        onClick={() => myClick("EXIT")}
        label="EXIT"
        className={`${classNameA}  talk-btn-exit exittext`}
      />
    </div>
  );
}
