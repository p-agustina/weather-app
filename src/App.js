import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentTemperature from "./components/CurrentTemperature";
import Forecast from "./components/Forecast";
import BigIcon from "./components/BigIcon";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  
  return (
    <div className="App">
      <div data-testid="searchbar-test">
        <SearchBar
          location={location}
          setLocation={setLocation}
          setData={setData}
          setLat={setLat}
          setLon={setLon}
          lat={lat}
          lon={lon}
        />
      </div>

      {lat && (
        <div>
        <div className="generalContainer">
          <BigIcon data={data} />
          <div className="CurrentTemperature">
            <CurrentTemperature data={data} />
          </div>
          <div className="Title">
            <p> Forecast for the next hours</p>
          </div>
          </div>
          <div className="Forecast">
            <Forecast lat={lat} lon={lon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
