import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";

const Home = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const goToWelcomeScreen = () => {
    navigate("/welcome");
  };
  const goToIntroduction = () => {
    navigate("/introduction");
  };

  return (
    <>
      <main className=" local-container ">
        <div className="logo-container">

          <img id="logo" src="/assets/Research_Lib_Logo.svg" alt="" />
        </div>
       
        <div className="cards">
          <div className="card" onClick={goToIntroduction}>Introduction</div>
          <div className="card">
            Ten Minute Story-Based Survey Experience
          </div>
          <div className="card">Self-Running Overview [SitBack and Relax]</div>
          <div
            className="card"
            onClick={goToWelcomeScreen}
          >
            Exit
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
