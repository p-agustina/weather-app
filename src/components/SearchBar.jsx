import GeoLocation from "./GeoLocation";
import getWeatherLocation from "../api _calls/apiLocation";

function SearchBar({
  location,
  setLocation,
  setData,
  setLat,
  setLon,
  lat,
  lon,
}) {
  const getLatAndLon = (e) => {
    e.preventDefault();

    getWeatherLocation(location)
      .then((data) => {
        const { lat, lon } = data.coord;
        setLat(lat);
        setLon(lon);
        setData(data)
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
