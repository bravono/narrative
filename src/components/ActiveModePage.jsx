import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import RadioButton from "./RadioButton";
// import Header from "../components/Header";
import Queue from "./Queue";
import Button from "./Button";
import Ring from "./Ring";
import LowerPointerArrow from "./LowerPointerArrow";
import TalkBubble from "./TalkBubble";
import EdgeStanding from "./EdgeStanding";
// import LoveScroll from "../components/LoveScroll";
import StickyArrow from "./StickyArrow";
import ActiveBlank from "./ActiveBlank";
import Percentage from "./Percentage";
import ChoiceRapper from "./ChoiceRapper";
import RingListContainer from "./RingListContainer";
import Column from "./Column";

function ActiveModePage() {
  return (
    <main className="main-container">
      <section className="top-section">
        <Header />
      </section>
      <section className="middle-section">
        <MainContent />
      </section>
      <section className="bottom-section">
        <Footer />
      </section>
    </main>
  );
}

export default ActiveModePage;
