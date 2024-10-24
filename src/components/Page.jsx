import Header from "./Header";
import Footer from "./Footer";
import Body from "./MainContent";
import RadioButton from "./RadioButton";

function Page() {
  return (
    <main className="main-container">
      <section className="top-section">
        <Header />
      </section>
      <section className="middle-section">
        <Body />
      </section>
      <section className="bottom-section">
        <Footer />
      </section>
    </main>
  );
}

export default Page;
