import axios from "axios";
import GEO from "../assets/icons/current-location.svg";

function GeoLocation({ setLat, setLon, lat, lon, APIkey, setData }) {
  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

  const handleCoordinates = async (e) => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
  
      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="currentLocation" onClick={handleCoordinates}>
        <img src={GEO} alt="geo location" />
      </button>
    </div>
  );
}

export default GeoLocation;
