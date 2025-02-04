import React from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import Cue from "../Cue";
import Teleprompter from "../standalone/Teleprompter";
import Button from "../Button";
import "../../css/FinishPage.css";

function FinishPage() {
  const storeStory = useSelector((state) => state.entities.responses.story);
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(storeStory, 10, 10);
    doc.save("story.pdf");
  };

  const handleExit = () => {
    navigate("/exit");
  };

  return (
    <main className="main-container">
      <section className="main-section">
        <Cue className={"queue story"}>
          <Teleprompter story={`Thank you for telling your story. You can now print or download your finished story or EXIT.`}>
            <div dangerouslySetInnerHTML={{ __html: storeStory }} />
          </Teleprompter>
        </Cue>
        <div className="finish-buttons">
          <Button
            onClick={handleDownloadPDF}
            label="PDF IT"
            className={`bottom_button primary`}
          />
          <Button
            onClick={handleExit}
            label="EXIT"
            className={`bottom_button primary`}
          />
        </div>
      </section>
    </main>
  );
}

export default FinishPage;
