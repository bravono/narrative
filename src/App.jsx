import "./App.css";
import Header from "./components/Header";
import Queue from "./components/Queue";
import Button from "./components/Button";
import Ring from "./components/Ring";
import LowerPointerArrow from "./components/LowerPointerArrow";
import TalkBubble from "./components/TalkBubble";
import EdgeStanding from "./components/EdgeStanding";
import LoveScroll from "./components/LoveScroll";
import StickyArrow from "./components/StickyArrow";
import ActiveBlank from "./components/ActiveBlank";
import Percentage from "./components/Percentage";
import ChoiceRapper from "./components/ChoiceRapper";
import RingListContainer from "./components/RingListContainer";
import Column from "./components/Column";
import Row from "./components/Row";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Body from "./components/Body";

// import Timer from "./components/Timer";

function App() {
  return (
    <main className="main-container">
      <section className="top-section">
        <Header />
      </section>
      <section className="middle-section">
        <Body />

        {/* <Queue /> */}
        {/* <LoveScroll className="love-arrow-down" /> */}
        {/* <ItemList
          type=""
          items={[
            "Chololate Sprinkles",
            "Chocolate Bit",
            "Marshmallow",
            "Nut",
            "Whipped Sause",
            "Chololate Sauce",
            "Butter Scotch",
            "Peanut Butter Pieces",
          ]}
        /> */}
      </section>

      <section className="bottom-section">
        <Footer />
      </section>
    </main>
  );
}

export default App;
