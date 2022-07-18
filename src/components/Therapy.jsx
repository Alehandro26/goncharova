import "./Therapy.scss";
import virtual from "../assets/images/virtual.png";
import individual from "../assets/images/individual.png";

function Therapy() {
  return (
    <>
      <div className="therapy">
        <div className="therapy__wrapper container">
          <div className="therapy__card">
            <img src={virtual} alt="" className="therapy__image" />
            <h3 className="therapy__title">Virtual therapy</h3>
          </div>
          <div className="therapy__card">
            <img src={individual} alt="" className="therapy__image" />
            <h3 className="therapy__title">Individual therapy</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Therapy;
