import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../../css/warning.css";
import { use } from "react";

export default function Warning({ message, style }) {
  useEffect(() => {}, []);
  const { ringTotal } = useSelector((state) => state.entities.elements);

  return (ringTotal < 100 && ringTotal > 94) || ringTotal > 100 ? (
    <div className={style}>{message}</div>
  ) : (
    <div className={style}>{message}</div>
  );
}
