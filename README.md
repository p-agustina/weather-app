# Weather App

This is a simple weather app developed with React, responsive web design, and the OpenWeatherMap public API. The app allows you to search for weather information of any city in the world and displays current weather conditions as well as the forecast for the selected city for the next 9 hours.

## Features
- Search for weather information of any city in the world.
- Display current weather conditions including temperature, humidity, wind speed, and weather description.
- Display a forecast with minimum/maximum temperature for the selected city in 3-hour time slots for the next 9 hours.
- Responsive design that works on desktop and mobile devices.
- Uses the OpenWeatherMap public API to retrieve weather data.
- User can select to display Fahrenheit or Celsius temperature.
- Use the map icon to get weather data for the current location. For this, the user will need to enable/allow location sharing on a browser.

## Description
This weather application is using real-time data from the OpenWeatherMap API - https://openweathermap.org/. This application is not collecting or storing any data from the user, and it does not have any integrated tracking on cookies on the site. This application's primary function is to display weather data and forecast for the user's selected city.

## Usage

To use this app, you need to have Node.js installed on your computer. Follow these steps:

1. Clone this repository
2. Open the terminal and navigate to the project directory
3. Run npm install to install the dependencies
4. Rename the .env.sample file to .env
5. Add your OpenWeatherMap API key to the .env file
6. Run npm start to start the app
7. Open your web browser and navigate to http://localhost:3000
8. Type the name of the city you want to check the weather for in the search bar and press enter

## Technologies Used
- React
- OpenWeatherMap API
- Axios
- HTML/CSS

## Contributors
This project was developed by Agustina Patt as a personal project. If you find any bugs or have suggestions for improvements, feel free to create an issue or submit a pull request.


This project was bootstrapped with Create React App.

