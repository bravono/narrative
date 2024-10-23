import Button from "./Button";
import LoveScroll from "./LoveScroll";
import Queue from "./Queue";
import Bar from "./Bar";
import Teleprompter from "./Telepromter";

function Body() {
  return (
    <div>
      <div className="body">
        <div className="love-scroll">
          <LoveScroll className="love-arrow-up" />
          <LoveScroll className="love-arrow-down" />
        </div>
        <Queue>
          <Teleprompter text="START hello my name is Najeem Mohammed , from Ilorin Kwara State hello my name is Njeem Mohammed , ,hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed hello my name is Njeem Mohammed , from Ilorin Kwara State END" />
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
