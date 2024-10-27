import ScrollArrow from "./ScrollArrow";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import Teleprompter from "./Telepromter";
import Row from "./Row";
import "../css/mainContent.css";
import CheckBox from "./CheckBox";
import ItemList from "./ItemList";
import StickyArrow from "./StickyArrow";
import Barrel from "./Barrel";
import Triangle from "./Triangle";

function MainContent() {
  return (
    <div className="body_content">
      <div className="story_queue-group">
        <ScrollArrow />
        <Queue className={"queue question"}>
          <Teleprompter text="START hello my name is Najeem Mohammed , from Ilorin Kwara State hello my name is Njeem Mohammed , ,hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed , from Ilorin Kwara State END" />
        </Queue>
      </div>
      <MiddleButton />
      <div className="story_queue-single">
        <Queue className={"queue answer"}>
          <Triangle />
        </Queue>
      </div>
    </div>
  );
}

export default MainContent;
