import { useState } from "react";
import humidity from "../assets/icons/raindrops.svg";
import wind from "../assets/icons/winds.svg"

function CurrentTemperature({ data }) {
  const [celsiusClicked, setCelsiusClicked] = useState(true);
  const [fahrenClicked, setFahrenClicked] = useState(false);
  const celsius = data.main && data.main.temp.toFixed();
  const fahrenheit = (celsius * 9) / 5 + 32;

    const handleCelsiusConvert = (e) => {
        setCelsiusClicked(true);
        setFahrenClicked(false);
    };

    const handleFahrenConvert = (e) => {
        setFahrenClicked(true);
        setCelsiusClicked(false);
    };

  return (
    <div className="CurrentTemp">
      <h3>{data.name}</h3>
      {/* <h5 style={{margin: "0"}}>Last updated</h5> */}
      <div className="tempContainer">
      <div className="temp">
        {data.main && (
          <>{fahrenClicked ? <h1>{fahrenheit}</h1> : <h1>{celsius}</h1>}</>
        )}
      </div>
      <div className="convertBtn">
      <button onClick={handleCelsiusConvert} style={{color: !celsiusClicked ? "#80bfff" : "#333333"}}>°C</button>
      <span style={{fontWeight: "bold"}}>|</span>
      <button onClick={handleFahrenConvert} style={{color: !fahrenClicked ? "#80bfff" : "#333333"}}>°F</button>
      </div>
      </div>
      <div className="weather">
        {data.weather && (
          <>
            <p id="weatherConditions">{data.weather[0].main}</p>
            <div className="windContainer">
            <div><img src={humidity} alt="humidity icon" /><span><p>{data.main.humidity} %</p></span></div>
            <div><img src={wind} alt="wind icon" /><p>{data.wind.speed} km/h </p></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentTemperature;
