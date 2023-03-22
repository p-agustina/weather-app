import axios from "axios";
import { useState } from "react";

function SearchBar({ location, setLocation, setData, setLat, setLon }) {

  const getLatAndLon = (e) => {
    if (e.key === "Enter") {
      const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=c00aa935c957c316309d8af63cf49845`;

      axios
        .get(geoURL)
        .then((response) => {
          const { lat, lon } = response.data[0];
          setLat(lat);
          setLon(lon);
          const weatherURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c00aa935c957c316309d8af63cf49845&units=metric`;

          axios
            .get(weatherURL)
            .then((response) => {
              setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
        setLocation("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={getLatAndLon}
        value={location}
      />
    </div>
  );
}

export default SearchBar;
