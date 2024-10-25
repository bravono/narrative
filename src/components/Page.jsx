import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import RadioButton from "./RadioButton";

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
