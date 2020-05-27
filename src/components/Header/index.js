import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Header = () => {
  const { dark, setDark, setBackground, menu, setMenu, form } = useContext(
    WeatherContext
  );
  console.log("Dark : ", dark);

  const updateCheckBox = () => {
    if (dark === true) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  const updateBackground = (e) => {
    console.log("Index : ", e.target.id);
    setBackground(e.target.id);
    setMenu("hide");
  };

  const openMenu = () => {
    if (menu === "hide") {
      setMenu("open");
    } else {
      setMenu("hide");
    }
  };

  return (
    <header className="header">
      <nav role="navigation">
        <div id="menuToggle" className={`${menu}`}>
          <input type="checkbox" onClick={openMenu} />

          <span className={`${dark}`}></span>
          <span className={`${dark}`}></span>
          <span className={`${dark}`}></span>

          <ul id="menu" className={`${menu} ${dark}`}>
            <li
              className="link-menu"
              id="background-1"
              onClick={updateBackground}
            >
              Sunrise
            </li>

            <li
              className="link-menu"
              id="background-2"
              onClick={updateBackground}
            >
              Day
            </li>

            <li
              className="link-menu"
              id="background-3"
              onClick={updateBackground}
            >
              Sunset
            </li>

            <li
              className="link-menu"
              id="background-4"
              onClick={updateBackground}
            >
              Night
            </li>
          </ul>
        </div>
      </nav>
      <h3 className={`date ${form}`}>Tuesday 19 May</h3>
      <div className="dark-light">
        <p className={`mb-0 ${dark} ${menu}`}>Light</p>
        <label className="switch mb-0">
          <input type="checkbox" onChange={updateCheckBox}></input>
          <span className={`slider round ${dark}`}></span>
        </label>
        <p className={`mb-0 ${dark} ${menu}`}>Dark</p>
      </div>
    </header>
  );
};

export default Header;
