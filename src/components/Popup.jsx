import "./Popup.scss";

function Popup(props) {
  return (
    <>
      <div className="popup" ref={props.data}>
        <div className="popup__bgr"></div>
        <nav className="popup__menu">
          <ul className="popup__list">
            <li className="popup__item">
              <a href="#" className="popup__link">
                Обо мне
              </a>
            </li>
            <li className="popup__item">
              <a href="#" className="popup__link">
                Помощь
              </a>
            </li>
            <li className="popup__item">
              <a href="#" className="popup__link">
                Образование
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Popup;
