import "../css/PointerArrowVertical.css";

function PointerArrowVertical({ direction }) {
  const transform = {
    up: "rotate(90deg)",
    down: "rotate(-90deg)",
  };
  return (
    <img
      src="/assets/LeftPointer.svg"
      className={"LowerPointer-image "}
      style={{ transform: transform[direction] || "rotate(90deg)" }}
    />
  );
}

export default PointerArrowVertical;
