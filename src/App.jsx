import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActiveMode from "./components/pages/ActiveMode";
import Preview from "./components/pages/Preview";
import WelcomePageLM from "./components/pages/WelcomePage";
import Compare from "./components/pages/Compare";
import Exit from "./components/pages/ExitPage";
import Home from "./components/standalone/Home";
import Introduction from "./components/composed/IntroductionPage";
import LearnMode from "./components/pages/LearnMode";
import NotFound from "./components/standalone/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/activemode" element={<ActiveMode />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/welcome" element={<WelcomePageLM />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/learnmode" element={<LearnMode />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
