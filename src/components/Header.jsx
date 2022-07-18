import { useRef } from "react";
import "./Header.scss";
import Popup from "./Popup";

function Header() {
  const buttonPopupRef = useRef();
  const popupRef = useRef();
  const body = document.body;

  function popup() {
    buttonPopupRef.current.classList.toggle("active");
    popupRef.current.classList.toggle("active");
    body.classList.toggle("active");
  }

  return (
    <>
      <header className="header">
        <div className="header__wrapper container">
          <div className="header__logo">Goncharova</div>
          <div className="header__button" ref={buttonPopupRef} onClick={popup}>
            <span className="header__button_line"></span>
            <span className="header__button_line"></span>
          </div>
        </div>
        <Popup data={popupRef} />
      </header>
    </>
  );
}

export default Header;
