// import React, { useState, useRef } from "react";

// const Triangle = () => {
//   const [angle, setAngle] = useState(0);
//   const triangleRef = useRef(null);

//   const handleDragStart = (event) => {
//     // Handle drag start logic
//   };

//   const handleDragMove = (event) => {
//     // Calculate new angle based on mouse position
//     const newAngle = calculateAngle(
//       event.clientX,
//       event.clientY,
//       triangleRef.current
//     );
//     setAngle(newAngle);
//   };

//   const handleDragEnd = (event) => {

//   };

//   const calculateAngle = (clientX, clientY, triangleRef) => {
//     // Calculate angle based on mouse position relative to triangle
//     const rect = triangleRef.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const dx = clientX - centerX;
//     const dy = clientY - centerY;
//     const radians = Math.atan2(dy, dx);
//     const degrees = (radians * 180) / Math.PI;
//     return degrees;
//   };

//   return (
//     <div className="triangle-container" ref={triangleRef}>
//       <div className="triangle">
//         <div className="ball" style={{ transform: "rotate(${angle}deg)" }} />
//       </div>
//       <div className="label">Label 1</div>
//       <div className="label">Label 1</div>
//       <div className="label">Label 1</div>
//     </div>
//   );
// };

// export default Triangle;

// import React, { useState, useRef } from "react";

// function Triangle() {
//   const [activeCorner, setActiveCorner] = useState(null);
//   const triangleRef = useRef(null);

//   const handleDragStart = (event) => {
//     event.preventDefault();
//     const ballRect = event.target.getBoundingClientRect();
//     const triangleRect = triangleRef.current.getBoundingClientRect();
//     const initialX = event.clientX - ballRect.left;
//     const initialY = event.clientY - ballRect.top;

//     const dragHandler = (event) => {
//       const x = event.clientX - triangleRect.left - initialX;
//       const y = event.clientY - triangleRect.top - initialY;

//       // Constrain the ball within the triangle
//       const maxX = triangleRect.width - ballRect.width;
//       const maxY = triangleRect.height - ballRect.height;
//       const constrainedX = Math.max(0, Math.min(x, maxX));
//       const constrainedY = Math.max(0, Math.min(y, maxY));

//       event.target.style.left = "${constrainedX}px";
//       event.target.style.top = "${constrainedY}px";

//       // Determine the active corner based on ball position
//       const newActiveCorner = calculateActiveCorner(
//         constrainedX,
//         constrainedY,
//         triangleRect
//       );
//       if (newActiveCorner !== activeCorner) {
//         setActiveCorner(newActiveCorner);
//       }
//     };

//     const dragEnd = () => {
//       document.removeEventListener("mousemove", dragHandler);
//       document.removeEventListener("mouseup", dragEnd);
//     };

//     document.addEventListener("mousemove", dragHandler);
//     document.addEventListener("mouseup", dragEnd);
//   };

//   const calculateActiveCorner = (x, y, triangleRect) => {
//     const triangleWidth = triangleRect.width;
//     const triangleHeight = triangleRect.height;
//     const centerX = triangleWidth / 2;
//     const centerY = triangleHeight / 2;
//     const radius = Math.min(centerX, centerY);

//     if (x <= centerX && y <= radius) {
//       return "topLeft";
//     } else if (x >= centerX && y <= radius) {
//       return "topRight";
//     } else if (x <= centerX && y >= radius) {
//       return "bottomLeft";
//     } else if (x >= centerX && y >= radius) {
//       return "bottomRight";
//     } else {
//       return null; // Ball is outside the triangle
//     }
//   };

//   return (
//     <div ref={triangleRef} className="triangle">
//       <div className="ball" onMouseDown={handleDragStart} />
//       <div
//         className={
//           "label topLeft ${activeCorner === 'topLeft' ? 'active' : ''}"
//         }
//       >
//         More Likely
//       </div>
//       <div
//         className={
//           "label topRight ${activeCorner === 'topRight' ? 'active' : ''}"
//         }
//       >
//         More Likely
//       </div>
//       <div
//         className={
//           "label bottomLeft ${activeCorner === 'bottomLeft' ? 'active' : ''}"
//         }
//       >
//         No More Likely
//       </div>
//       <div
//         className={
//           "label bottomRight ${activeCorner === 'bottomRight' ? 'active' : ''}"
//         }
//       >
//         Less Likely
//       </div>
//     </div>
//   );
// }

// export default Triangle;

// import React, { useState, useEffect, useRef } from "react";

// const Triangle = () => {
//   const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
//   const [triangleLoaded, setTriangleLoaded] = useState(false);
//   const triangleRef = useRef(null);
//   const ballRef = useRef(null);

//   const handleDragStart = (e) => {
//     e.preventDefault();
//     const ballRect = ballRef.current.getBoundingClientRect();
//     const offsetX = e.clientX - ballRect.left;
//     const offsetY = e.clientY - ballRect.top;

//     const onMouseMove = (e) => {
//       const triangleRect = triangleRef.current.getBoundingClientRect();
//       const newX = e.clientX - triangleRect.left - offsetX;
//       const newY = e.clientY - triangleRect.top - offsetY;

