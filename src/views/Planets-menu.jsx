import "./Planets-menu.css";
import { Link } from "react-router-dom";

const Menu = ({ planets }) => {
  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet.name}>
          <span
            style={{ backgroundColor: planet.color }}
            className="littlePlanet"
          ></span>
          <Link to={`/${planet.name.toLowerCase()}`}>{planet.name}</Link>
          <span className="arrow">
            <Link to={`/${planet.name.toLowerCase()}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
