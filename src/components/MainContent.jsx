import ScrollArrow from "./ScrollArrow";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import Teleprompter from "./Telepromter";
import "../css/mainContent.css";
import ItemList from "./ItemList";
import StickyArrow from "./StickyArrow";
import CheckBox from "./CheckBox";
import CheckBoxDone from "./CheckBoxDone";
import CheckBoxInactive from "./CheckBoxInactive";
import PointerArrowHorizontal from "./PointerArrowHorizontal";

function MainContent() {
  return (
    <div className="body_main">
      <div className="story_queue-group">
        <ScrollArrow />
        <Queue className={"story-queue question"}>
          <Teleprompter text="START hello my name is Najeem Mohammed , from Ilorin Kwara State hello my name is Njeem Mohammed , ,hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed , from Ilorin Kwara State END" />
        </Queue>
      </div>
      <MiddleButton />
      <div className="story_queue-single">
        <Queue className={"story-queue answer"}>
          <CheckBoxDone />
          <CheckBoxInactive />
          <PointerArrowHorizontal direction="right" />
        </Queue>
      </div>
    </div>
  );
}

export default MainContent;
