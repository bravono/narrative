function Ring() {
  return (
    <>
      <div>
        {" "}
        <div>
          {" "}
          <svg width="30%" height="30%" viewBox="0 0 100 100">
            {" "}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#000"
              strokeWidth="5"
              fill="none"
            />{" "}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#007bff"
              strokeWidth="5"
              strokeDasharray="360, 360"
            />{" "}
          </svg>{" "}
        </div>
      </div>{" "}
    </>
  );
}

export default Ring;
