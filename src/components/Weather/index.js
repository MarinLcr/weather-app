import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Weather = () => {
  const { data, dark } = useContext(WeatherContext);

  const icon = data.weatherInfo.icon;

  return (
    <div className={`weather cssanimation sequence fadeInBottom ${dark}`}>
      <h3 className="col-12 text-center city-name">{data.weatherInfo.city}</h3>
      <hr className="color-line" />
      <div className="weather-part-one p-4 row">
        <div className="col-3 weather-icon-city">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon représentant la température"
          />
        </div>
        <div className="weather-main col-3">
          <h3>{data.weatherInfo.temp}°</h3>
          <h3>{data.weatherInfo.main}</h3>
        </div>
        <div className="weather-main col-3">
          <h3>{data.weatherInfo.sunrise}</h3>
          <h3>Sunrise</h3>
        </div>
        <div className="weather-main col-3">
          <h3>{data.weatherInfo.sunset}</h3>
          <h3>Sunset</h3>
        </div>
      </div>
      <div className={`weather-part-two ${dark}`}>
        <div className="forecast-horizontal">
          {data.weatherInfo.forecast.map((forecast, index) => (
            <div key={index} className="forecast-unit">
              <span>{forecast.dt_txt.slice(5, 10)}</span>
              <span>{forecast.dt_txt.slice(10, 16)}</span>
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="icon représentant la température"
              />
              <h4>{forecast.main.temp}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
