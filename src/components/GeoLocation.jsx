import axios from "axios";
import GEO from "../assets/icons/current-location.svg";

function GeoLocation({ setLat, setLon, lat, lon, APIkey, setData }) {
  const handleClick = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      console.log("here is the position", position);

      setLat(position.coords.latitude);
      setLon(position.coords.longitude);

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${APIkey}&units=metric`;

      const response = await axios.get(URL);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="currentLocation" onClick={handleClick}>
        <img src={GEO} alt="geo location" />
      </button>
    </div>
  );
}

export default GeoLocation;
