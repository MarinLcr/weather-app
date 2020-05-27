import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Background = () => {
  const { background } = useContext(WeatherContext);
  return <div className={`background ${background}`}></div>;
};

export default Background;