//       // Constrain the ball within the triangle
//       const maxX = triangleRect.width;
//       const maxY = triangleRect.height;
//       const newBallPosition = {
//         x: Math.max(0, Math.min(newX, maxX)),
//         y: Math.max(0, Math.min(newY, maxY)),
//       };

//       //   setBallPosition(newBallPosition);
//       const isInsideTriangle = (point) => {
//         const trianglePoints = [
//           { x: 0, y: 0 },
//           { x: maxX, y: 0 },
//           { x: maxX / 2, y: maxY },
//         ];

//         let isInside = false;
//         for (
//           let i = 0, j = trianglePoints.length - 1;
//           i < trianglePoints.length;
//           j = i++
//         ) {
//           const pi = trianglePoints[i];
//           const pj = trianglePoints[j];
//           const xi = point.x;
//           const yi = point.y;

//           if ((yi > pj.y && yi <= pi.y) || (yi > pi.y && yi <= pj.y)) {
//             if (xi <= pj.x + ((pi.x - pj.x) * (yi - pj.y)) / (pi.y - pj.y)) {
//               isInside = !isInside;
//             }
//           }
//         }

//         return isInside;
//       };
//       const constrainedBallPosition = {
//         x: Math.max(0, Math.min(newX, maxX)),
//         y: Math.max(0, Math.min(newY, maxY)),
//       };
//       if (isInsideTriangle(constrainedBallPosition)) {
//         setBallPosition(constrainedBallPosition);
//       }
//     };

//     const onMouseUp = () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const getTrianglePoint = (index) => {
//     const triangleRect = triangleRef.current.getBoundingClientRect();
//     const width = triangleRect.width;
//     const height = triangleRect.height;

//     switch (index) {
//       case 0:
//         return { x: width / 2, y: 0 };
//       case 1:
//         return { x: width, y: height / 2 };
//       case 2:
//         return { x: width / 2, y: height };
//       default:
//         return { x: 0, y: height / 2 };
//     }
//   };

//   const getClosestPointIndex = () => {
//     const points = [
//       getTrianglePoint(0),
//       getTrianglePoint(1),
//       getTrianglePoint(2),
//     ];
//     let minDistance = Infinity;
//     let closestIndex = -1;

//     for (let i = 0; i < points.length; i++) {
//       const distance = Math.sqrt(
//         Math.pow(points[i].x - ballPosition.x, 2) +
//           Math.pow(points[i].y - ballPosition.x, 2)
//       );

//       if (distance < minDistance) {
//         minDistance = distance;
//         closestIndex = i;
//       }
//     }

//     return closestIndex;
//   };

//   const getLineColor = (index) => {
//     const closestIndex = getClosestPointIndex();
//     return closestIndex === index ? "red" : "black";
//   };

//   useEffect(() => {
//     if (triangleRef.current) {
//       setTriangleLoaded(true);
//     }
//   }, [triangleRef]);

//   return (
//     <div ref={triangleRef}>
//       {triangleLoaded && (
//         <svg width="200" height="200">
//           <polygon
//             points="100,0 200,100 100,200"
//             fill="none"
//             stroke={getLineColor(0)}
//             strokeWidth="2"
//           />
//           <text x="50" y="10" textAnchor="middle">
//             label 1
//           </text>
//           <text x="200" y="100" textAnchor="middle">
//             label 2
//           </text>
//           <text x="50" y="190" textAnchor="middle">
//             label 3
//           </text>
//           <line
//             x1="100"
//             y1="0"
//             x2="200"
//             y2="100"
//             stroke={getLineColor(1)}
//             strokeWidth="2"
//           />
//           <line
//             x1="200"
//             y1="100"
//             x2="100"
//             y2="200"
//             stroke={getLineColor(2)}
//             strokeWidth="2"
//           />
//           <circle
//             cx={ballPosition.x}
//             cy={ballPosition.y}
//             r="10"
//             fill="blue"
//             draggable="true"
//             onDragStart={handleDragStart}
//             ref={ballRef}
//           />
//         </svg>
//       )}

//       <div>
//         {/* <p>Option 1: {ballPosition.x === 200 ? "Selected" : ""}</p>
//         <p>Option 2: {ballPosition.x === 0 ? "Selected" : ""}</p>
//         <p>Option 3: {ballPosition.y === 200 ? "Selected" : ""}</p> */}
//       </div>
//     </div>
//   );
// };

// export default Triangle;

import React, { useState, useRef, useEffect } from "react";

