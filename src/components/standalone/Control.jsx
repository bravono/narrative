import React, { useState } from "react";
import "../../css/control.css";

function Control({ type = "rank" }) {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    if (type === "rank" && number < 6) {
      setNumber(number + 1);
    }

    if (number < 5) {
      setNumber(number + 1);
    }
  };

  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div className="control-container">
        {type === "rank" ? (
          <svg
            width="40"
            height="87"
            viewBox="0 0 52 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.25"
              y="0.25"
              width="51.5"
              height="86.5"
              rx="4.75"
              fill="#44CEEC"
              stroke="black"
              strokeWidth="0.5"
            />

            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="black"
              fontSize="70"
              fontWeight="100"
            >
              {number > 1 ? number : "?"}
            </text>
          </svg>
        ) : (
          <svg
            width="38"
            height="37"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.67 36.05L18.96 29.89L7.24 36.05L9.48 23L0 13.77L13.1 11.86L18.96 0L24.81 11.87L37.91 13.77L28.43 23L30.67 36.05Z"
              fill="#F2F2F2"
            />
            <path
              d="M18.96 1.65L24.16 12.19L24.33 12.53L24.71 12.59L36.34 14.28L27.92 22.48L27.65 22.75L27.71 23.13L29.71 34.71L19.27 29.24L18.93 29.06L18.59 29.24L8.21 34.71L10.21 23.13L10.28 22.75L10 22.48L1.59 14.28L13.21 12.59L13.6 12.53L13.77 12.19L18.97 1.65M18.97 0L13.1 11.87L0 13.77L9.48 23L7.27 36.05L18.96 29.87L30.67 36.05L28.43 23.05L37.91 13.82L24.81 11.87L18.96 0H18.97Z"
              fill="black"
            />
            <path
              d="M18.82 11.0801C20.5763 11.0801 22.2931 11.6009 23.7534 12.5766C25.2137 13.5524 26.3519 14.9393 27.024 16.5619C27.6961 18.1845 27.872 19.9699 27.5293 21.6925C27.1867 23.4151 26.341 24.9973 25.0991 26.2392C23.8572 27.4811 22.2749 28.3268 20.5524 28.6695C18.8298 29.0121 17.0443 28.8363 15.4217 28.1642C13.7991 27.492 12.4123 26.3539 11.4365 24.8936C10.4608 23.4333 9.93997 21.7164 9.93997 19.9601C9.93997 17.605 10.8755 15.3463 12.5409 13.681C14.2062 12.0157 16.4648 11.0801 18.82 11.0801ZM18.82 10.3501C16.9193 10.3501 15.0613 10.9137 13.4809 11.9697C11.9006 13.0256 10.6688 14.5265 9.94148 16.2825C9.21413 18.0385 9.02381 19.9708 9.39462 21.8349C9.76542 23.6991 10.6807 25.4114 12.0247 26.7554C13.3687 28.0994 15.081 29.0146 16.9451 29.3854C18.8093 29.7562 20.7416 29.5659 22.4976 28.8386C24.2536 28.1112 25.7544 26.8795 26.8104 25.2991C27.8664 23.7188 28.43 21.8608 28.43 19.9601C28.4273 17.4122 27.414 14.9694 25.6123 13.1677C23.8107 11.3661 21.3679 10.3527 18.82 10.3501Z"
              fill="black"
            />
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="black"
              fontSize="20"
              fontWeight="100"
            >
              {number > 1 ? number : "?"}
            </text>
          </svg>
        )}

        <div className="control-buttons">
          <button className="control-button" onClick={handleDecrement}>
            -
          </button>
          <button className="control-button" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Control;
