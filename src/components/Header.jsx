import React from "react";
import Edge from "./Edge";
import Timer from "./Timer";
import TimerArrow from "./TimerArrow";
import Logo from "./Logo";
import Button from "./Button";
import "../css/header.css";

const Header = () => {
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="header">
        <Edge />
        <Timer duration={"10:00"} label={"PENDING"} />
        <div className="top-button-group">
          <Button label="START" className="top-button" />
          <Button label="PAUSE" className="top-button" />
        </div>
      </div>
    </>
  );
};

export default Header;
