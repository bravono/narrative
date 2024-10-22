// function Ring() {
//   return (
//     <>
//       <div>
//         {" "}
//         <div>
//           {" "}
//           <svg width="30%" height="100%" viewBox="0 0 100 100">
//             {" "}
//             <circle
//               cx="50"
//               cy="50"
//               r="45"
//               stroke="#000"
//               strokeWidth="5"
//               fill="none"
//             />{" "}
//             <circle
//               cx="50"
//               cy="50"
//               r="45"
//               stroke="#007bff"
//               strokeWidth="5"
//               strokeDasharray="360, 360"
//             />
//           </svg>
//         </div>
//       </div>{" "}
//     </>
//   );
// }

// export default Ring;

import React, { useState, useRef, useEffect } from "react";

function Ring({ initialValue = 0 }) {
  const [tally, setTally] = useState(initialValue);
  const [total, setTotal] = useState(0);
  const ringRef = useRef(null);
  const dragging = useRef(false);
  const dragStart = useRef(null);
  // const [backgroundColor, setBackgroundColor]

  const handleArrowClick = (direction) => {
    if (direction === "up" && tally > 0) {
      setTotal(total + tally);
      setTally(0);
    } else if (direction === "down" && tally < 100) {
      setTally((prevTally) => prevTally + 10);
      setTotal(Math.min(100, total + 0));
    }
  };

  const handleDragStart = (event) => {
    dragging.current = true;
    dragStart.current = event.clientX;
  };

  const handleDragMove = (event) => {
    if (!dragging.current) return;

    const deltaX = event.clientX - dragStart.current;
    const ringRect = ringRef.current.getBoundingClientRect();
    const newTally = Math.round((deltaX / ringRect.width) * 100);

    if (newTally >= 0 && newTally <= 100) {
      setTally(newTally);
      setTotal(Math.min(100, total + newTally));
    }
  };

  const handleDragEnd = () => {
    dragging.current = false;
  };

  const getBackgoundColor = (newTally) => {
    const percentage = (newTally / 100) * 100;
    const newColor = "hsl(${percentage}, 100%, 50%";
    return newColor;
  };

  // const getBackgoundColor = (newTally) => {
  //   const percentage = (newTally / 100) * 100;
  //   const newColor = "hsl(${percentage}, 100%, 50%";
  //   return newColor;
  // };
  useEffect(() => {
    const handleMouseUp = () => {
      if (dragging.current) {
        handleDragEnd();
      }
    };
    const ringStyle = {
      backgroundColor: getBackgoundColor(initialValue),
    };
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className=" ring-style"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      ref={ringRef}
    >
      <div className="fill-style" />
      <div className="tally-style">{tally}</div>
      <div className="total-style">{total}%</div>

      <img
        src={"/assets/PolygonUp.svg"}
        className="arrow-down"
        onClick={() => handleArrowClick("up")}
      />

      <img
        src={"/assets/PolygonDown.svg"}
        className="arrow-up"
        onClick={() => handleArrowClick("down")}
      />
      <p className="tally-text">TALLY</p>
      <p className="total-text">TOTAL</p>

      {/* <p className>Tally: {tally}</p> */}
      {/* <p>Total: {total}</p> */}
    </div>
  );
}

export default Ring;
