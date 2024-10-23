import Button from "./Button";
import LoveScroll from "./LoveScroll";
import StoryQueue from "./StoryQueue";
import Bar from "./Bar";

function Body() {
  return (
    <div>
      <div className="body">
        <div className="love-scroll">
          <LoveScroll className="love-arrow-up" />
          <LoveScroll className="love-arrow-down" />
        </div>
        <StoryQueue>
          <p>
            Eating food is often a personal pleasure and social activity. Some
            people like all types of ....
          </p>
        </StoryQueue>
      </div>
      <div className="btn-body">
        <Button
          label="ADD TO STORY"
          className="btn btn-buyfacts"
          color="color-variation-five"
        />
        <Button
          label="PREVIEW"
          className="btn btn-buyfacts"
          color="color-variation-five"
        />
      </div>

      <StoryQueue>
        <Bar />
      </StoryQueue>
    </div>
  );
}

export default Body;
