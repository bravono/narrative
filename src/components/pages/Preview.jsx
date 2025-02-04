import Footer from "../Footer";
import Cue from "../Cue";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import "../../css/preview.css";

function Preview() {
  const navigate = useNavigate();
  const storeStory = useSelector((state) => state.entities.responses.story);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <main className="main-container">
      <section className="preview-container">
        <Cue className={"queue story preview-queue"}>
        { <div dangerouslySetInnerHTML={{ __html: storeStory }} />}
        </Cue>
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
      </section>
    </main>
  );
}

export default Preview;
