import GEO from "../assets/icons/current-location.svg";
import getWeatherLatLon from "../api _calls/apiLatLon";

function GeoLocation({ setLat, setLon, lat, lon, APIkey, setData }) {
  const handleClick = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      console.log("here is the position", position);

      setLat(position.coords.latitude);
      setLon(position.coords.longitude);


      const data = await getWeatherLatLon(position.coords.latitude, position.coords.longitude)
      setData(data);
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
