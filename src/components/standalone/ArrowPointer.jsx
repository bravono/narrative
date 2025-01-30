import "../../css/ArrowPointer.css";
function ArrowPointer({ style, rotation }) {
  return (
    <img
      src="/assets/PointerArrow.svg"
      className={`${style} arrow_pointer animate__animated animate__fadeIn animate__infinite to_timer`}
      style={{
        position: "absolute",
        transform: rotation || "rotate(90deg)",
      }}
    />
  );
}

export default ArrowPointer;
