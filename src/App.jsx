import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "./scss/main.css";
import { Films } from "./pages/Films";
import { Character } from "./pages/Character";
import { Audio } from "./Components/Audio";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="filmes" element={<Films />} />
        <Route path="character/:id" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
