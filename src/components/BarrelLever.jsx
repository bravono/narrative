import "../css/lever.css";
export default function Lever({ sorted, onClick }) {
  if (!sorted) {
    return <img src="/assets/sorted.svg" className="lever" onClick={onClick} />;
  }
  return <img src="/assets/unsorted.svg" className="lever" onClick={onClick} />;
}
