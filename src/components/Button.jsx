import "../css/Button.css";

const Button = ({ label, className }) => {
  const handleClick = (e) => {
    console.log(
      `${e.target.textContent} button clicked 😁😂😂 It is good to have some sun sha`
    );
  };
  return (
    <button onClick={handleClick} className={`button ${className}`}>
      {label}
    </button>
  );
};
export default Button;
