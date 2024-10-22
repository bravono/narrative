import "../css/Button.css";

const Button = ({ label, color, className }) => {
  return <button className={`${className} ${color}`}>{label}</button>;
};
export default Button;
