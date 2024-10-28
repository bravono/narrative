import React from "react";
import Edge from "./Edge";
import Timer from "./Timer";
import Logo from "./Logo";
import TopButton from "./TopButton";
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
        <TopButton classNameA={"primary"} />
      </div>
    </>
  );
};

export default Header;
