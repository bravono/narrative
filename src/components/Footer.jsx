import "../css/Footer.css";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="bottom-buttons">
      <div className="btn-btm-first-row">
        <Button
          label="COMPARE"
          className="button"
          color="color-variation-five"
        />
        <Button label="TALK" className="button" color="color-variation-five" />
      </div>
      <div className="btn-btm-second-row">
        <Button
          label="PDF IT"
          className="button"
          color="color-variation-five"
        />
        <Button label="EXIT" className="button" color="color-variation-five" />
      </div>
    </div>
  );
}
