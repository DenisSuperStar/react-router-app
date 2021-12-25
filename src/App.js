import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Forza from "./components/Forza/Forza";
import Drift from "./components/Drift/Drift";
import Timeattack from "./components/TimeAttack/Timeattack";

export default function App() {
  return (
    <Router>
      <>
        <nav class="nav">
          <Link className="nav-link" to="/">
            Главная
          </Link>
          <Link className="nav-link" to="/drift">
            Дрифт-такси
          </Link>
          <Link className="nav-link" to="/timeattack">
            Timeattack
          </Link>
          <Link className="nav-link" to="/forza">
            Forza
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/drift" element={<Drift />}></Route>
          <Route path="/timeattack" element={<Timeattack />}></Route>
          <Route path="/forza" element={<Forza />}></Route>
        </Routes>
      </>
    </Router>
  );
}
