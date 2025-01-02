import Footer from "../Footer";
import Queue from "../Queue";
import Button from "../Button";
import { useNavigate, useLocation } from "react-router-dom";
import "../../css/preview.css";

function Preview() {
  const navigate = useNavigate();
  const location = useLocation();
  const story = location.state?.storyBuild; // Access data from location state
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <main className="main-container">
      <section className="preview-container">
        <Queue className={"queue story preview-queue"}>
          <div>{story ? <div dangerouslySetInnerHTML={{ __html: story }} /> : <p>Loading data...</p>}</div>
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
      </section>
    </main>
  );
}

export default Preview;
