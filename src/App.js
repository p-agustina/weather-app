import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import CurrentTemperature from "./components/CurrentTemperature";



function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  

  return (
    <div className="App">
    {console.log(data.name)}
    <SearchBar 
    location={location} 
    setLocation={setLocation}
    setData={setData}
    setLat={setLat}
    setLon={setLon}
    />
    <CurrentTemperature 
    data={data}
    lat={lat}
    lon={lon}
    />

    </div>
  );
}

export default App;
