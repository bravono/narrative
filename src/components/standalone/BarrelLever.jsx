import "../../css/barrelLever.css";
export default function Lever({ sorted, onClick }) {
  const className = "barrel-lever barrel-lever-";
  if (sorted) {
    return (
      <img
        src="/assets/sorted.svg"
        className={sorted ? className + "sort" : ""}
        onClick={onClick}
      />
    );
  }
  return (
    <img
      src="/assets/unsorted.svg"
      className={!sorted ? className + "unsort" : ""}
      onClick={onClick}
    />
  );
}
