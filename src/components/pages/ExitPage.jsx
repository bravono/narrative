import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Queue from "../Queue";

function Exit({ redirect }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirect || "https://www.google.com";
 
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate, redirect]);

  return (
    <main className="main-container">
      <Queue className={"queue question"}>
        <p>We are sorry to see you go, but "Goodbye"</p>
      </Queue>
    </main>
  );
}

export default Exit;