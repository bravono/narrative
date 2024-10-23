import React from "react";
import Edge from "./Edge";
import Timer from "./Timer";
import TimerArrow from "./TimerArrow";
import Logo from "./Logo";
import Button from "./Button";
import "../css/header.css";
import TopButton from "./TopButton";

const Header = () => {
  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="header">
        <Edge />
        <Timer duration={"10:00"} label={"PENDING"} />
        <TopButton />
      </div>
    </>
  );
};

export default Header;
