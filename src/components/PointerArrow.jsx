// import React, { useState, useEffect } from "react";

// const PointerArrow = () => {
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const moveImage = () => {
//     const newPosition = position + direction * 5; // Adjust the movement speed as needed

//     if (newPosition >= window.innerWidth - 50 || newPosition <= 0) {
//       setDirection(direction * -1); // Reverse direction
//     }

//     setPosition(newPosition);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(moveImage, 10); // Adjust the interval as needed

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <img
//       src="/assets/Timer_Arrow.svg" // Replace with your image path
//       alt="Moving Image"
//       // style={{
//       //   position: "absolute",
//       //   left: "${position}px",
//       //   top: "150px", // Adjust the starting position as needed
//       // }}
//     />
//   );
//   s;
// };
// export default PointerArrow;
const PointerArrow = () => {
  const MovingImage = ({ src }) => {
    const [direction, setDirection] = useState("right");
    const [position, setPosition] = useState(0);
    const ref = useRef(null);

    const moveImage = () => {
      const element = ref.current;
      const maxPosition = element.parentNode.clientWidth - element.clientWidth;

      if (direction === "right") {
        setPosition((prevPosition) => {
          const newPosition = prevPosition + 10; // Adjust the movement speed here
          return newPosition > maxPosition ? 0 : newPosition;
        });
      } else {
        setPosition((prevPosition) => {
          const newPosition = prevPosition - 10; // Adjust the movement speed here
          return newPosition < 0 ? maxPosition : newPosition;
        });
      }
    };

    useEffect(() => {
      const intervalId = setInterval(moveImage, 100); // Adjust the movement interval here
      return () => clearInterval(intervalId);
    }, [direction]);

    // Automatically reverse direction when reaching boundaries
    useEffect(() => {
      const element = ref.current;
      const maxPosition = element.parentNode.clientWidth - element.clientWidth;

      if (position === maxPosition) {
        setDirection("left");
      } else if (position === 0) {
        setDirection("right");
      }
    }, [position]);

    return (
      <div>
        <img
          src="/assets/Timer_Arrow.svg"
          alt="Moving image"
          style={{ position: "relative", left: "${position}px" }}
          ref={ref}
        />
      </div>
    );
  };
};
export default PointerArrow;
