import Button from "./Button";
import LoveScroll from "./LoveScroll";
import Queue from "./Queue";

function Body() {
  return (
    <div>
      <div className="body">
        <div className="love-scroll">
          <LoveScroll className="love-arrow-up" />
          <LoveScroll className="love-arrow-down" />
        </div>
        <Queue />
      </div>
      <div className="btn-body">
        <Button label="ADD TO STORY" className="" color="" />
        <Button
          label="PREVIEW"
          className="btn btn-buyfacts"
          color="color-variation-five"
        />
      </div>

      <Queue />
    </div>
  );
}

export default Body;
