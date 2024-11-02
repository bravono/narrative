import ScrollArrow from "./ScrollArrow";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import Teleprompter from "./Telepromter";
import "../css/mainContent.css";
import ItemList from "./ItemList";
import StickyArrow from "./StickyArrow";
import Bar from "./Bar";
import Barrel from "./Barrel";
import Ring from "./Ring";

function MainContent({ ...props }) {
  return (
    <div className="body_content">
      <div className="story_queue-group">
        <ScrollArrow />
        <Queue className={"queue question"}>
          <Teleprompter text="START hello my name is Najeem Mohammed , from Ilorin Kwara State hello my name is Njeem Mohammed , ,hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed , from Ilorin Kwara State END" />
        </Queue>
      </div>
      <MiddleButton {...props} />
      <div className="story_queue-single">
        {/* <Queue className={"queue answer"}> */}
        <Ring />
        <Queue className={"story-queue answer"} />
      </div>
    </div>
  );
}

export default MainContent;
