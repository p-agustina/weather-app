import { useEffect, useState } from "react";
import axios from "axios";

function Forecast({ lat, lon }) {
  const [forecastData, setForecastData] = useState({});
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c00aa935c957c316309d8af63cf49845&units=metric`;

  useEffect(() => {
    axios.get(forecastUrl).then((response) => {
      setForecastData(response.data);
      console.log("forecast data", response.data);
    });
  }, [lat, lon]);

  return (
    <div>
      {forecastData.list && (
        <>
          <div className="ForecastContainer">
            {forecastData.list.slice(0, 4).map((forecast, index) => {
              const minTemp = `${Math.round(forecast.main.temp_min)}`;
              const maxTemp = `${Math.round(forecast.main.temp_max)}`;
              const time = `${forecast.dt_txt.split(" ")[1].split(":")[0]}:00`;

              return (
                <div>
                  <div className="ThreeHForecast" key={index}>
                    <div className="ForecastTime">{time}</div>
                    <div className="ForecastImg">
                      <img src="" alt="icon" />
                    </div>
                    <div className="ForecastTemp">min {minTemp} °C</div>
                    <div className="ForecastTemp">max {maxTemp} °C</div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Forecast;