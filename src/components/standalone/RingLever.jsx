import "../../css/ringLever.css";
export default function Lever({ sorted, onClick }) {
  const className = "ring-lever ring-lever-";
  if (sorted) {
    return (
      <img
        src="/assets/ring-unsort.png"
        className={sorted ? className + "unsort" : ""}
        onClick={onClick}
      />
    );
  }
  return (
    <img
      src="/assets/ring-sort.png"
      className={!sorted ? className + "sort" : ""}
      onClick={onClick}
    />
  );
}
