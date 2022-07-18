import "./Main.scss";

function Main() {
  return (
    <>
      <section className="main">
        <div className="main__wrapper container">
          <div className="main__text">
            <h2 className="main__title">
              Knowledge creates the map and courage fuels the journey.
            </h2>
            <p className="main__subtitle">
              Effective and personalized individual therapy and executive
              counselling.
            </p>
          </div>
        </div>
        <div className="main__bgr">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6145defbfb4856314e876222/bbbee70f-eeb6-44df-b747-dd8009feedba/doris-london-ontario.jpg"
            alt=""
            className="main__image"
          />
        </div>
      </section>
    </>
  );
}

export default Main;
