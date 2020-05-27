import React, { Fragment, useContext } from "react";
import WeatherContext from "../contexts/WeatherContext";

import Header from "../components/Header/index";
import Form from "../components/Form/index";
import Weather from "../components/Weather/index";
import Error from "../components/Error/index";
import Background from "../components/Background/index";

const App = () => {
  const { data, error } = useContext(WeatherContext);
  return (
    <Fragment>
      <Header />
      <Form />
      {data && <Weather />}
      {error === true && <Error />}
      <Background />
    </Fragment>
  );
};

export default App;
