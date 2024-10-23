import Button from "./Button";
import LoveScroll from "./LoveScroll";
import Queue from "./Queue";
import Bar from "./Bar";

function Body() {
  return (
    <div>
      <div className="body">
        <div className="love-scroll">
          <LoveScroll className="love-arrow-up" />
          <LoveScroll className="love-arrow-down" />
        </div>
        <Queue>
          <p>
            Eating food is often a personal pleasure and social activity. Some
            people like all types of ....
          </p>
        </Queue>
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

      <Queue>
        <Bar />
      </Queue>
    </div>
  );
}

export default Body;
