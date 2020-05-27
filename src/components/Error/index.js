import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Error = () => {
  const { dark } = useContext(WeatherContext);
  return (
    <div className={`error cssanimation sequence fadeInBottom ${dark}`}>
      <p>Sorry, the specified city was not found..</p>
    </div>
  );
};

export default Error;
