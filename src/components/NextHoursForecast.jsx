import { useEffect, useState } from "react";
import axios from "axios";

function NextHoursForecast({lat, lon}) {
    const [forecastData, setForecastData] = useState({})
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c00aa935c957c316309d8af63cf49845`

    useEffect(() => {
        axios
        .get(forecastUrl)
        .then((response) => {
            setForecastData(response.data)
            console.log("forecast data", response.data)
        })

    }, [lat, lon]);


    return ( 
        <div>
            {lat && (
                <>
                    <div>
                        {for (let i = 0; i < 4; i++) {
                            let index = i;
                            let forecast = forecastData.list[index];
                            let minTemp = `${Math.round(forecast.main.temp_min)}`;
                            <div>{minTemp}</div>
                        }}
                    </div>
                </>
            )}
        </div>
     );
}

export default NextHoursForecast;