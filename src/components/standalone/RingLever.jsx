import "../../css/ringLever.css";
export default function Lever({ sorted, onClick }) {
  const className = "ring-lever ring-lever-";
  if (sorted) {
    return (
      <img
        src="/assets/ring-sort.svg"
        className={sorted ? className + "sort" : ""}
        onClick={onClick}
      />
    );
  }
  return (
    <img
      src="/assets/ring-unsort.svg"
      className={!sorted ? className + "unsort" : ""}
      onClick={onClick}
    />
  );
}
