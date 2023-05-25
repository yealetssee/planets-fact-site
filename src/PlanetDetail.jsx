import { useParams } from "react-router-dom";
import "./PlanetDetail.css";
import { useState } from "react";

const PlanetDetail = ({ planets }) => {
  const { planetName } = useParams();
  const [currentFeature, setCurrentFeature] = useState("overview");
  console.log(currentFeature);

  const planetObj = planets.find(
    (planet) => planet.name.toLowerCase() === planetName,
  );
  const planetObjName = planetObj.name.toLowerCase();
  console.log(planetObj);

  return (
    <div>
      {planetObj ? (
        <div className="planetobj">
          <div className="features">
            <div
              className="overview"
              onClick={() => setCurrentFeature("overview")}
            >
              overview
              <div className="active"></div>
            </div>
            <div
              className="structure"
              onClick={() => setCurrentFeature("structure")}
            >
              structure
            </div>
            <div
              className="surface"
              onClick={() => setCurrentFeature("surface")}
            >
              surface
            </div>
          </div>
          {currentFeature === "overview" && (
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
                    <img src="../public/images/icon-source.svg" alt="" />
                  </a>
                </div>
              </section>
            </div>
          )}
          {currentFeature === "structure" && (
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
                    wikipedia{" "}
                    <img src="../public/images/icon-source.svg" alt="" />
                  </a>
                </div>
              </section>
            </div>
          )}
          {currentFeature === "surface" && (
            <div className="switchable-parent">
              <div className="planetImg">
                <img src={planetObj.images.planet} alt={planetObjName} />
                <img
                  className="surface"
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
                    wikipedia{" "}
                    <img src="../public/images/icon-source.svg" alt="" />
                  </a>
                </div>
              </section>
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
      ) : null}
    </div>
  );
};

export default PlanetDetail;
