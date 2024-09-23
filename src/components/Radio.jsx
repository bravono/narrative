const RadioOption = ({type, className}) => {
    return (
      <div>
        <input type={type} className={className} />
        {/* <input type="radio" className="radio-btn" />
        <input type="radio" className="radio-btn" />
        <input type="radio" className="radio-btn" /> */}
      </div>
    );
  };
  
  export default RadioOption;