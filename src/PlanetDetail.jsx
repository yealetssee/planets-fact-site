import { useParams } from "react-router-dom";
import "./PlanetDetail.css";

const PlanetDetail = ({ planets }) => {
  const { planetName } = useParams();

  const planetObj = planets.find(
    (planet) => planet.name.toLowerCase() === planetName,
  );
  const planetObjName = planetObj.name.toLowerCase();
  console.log(planetObj);
  const planetImagePath = `../public/images/planet-${planetObjName}.svg`;

  return (
    <div>
      {planetObj ? (
        <div className="planetobj">
          <div className="features">
            <div className="overview">overview</div>
            <div className="structure">structure</div>
            <div className="surface">surface</div>
          </div>
          <div className="planetImg">
            <img src={planetImagePath} alt={planetObjName} />
          </div>
          <section>
            <h1>{planetObjName}</h1>
            <p className="paragraph">{planetObj.overview.content}</p>
            <div className="source">
              source:{" "}
              <a href={planetObj.overview.source}>
                wikipedia <img src="../public/images/icon-source.svg" alt="" />
              </a>
            </div>
          </section>
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
