import "../../css/ringLever.css";
export default function Lever({ sorted, onClick }) {
  if (sorted) {
    return (
      <img
        src="/assets/ring-sort.svg"
        className="ring-lever "
        onClick={onClick}
      />
    );
  }
  return (
    <img
      src="/assets/ring-unsort.svg"
      className="ring-lever "
      onClick={onClick}
    />
  );
}
