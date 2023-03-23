import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CurrentTemperature from "./components/CurrentTemperature";
import Forecast from "./components/Forecast";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  return (
    <div className="App">
      <div>
        <SearchBar
          location={location}
          setLocation={setLocation}
          setData={setData}
          setLat={setLat}
          setLon={setLon}
        />
      </div>
      <div className="CurrentTemperature">
        <CurrentTemperature data={data} />
      </div>
      <div className="Forecast">
        <Forecast lat={lat} lon={lon} />
      </div>
    </div>
  );
}

export default App;
