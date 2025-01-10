import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/home.css";

const Home = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const goToWelcomeScreen = () => {
    navigate("/welcome");
  };

  return (
    <>
      <main className=" local-container d-flex flex-column justify-content-center align-items-center border border-0">
        {/* <div className="logo-group">
          <img id="logo" src="/cubicon_logo.png" alt="Logo" />
        </div> */}

        <div className="cards">
          <div className="card">Introduction</div>
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
        <div className="my-icon ">
          <img className=" star " src="/Star 3.svg" alt="" />
        </div>
      </main>
    </>
  );
};

export default Home;