const Triangle = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const triangleRef = useRef(null);
  const ballRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      const ballRect = ballRef.current.getBoundingClientRect();
      const triangleRect = triangleRef.current.getBoundingClientRect();

      const initialX = event.clientX - ballRect.left;
      const initialY = event.clientY - ballRect.top;

      const onMouseMove = (event) => {
        const x = event.clientX - triangleRect.left - initialX;
        const y = event.clientY - triangleRect.top - initialY;

        // Constrain ball movement within the triangle
        const maxX = triangleRect.width - ballRect.width;
        const maxY = triangleRect.height - ballRect.height;
        const constrainedX = Math.min(Math.max(x, 0), maxX);
        const constrainedY = Math.min(Math.max(y, 0), maxY);

        // setBallPosition({ x: constrainedX, y: constrainedY });

        // Chseck if the ball is within the triangle's polygon
        const isWithinTriangle = (x, y) => {
          const triangleVertices = [
            [0, 0],
            [100, 173.21],
            [200, 0],
          ];

          let isInside = false;
          for (
            let i = 0, j = triangleVertices.length - 1;
            i < triangleVertices.length;
            j = i++
          ) {
            if (
              triangleVertices[i][1] > y !== triangleVertices[j][1] > y &&
              x <
                ((triangleVertices[j][0] - triangleVertices[i][0]) *
                  (y - triangleVertices[i][1])) /
                  (triangleVertices[j][1] - triangleVertices[i][1]) +
                  triangleVertices[i][0]
            ) {
              isInside = !isInside;
            }
          }

          return isInside;
        };

        if (isWithinTriangle(constrainedX, constrainedY)) {
          setBallPosition({ x: constrainedX, y: constrainedY });

          // Update the gradient colors based on ball position
          const line1 = line1Ref.current;
          const line2 = line2Ref.current;
          const line3 = line3Ref.current;

          const gradient1 = line1.style.backgroundImage;
          const gradient2 = line2.style.backgroundImage;
          const gradient3 = line3.style.backgroundImage;

          const newGradient1 = gradient1.replace(
            /rgb\(255, 255, 255\)/g,
            "rgb(${Math.floor(255 - constrainedX * 5.55)}, ${Math.floor(255 - constrainedX * 5.55)}, 255)"
          );
          const newGradient2 = gradient2.replace(
            /rgb\(255, 255, 255\)/g,
            "rgb(${Math.floor(255 - constrainedY * 5.55)}, ${Math.floor(255 - constrainedY * 5.55)}, 255)"
          );
          const newGradient3 = gradient3.replace(
            /rgb\(255, 255, 255\)/g,
            "rgb(${Math.floor(255 - (200 - constrainedX) * 5.55)}, ${Math.floor(255 - (200 - constrainedX) * 5.55)}, 255)"
          );

          line1.style.backgroundImage = newGradient1;
          line2.style.backgroundImage = newGradient2;
          line3.style.backgroundImage = newGradient3;

          // Highlight the text based on ball position
          const text1 = text1Ref.current;
          const text2 = text2Ref.current;
          const text3 = text3Ref.current;

          const threshold = 95;

          if (constrainedX < threshold && constrainedY < threshold) {
            text1.style.color = "yellow";
            text2.style.color = "black";
            text3.style.color = "black";
          } else if (
            constrainedX > 200 - threshold &&
            constrainedY < threshold
          ) {
            text1.style.color = "black";
            text2.style.color = "yellow";
            text3.style.color = "black";
          } else if (
            constrainedX > 100 - threshold &&
            constrainedY <= 100 + threshold &&
            constrainedY >= 150 - threshold
          ) {
            text1.style.color = "black";
            text2.style.color = "black";
            text3.style.color = "yellow";
          } else {
            text1.style.color = "black";
            text2.style.color = "black";
            text3.style.color = "black";
          }
        }
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    ballRef.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      ballRef.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="triangle" ref={triangleRef}>
      <svg width="250" height="250">
        <line
          x1="0"
          y1="173.21"
          x2="100"
          y2="0"
          stroke="black"
          strokeWidth="5"
          ref={line1Ref}
        />
        <line
          x1="100"
          y1="0"
          x2="200"
          y2="173.21"
          stroke="black"
          strokeWidth="5"
          ref={line2Ref}
        />{" "}
        <line
          x1="0"
          y1="173.21"
          x2="200"
          y2="173.21"
          stroke="black"
          strokeWidth="5"
          ref={line3Ref}
        />
        <text
          x="55"
          y="10"
          textAnchor="middle"
          transform="rotate(-60 80 5)"
          fontWeight="bold"
        >
          MORE LIKELY
        </text>
        <text
          ref={text1Ref}
          x="150"
          y="10"
          textAnchor="middle"
          transform="rotate(60 120 5)"
          fontWeight="bold"
        >
          MORE LIKELY
        </text>
        <text x="170" y="190" textAnchor="middle" fontWeight="bold">
          LESS LIKELY
        </text>
        <text
          ref={text3Ref}
          x="59"
          y="158"
          textAnchor="middle"
          transform="rotate(-60 5 167)"
          fontWeight="bold"
        >
          NO MORE LIKELY
        </text>
        <text x="39" y="190" textAnchor="middle" fontWeight="bold">
          NO MORE LIKELY
        </text>
        <text
          ref={text2Ref}
          x="170"
          y="160"
          textAnchor="middle"
          transform="rotate(60 195 175)"
          fontWeight="bold"
        >
          LESS LIKELY
        </text>
      </svg>

      <div
        className="ball"
        ref={ballRef}
        style={{ left: ballPosition.x, top: ballPosition.y }}
      />
    </div>
  );
};

export default Triangle;
