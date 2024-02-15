import React from 'react';

const WeatherForecast = ({forecastData, isDisplayClicked}) => {
    return (
        <div className='weatherContainer'>
            {
                forecastData && !isDisplayClicked &&
                forecastData.map(eachDayData => {
                    return (
                        <div className="weather-card" key={eachDayData.date}>
                        <h2>Date: {eachDayData.date}</h2>
                        <p>
                          Minimum Temperature: <span className="temp">{(eachDayData.minTemp).toFixed(2)}℃</span>
                        </p>
                        <p>
                          Maximum Temperature: <span className="temp">{(eachDayData.maxTemp+3).toFixed(2)}℃</span>
                        </p>
                        <p>Weather Condition: {eachDayData.weatherCondition}</p>
                        <p>
                          Wind Speed: <span className="wind">{eachDayData.windSpeed}</span>
                        </p>
                      </div>
                    );
                })
            }
        </div>
    );
};

export default WeatherForecast;