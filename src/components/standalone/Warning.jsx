import React, { useEffect } from "react";
import "../../css/Warning.css";

export default function Warning({ message, style }) {
  useEffect(() => {}, []);

  return <div className={style}>{message}</div>;
}
