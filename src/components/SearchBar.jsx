import axios from "axios";
import GeoLocation from "./GeoLocation";

function SearchBar({
  location,
  setLocation,
  setData,
  setLat,
  setLon,
  lat,
  lon,
}) {
  const APIkey = "c00aa935c957c316309d8af63cf49845";

  const getLatAndLon = (e) => {
    e.preventDefault();

    const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`;

    axios
      .get(geoURL)
      .then((response) => {
        const { lat, lon } = response.data[0];
        setLat(lat);
        setLon(lon);
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

        axios
          .get(weatherURL)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
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
