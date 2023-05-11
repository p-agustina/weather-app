import { useEffect, useState } from "react";
import axios from "axios";
import ForecastIcon from "./ForecastIcon";

function Forecast({ lat, lon }) {
  const [forecastData, setForecastData] = useState({});
  const forecastUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c00aa935c957c316309d8af63cf49845&units=metric`;

  useEffect(() => {
    axios.get(forecastUrl).then((response) => {
      setForecastData(response.data);
    });
  }, [forecastUrl]);
  // cambiar por forecastUrl

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
                     <ForecastIcon forecastData={forecastData} index={index}/>
                    </div>
                    <div>
                    <div id="ForecastMinTemp">min {minTemp}°C</div>
                    <div id="ForecastMaxTemp">max {maxTemp}°C</div>
                  </div>
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
