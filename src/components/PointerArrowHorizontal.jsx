import "../css/PointerArrow.css";

import React, { useEffect } from "react";

// function PointerArrow({ direction }) {
//   const getRotation = (direction) => {
//     switch (direction) {
//       case "left":
//         return 180;
//       case "right":
//         return 0;
//       case "up":
//         return 90;
//       case "down":
//         return -90;
//       default:
//         return 0;
//     }
//   };

//   const transformStyle = {
//     transform: "rotate(" + getRotation(direction) + "deg)",
//   };

//   useEffect(() => {
//     setAnimation(direction);
//   }, [direction]);

//   const setAnimation = (direction) => {
//     const imageElement = document.querySelector(".PointerArrow-image");
//     imageElement.classList.remove("upDown", "leftRight");

//     if (direction === "up" || direction === "down") {
//       imageElement.classList.add("upDown");
//     } else if (direction === "left" || direction === "right") {
//       imageElement.classList.add("leftRight");
//     }
//   };

//   return (
//     <img
//       src="/assets/LowerPointer.svg"
//       className={"PointerArrow-image ${direction}"}
//       style={transformStyle}
//     />
//   );
// }

// export default PointerArrow;

function PointerArrowHorizontal({ direction }) {
  const transform = {
    left: "rotate(-90deg)",
    right: "rotate(90deg)",
    // up: "rotate(-90deg)",
    // down: "rotate(90deg)",
  };
  return (
    <img
      src="/assets/LowerPointer.svg"
      className={"LowerPointer-image ${direction}"}
      style={{ transform: transform[direction] || "rotate(90deg)" }}
    />
  );
}

export default PointerArrowHorizontal;

// import React, { useState, useEffect } from "react";

// function PointerArrow({ direction }) {
//   const [isMoving, setIsMoving] = useState(false);
//   const [moveDirection, setMoveDirection] = useState(direction);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIsMoving(!isMoving);
//     }, 1000); // Adjust the interval as needed

//     return () => clearInterval(intervalId);
//   }, [isMoving, moveDirection]);

//   const getTransform = () => {
//     const transform = {
//       left: "rotate(180deg)",
//       right: "rotate(0deg)",
//       up: "rotate(-90deg)",
//       down: "rotate(90deg)",
//     };

//     return transform[direction];
//   };

//   const getAnimationClass = () => {
//     switch (moveDirection) {
//       case "left":
//         return isMoving ? "move-left" : "move-right";
//       case "right":
//         return isMoving ? "move-right" : "move-left";
//       case "up":
//         return isMoving ? "move-up" : "move-down";
//       case "down":
//         return isMoving ? "move-down" : "move-up";
//       default:
//         return "";
//     }
//   };
// const className =
//   return (
//     <img
//       src="/assets/LowerPointer.svg"
//       className={LowerPointer-image ${direction} ${getAnimationClass()}'}
//       style={{ transform: getTransform() }}
//     />
//   );
// }

// export default PointerArrow;
