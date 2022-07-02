import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import ShowMap from "./components/ShowMap/ShowMap";
import Error from "./components/Error/Error";
import "./App.css";

function validateIPaddress(ipaddress) {
  if (
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(
      ipaddress
    )
  ) {
    return true;
  }
  return false;
}

const App = () => {
  const [isError, setIsError] = useState(false);
  const [dataPresent, setDataPresent] = useState(false);
  const [data, setData] = useState({});


  const getIPData = async (val, save = false) => {
    const response2 = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_70EBUP3zaXmlFJ012hBiyGjZD0QHo&ipAddress=${val}`
    );
    // if the search ip is postive
    if (response2.statusText === "OK") {
      setDataPresent(true);
      setData(response2.data);
      if (save) localStorage.setItem("data_ip", JSON.stringify(response2.data));
    } else {
      setDataPresent(false);
      setIsError(true);
    }
  };

  const getData = useCallback(async (val) => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      console.log(response);
      if (response.statusText === "OK") {
        getIPData(response.data.ip, true);
      }
    } catch (err) {
      setIsError(true);
      setDataPresent(false);
      setData(err.message);
    }
  }, []);



  const searchIPHandler = (input) => {
    if (validateIPaddress(input)) {
      getIPData(input);
    }
  };

  useEffect(() => {
    const default_ip = JSON.parse(localStorage.getItem("data_ip"));
    // default ip address is present
    if (default_ip) {
      setData(default_ip);
      setIsError(false);
      setDataPresent(true);
    } else {
      getData();
    }

  }, [getData]);

  return (
    <div className="main">
      <Header searchIP={searchIPHandler} data={data} />
      {!isError && dataPresent && <ShowMap data={data} />}
      {isError && <Error />}
    </div>
  );
};

export default App;
