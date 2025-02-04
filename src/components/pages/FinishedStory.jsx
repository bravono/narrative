import Footer from "../Footer";
import Queue from "../Queue";
import Button from "../Button";
import BottomButton from "../BottomButton";
import FooterButton from "../FooterButton";
import { useSelector } from "react-redux";

function FinishedStory() {
  const storeStory = useSelector((state) => state.entities.responses.story);

  return (
    <main className="main-container">
      <Queue className={"queue story"}>
        {<div dangerouslySetInnerHTML={{ __html: storeStory }} />}
      </Queue>
      <div className="preview-buttons">
          <Button
            style={{ marginBottom: "0" }}
            // onClick={}
            label="PDF IT"
            className={` bottom_button`}
          />
          <Button
            style={{ marginBottom: "0" }}
            onClick={handleGoBack}
            label="GO BACK"
            className={`bottom_button primary`}
          />
        </div>
      <section className="bottom-section">
      </section>
    </main>
  );
}

export default FinishedStory;
