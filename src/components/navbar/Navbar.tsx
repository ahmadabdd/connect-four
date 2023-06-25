// router
import { useLocation, useNavigate } from "react-router-dom";

// styles
import "./Navbar.css";

// types
import { INavbar } from "./Navbar.types";

const Navbar: React.FC<INavbar> = ({ showRestart, onRestartClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <nav className="navbar">
      <h2>Connect four</h2>
      <div className="actions-container">
        { !currentRoute.includes('new') && <button onClick={() => navigate("/new")}>New game</button>}
        {showRestart && <button onClick={onRestartClick}>Restart</button>}
        <a
          target="_blank"
          href="https://www.wikihow.com/Play-Connect-4"
          rel="noreferrer"
        >
          How to play?
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
