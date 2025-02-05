import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cue from "../Cue";

function Exit({ redirect }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirect || "https://www.google.com";
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, redirect]);

  return (
    <main className="main-container">
      <Cue className={"queue question"}>
        <p>
          We are sorry to see you go, but<span> "Goodbye"</span>
        </p>
      </Cue>
    </main>
  );
}

export default Exit;
