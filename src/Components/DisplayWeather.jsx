import React from 'react';
const {VITE_IMG_ICON} = import.meta.env;

const DisplayWeather = ({weatherData, isDisplayClicked}) => {
    return (
    <>
        {
            weatherData && isDisplayClicked && 
            ( 
              <div className="weather-card">
                <h2>Region: {weatherData.name}</h2>
                <img src={`${VITE_IMG_ICON}${weatherData.weather[0].icon}@2x.png`} alt="" />
                <p className="temperature">{(weatherData.main.temp).toFixed(2)}℃</p>
                <p className="weather-condition">{weatherData.weather[0].main}</p>
              </div>
            )
        }
    </>
    );
};

export default DisplayWeather;