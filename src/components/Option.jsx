
const OptionComp = () => {
  return (
    <div>
      <div className="App-question option">
        <div className="option-area">
          <div className="circle">
            <div className="circle-black"></div>
          </div>
          <div className="option-text-area">
            <div className="option-value white"></div>
            <div className="option-value">
              At a set Time For Each Meal Except on Wednesday
            </div>
            <div className="option-value">Variale by An Hour or Two</div>
            <div className="option-value">When I Get Hungry</div>
            <div className="option-value black">
              I Never Know from Day to Day
            </div>
          </div>

          <div className="option-text-area">
            <div className="half-white">
              <div className="half-white space"></div>
              <input type="radio" className="radio-btn" />
              <input type="radio" className="radio-btn" />
              <input type="radio" className="radio-btn" />
              <input type="radio" className="radio-btn" />
            </div>
          </div>
        </div>
        <p className="option-value select">Select Up To Six</p>
        <div className="add">
          <div className="the-c choice">ADD CHOICE</div>
          <div className="the-c continue">CONTINUE</div>
        </div>
      </div>

      <div className="add">
        <div className="confirm-btn pause comp">COMPARE</div>
        <div className="confirm-btn pause talk">TALK</div>
      </div>

      <div className="add">
        <div className="confirm-btn pdf">PDF IT</div>
        <div className="confirm-btn exit">EXIT</div>
      </div>
    </div>
  );
};

export default OptionComp;
