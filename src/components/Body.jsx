import Button from "./Button";
import LoveScroll from "./LoveScroll";
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
      <div className="btn-body">
        <Button label="ADD TO STORY" className="" color="" />
        <Button
          label="PREVIEW"
          className="btn btn-buyfacts"
          color="color-variation-five"
        />
      </div>

      <StoryQueue />
    </div>
  );
}

export default Body;
