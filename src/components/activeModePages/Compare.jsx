import Footer from "../Footer";
import Queue from "../Queue";
import Button from "../Button";
import BottomButton from "../BottomButton";
import FooterButton from "../FooterButton";

function Compare() {
  return (
    <main className="main-container">
      <Queue className={"queue story"}>
        <p>COMING SOON</p>
      </Queue>
      <section className="bottom-section">
        <FooterButton classNameB={"primary"}/>
      </section>
    </main>
  );
}

export default Compare;
