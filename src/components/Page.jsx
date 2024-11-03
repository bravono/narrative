import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import RadioButton from "./RadioButton";
// import Header from "../components/Header";
import Queue from "../components/Queue";
import Button from "../components/Button";
import Ring from "../components/Ring";
// import LowerPointerArrow from "../components/LowerPointerArrow";
import TalkBubble from "../components/TalkBubble";
import EdgeStanding from "../components/EdgeStanding";
// import LoveScroll from "../components/LoveScroll";
import StickyArrow from "../components/StickyArrow";
import ActiveBlank from "../components/ActiveBlank";
import Percentage from "../components/Percentage";
import ChoiceRapper from "../components/ChoiceRapper";
import RingListContainer from "../components/RingListContainer";
import Column from "../components/Column";

function Page() {
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

export default Page;
