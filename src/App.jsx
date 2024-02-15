import React, { useState } from 'react';
import InputRegion from './Components/InputRegion';
import DisplayWeather from './Components/DisplayWeather';
import WeatherForecast from './Components/WeatherForecast';
import './App.css';

const App = () => {
  const [forecastData, setForecastData] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [isDisplayClicked, setIsDisplayClicked] = useState(true);
  return (
    <div>
      <InputRegion setWeatherData={setWeatherData} setForecastData={setForecastData} setIsDisplayClicked={setIsDisplayClicked} isDisplayClicked={isDisplayClicked}/>
      <DisplayWeather weatherData={weatherData} isDisplayClicked={isDisplayClicked}/>
      <WeatherForecast forecastData={forecastData} isDisplayClicked={isDisplayClicked}/>
    </div>
  );
};

export default App;