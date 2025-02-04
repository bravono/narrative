import Footer from "../Footer";
import Cue from "../Cue";
import Button from "../Button";
import BottomButton from "../BottomButton";
import FooterButton from "../FooterButton";

function Compare() {
  return (
    <main className="main-container">
      <Cue className={"queue story"}>
        <p>COMING SOON</p>
      </Cue>
      <section className="bottom-section">
        <FooterButton classNameB={"primary"}/>
      </section>
    </main>
  );
}

export default Compare;
