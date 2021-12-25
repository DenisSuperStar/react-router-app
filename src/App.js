import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Forza from "./components/Forza/Forza";
import Drift from "./components/Drift/Drift";
import Timeattack from "./components/TimeAttack/Timeattack";

export default function App() {
  return (
    <Router>
      <>
        <nav className="nav">
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/drift"
          >
            Дрифт-такси
          </NavLink>
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/timeattack"
          >
            Timeattack
          </NavLink>
          <NavLink
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "#f0f0f0",
            })}
            to="/forza"
          >
            Forza
          </NavLink>
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
