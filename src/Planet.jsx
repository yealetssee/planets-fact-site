import { useState } from "react";
import Data from "./data.json";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import "./Planets.css";
import Menu from "./Planets-menu";
import PlanetDetail from "./PlanetDetail";

const Planet = () => {
  const [planets, setPlanets] = useState(Data);

  return (
    <div>
      <nav>
        <div className="header">
          <Link to={"/menu"}>
            <span className="planets-h1">the planets</span>
          </Link>
          <div className="burger">
            <Link to={"/menu"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path="/menu" element={<Menu planets={planets} />} />
        <Route
          path="/:planetName"
          element={<PlanetDetail planets={planets} />}
        />
      </Routes>
    </div>
  );
};

export default Planet;
