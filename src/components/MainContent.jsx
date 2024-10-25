import ScrollArrow from "./ScrollArrow";
import MiddleButton from "./MiddleButton";
import Queue from "./Queue";
import Bar from "./Bar";
import Teleprompter from "./Telepromter";
import RadioButton from "./RadioButton";
import "../css/mainContent.css";
import CheckBox from "./CheckBox";
import ItemList from "./ItemList";
import StickyArrow from "./StickyArrow";

function Body() {
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
          {/* <ItemList type="checkbox" items={["One", "Two", "Three", "Four"]} /> */}
          <StickyArrow types="large" label="MULTI CHOICE" color="white" />
          <StickyArrow types="large" label="MULTI CHOICE" color="red" />
          <StickyArrow types="large" label="MULTI CHOICE" color="yellow" />
        </Queue>
      </div>
    </div>
  );
}

export default Body;
