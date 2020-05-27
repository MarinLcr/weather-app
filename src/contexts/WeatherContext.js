import React, { useState } from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [city, setCity] = useState([]);
  const [data, setData] = useState(null);
  const [form, setForm] = useState("middle");
  const [error, setError] = useState(false);
  const [dark, setDark] = useState(false);
  const [background, setBackground] = useState("background-3");
  const [menu, setMenu] = useState("hide");

  return (
    <Context.Provider
      value={{
        city,
        setCity,
        data,
        setData,
        form,
        setForm,
        error,
        setError,
        dark,
        setDark,
        background,
        setBackground,
        menu,
        setMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Provider };
export default Context;
