import { useState } from "react";

function CurrentTemperature({ data }) {
  const [convert, setConvert] = useState(false);
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
      <img src="" alt="icon" />
      <h3>{data.name}</h3>
      <div className="tempContainer">
      <div className="temp">
        {data.main && (
          <>{fahrenClicked ? <h1>{fahrenheit}</h1> : <h1>{celsius}</h1>}</>
        )}
      </div>
      <div className="convertBtn">
      <button onClick={handleCelsiusConvert} style={{color: !celsiusClicked ? "blue" : "black"}}>°C</button>
      {/* <p>|</p> */}
      <button onClick={handleFahrenConvert} style={{color: !fahrenClicked ? "blue" : "black"}}>°F</button>
      </div>
      </div>
      <div className="weather">
        {data.weather && (
          <>
            <p>{data.weather[0].main}</p>
            <div className="windContainer">
            <p>{data.main.humidity} %</p>
            <p>{data.wind.speed} km/h </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentTemperature;
