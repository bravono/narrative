import "../../css/ArrowPointer.css";
function ArrowPointer({ left, top, rotation }) {
  
  return (
    <img
      src="/assets/PointerArrow.svg"
      className="arrow_pointer"
      style={{ position: "absolute", left: left, top: top, transform: rotation || "rotate(90deg)" }}
    />
  );
}

export default ArrowPointer;
