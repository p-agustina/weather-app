import axios from "axios";
import GEO from "../assets/icons/current-location.svg"

function SearchBar({ location, setLocation, setData, setLat, setLon }) {
  const APIkey = "c00aa935c957c316309d8af63cf49845"
  const getLatAndLon = (e) => {
    e.preventDefault();

    const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`;

    axios
      .get(geoURL)
      .then((response) => {
        const { lat, lon } = response.data[0];
        setLat(lat);
        setLon(lon);
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

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
      <form onSubmit={getLatAndLon}>
      <a className="currentLocation" href="" type="submit"><img src={GEO} alt=""/></a>
        <input
          type="text"
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
          // onKeyPress={getLatAndLon}
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
