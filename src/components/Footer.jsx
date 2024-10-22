import "../css/Footer.css";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="bottom-buttons">
      <div className="btn-btm-first-row">
        <Button
          label="COMPARE"
          className="button"
          color="color-variation-one"
        />
        <Button label="TALK" className="button" color="color-variation-two" />
      </div>
      <div className="btn-btm-second-row">
        <Button
          label="PDF IT"
          className="button"
          color="color-variation-three"
        />
        <Button label="EXIT" className="button" color="color-variation-four" />
      </div>
    </div>
  );
}
