import React, { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";

const Form = () => {
  const {
    city,
    setCity,
    data,
    setData,
    form,
    setForm,
    setError,
    dark,
  } = useContext(WeatherContext);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchCity = (e) => {
    e.preventDefault();
    const APIkey = "11bc9ea3a1ba07340e0fbf0ac203c2f8";

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Nocvember",
          "December",
        ];
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5);

        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          icon: data1.weather[0].icon,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        setData({ weatherInfo, error: false });
        setForm("top");
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setData(null);
        setForm("middle");
        /* setData({ error: true, weatherInfo: null }); */
      });
  };

  console.log("City : ", city);
  console.log("Data : ", data);
  return (
    <form className={`${form} form`} onSubmit={handleSearchCity}>
      <input
        type="text"
        placeholder="Enter city"
        className={`form-input ${dark}`}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default Form;
