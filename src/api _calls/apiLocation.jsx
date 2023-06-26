import axios from "axios";
import env from "react-dotenv";

const APIkey = env.REACT_APP_API_KEY;

function getWeatherLocation(location) {

    const geoURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}&units=metric`;

    return axios.get(geoURL)
    .then((response) => response.data)
    .catch((error) => {
        console.log(error);
        throw error;
    });
};

export default getWeatherLocation;