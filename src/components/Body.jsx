import LoveScroll from "./LoveScroll";
import MiddleButton from "./MiddleButton";
import StoryQueue from "./StoryQueue";

function Body() {
  return (
    <div>
      <div className="body">
        <div className="love-scroll">
          <LoveScroll className="love-arrow-up" />
          <LoveScroll className="love-arrow-down" />
        </div>
        <StoryQueue />
      </div>
      <MiddleButton />
      <StoryQueue />
    </div>
  );
}

export default Body;
