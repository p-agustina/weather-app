import axios from "axios";
import GeoLocation from "./GeoLocation";
import env from "react-dotenv";

function SearchBar({
  location,
  setLocation,
  setData,
  setLat,
  setLon,
  lat,
  lon,
}) {
  const APIkey = env.REACT_APP_API_KEY;

  const getLatAndLon = (e) => {
    e.preventDefault();

    const geoURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=metric`;

    axios
      .get(geoURL)
      .then((response) => {
        const { lat, lon } = response.data.coord;
        setLat(lat);
        setLon(lon);
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    setLocation("");
  };

  return (
    <div className="SearchBar">
      <GeoLocation
        setLat={setLat}
        setLon={setLon}
        lat={lat}
        lon={lon}
        APIkey={APIkey}
        setData={setData}
      />
      <form onSubmit={getLatAndLon}>
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
