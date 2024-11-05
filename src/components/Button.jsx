import "../css/Button.css";

const Button = ({ label, className, onClick }) => {
  // const handleClick = (e) => {
  //   console.log(
  //     `${e.target.textContent} button clicked 😁😂😂 It is good to have some sun sha`
  //   );
  // };
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};
export default Button;
