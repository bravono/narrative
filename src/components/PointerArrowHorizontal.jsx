import "../css/PointerArrowHorizontal.css";

function PointerArrowHorizontal({ direction }) {
  const transform = {
    left: "rotate(-355deg)",
    right: "rotate(180deg)",
  };
  return (
    <img
      src="/assets/PointerArrow.svg"
      className="Pointer-image"
      style={{ transform: transform[direction] || "rotate(90deg)" }}
    />
  );
}

export default PointerArrowHorizontal;
