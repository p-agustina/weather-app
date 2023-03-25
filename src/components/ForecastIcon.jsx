import clearD from "../assets/icons/01d.png";
import rain from "../assets/icons/09d.png";
import clouds from "../assets/icons/04d.png";
import mist from "../assets/icons/50d.png";
import snow from "../assets/icons/13d.png";

function ForecastIcon({ forecastData, index }) {

if (!forecastData || !forecastData.list) {
    return null;
   }
   
    const weather = forecastData.list[index];

        if (weather) {
            switch(weather.weather[0].main) {
               case "Clear":
                   return <img className="ForecastIcon" src={clearD} alt="clear"/>
               case "Rain":
                   return <img className="ForecastIcon" src={rain} alt="rain"/>
                case "Clouds":
                    return <img className="ForecastIcon" src={clouds} alt="clouds"/>
                case "Mist":
                    return <img className="ForecastIcon" src={mist} alt="mist"/>
                case "Snow":
                    return <img className="ForecastIcon" src={snow} alt="snow"/>
               default:
                   return null;
           }

        };
        };

export default ForecastIcon;
