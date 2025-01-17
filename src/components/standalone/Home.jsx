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
          <div className="card" onClick={goToIntroduction}>
            INTRODUCTION
          <div className="card" onClick={goToIntroduction}>
            INTRODUCTION
          </div>
          <div className="card">GUIDED TOUR - SELF PACE</div>
          <div className="card"> SELF-RUNNING OVERVIEW [SIT BACK AND RELAX]</div>
          <div className="card" onClick={goToWelcomeScreen}>
            EXIT
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
