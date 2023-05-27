import { Routes, useParams, Route } from "react-router-dom";
import "./PlanetDetail.css";
import { useState } from "react";
import Menu from "./Planets-menu";
import { useMediaQuery } from "react-responsive";

const PlanetDetail = ({ planets }) => {
  let { planetName } = useParams();

  const [currentFeature, setCurrentFeature] = useState("overview");
  const notMobile = useMediaQuery({ minWidth: 768 });

  const planetObj = planets.find(
    (planet) => planet.name.toLowerCase() === planetName,
  );

  const planetObjName = planetObj.name.toLowerCase();

  return (
    <div>
      {planetObj && (
        <div className="planetobj">
          {notMobile && <Menu planets={planets} />}
          <div className="features">
            <div
              className="overview"
              onClick={() => setCurrentFeature("overview")}
              style={{
                borderBottom:
                  currentFeature === "overview" &&
                  !notMobile &&
                  `0.4rem solid ${planetObj.color}`,
                backgroundColor:
                  currentFeature === "overview" &&
                  notMobile &&
                  `${planetObj.color}`,
              }}
            >
              <span className="numb">01</span>
              overview
            </div>
            <div
              className="structure"
              onClick={() => setCurrentFeature("structure")}
              style={{
                borderBottom:
                  currentFeature === "structure" &&
                  !notMobile &&
                  `0.4rem solid ${planetObj.color}`,
                backgroundColor:
                  currentFeature === "structure" &&
                  notMobile &&
                  `${planetObj.color}`,
              }}
            >
              <span className="numb">02</span>
              structure
            </div>
            <div
              className="surface"
              onClick={() => setCurrentFeature("surface")}
              style={{
                borderBottom:
                  currentFeature === "surface" &&
                  !notMobile &&
                  `0.4rem solid ${planetObj.color}`,
                backgroundColor:
                  currentFeature === "surface" &&
                  notMobile &&
                  `${planetObj.color}`,
              }}
            >
              <span className="numb">03</span>
              surface
            </div>
          </div>
          {currentFeature === "overview" && (
            <div className="container">
              <div className="switchable-parent">
                <div className="planetImg">
                  <img src={planetObj.images.planet} alt={planetObjName} />
                </div>
                <section>
                  <h1>{planetObjName}</h1>
                  <p className="paragraph">{planetObj.overview.content}</p>
                  <div className="source">
                    source:
                    <a href={planetObj.overview.source}>
                      wikipedia
                      <img src="images/icon-source.svg" alt="" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          )}
          {currentFeature === "structure" && (
            <div className="container">
              <div className="switchable-parent">
                <div className="planetImg">
                  <img src={planetObj.images.internal} alt={planetObjName} />
                </div>
                <section>
                  <h1>{planetObjName}</h1>
                  <p className="paragraph">{planetObj.structure.content}</p>
                  <div className="source">
                    source:{" "}
                    <a href={planetObj.structure.source}>
                      wikipedia <img src="images/icon-source.svg" alt="" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          )}
          {currentFeature === "surface" && (
            <div className="container">
              <div className="switchable-parent">
                <div className="planetImg">
                  <img src={planetObj.images.planet} alt={planetObjName} />
                  <img
                    className="surfaceimg"
                    src={planetObj.images.geology}
                    alt={planetObjName}
                  />
                </div>
                <section>
                  <h1>{planetObjName}</h1>
                  <p className="paragraph">{planetObj.geology.content}</p>
                  <div className="source">
                    source:{" "}
                    <a href={planetObj.geology.source}>
                      wikipedia <img src="images/icon-source.svg" alt="" />
                    </a>
                  </div>
                </section>
              </div>
            </div>
          )}
          <div className="statistic">
            <div className="rotation">
              <span>rotation time</span>
              <div>{planetObj.rotation}</div>
            </div>
            <div className="revolution">
              <span>revolution time</span>
              <div>{planetObj.revolution}</div>
            </div>
            <div className="radius">
              <span>radius</span>
              <div>{planetObj.radius}</div>
            </div>
            <div className="temp">
              <span>average temp.</span>
              <div>{planetObj.temperature}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanetDetail;
