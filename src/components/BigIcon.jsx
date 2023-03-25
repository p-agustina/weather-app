import clearD from "../assets/icons/01d.png";
import clearN from "../assets/icons/01n.png";
import rain from "../assets/icons/09d.png";
import clouds from "../assets/icons/04d.png";
import mist from "../assets/icons/50d.png";
import snow from "../assets/icons/13d.png";

function BigIcon({data}) {
   if (!data || !data.weather) {
    return null;
   }
    const weather = data.weather;

        if (weather && weather.length > 0) {
            switch(weather[0].main) {
               case "Clear":
                   return <img className="BigIcon" src={clearD} alt="clear"/>
               case "Rain":
                   return <img className="BigIcon" src={rain} alt="rain"/>
                case "Clouds":
                    return <img className="BigIcon" src={clouds} alt="clouds"/>
                case "Mist":
                    return <img className="BigIcon" src={mist} alt="mist"/>
                case "Snow":
                    return <img className="BigIcon" src={snow} alt="snow"/>
               default:
                   return null;
           }
        };
        };
    
export default BigIcon;