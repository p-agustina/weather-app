import { useState } from "react";

function CurrentTemperature({ data }) {
  const [convert, setConvert] = useState(false);
  const celsius = data.main && data.main.temp.toFixed();
  const fahrenheit = (celsius * 9) / 5 + 32;

  const handleConvert = (e) => {
    setConvert(!convert);
  };

  return (
    <div>
      <h3>{data.name}</h3>
      <div className="temp">
        {data.main && (
          <>{convert ? <h1>{fahrenheit}°F</h1> : <h1>{celsius}°C</h1>}</>
        )}
      </div>
      <button onClick={handleConvert}>{convert ? "°C" : "°F"}</button>
      <div className="weather">
        {data.weather && (
          <>
            <p>{data.weather[0].main}</p>
            <p>{data.main.humidity} %</p>
            <p>{data.wind.speed} km/h </p>
          </>
        )}
      </div>
    </div>
  );
}

export default CurrentTemperature;
