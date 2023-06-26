import axios from "axios";
import env from "react-dotenv";

const APIkey = env.REACT_APP_API_KEY;

function getWeatherLatLon(lat, lon) {

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

    return axios.get(URL)
    .then((response) => response.data)
    .catch((error) => {
        console.log(error);
        throw error;
    });
};

export default getWeatherLatLon;