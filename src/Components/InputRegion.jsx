import React, { useEffect, useState } from 'react';
import fetchWeatherApi from '../api/fetchWeatherApi';
import WeatherForecast from './WeatherForecast';
const {VITE_API_KEY, VITE_REQUEST_URL} = import.meta.env;

const InputRegion = ({setWeatherData, setForecastData, setIsDisplayClicked, isDisplayClicked})=> {
    const [region, setRegion] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const urlEmbbed = isDisplayClicked? `weather`: `forecast`;
        if(!region){
            console.log("Region Not Found")
            return;
        }
        const url = `${VITE_REQUEST_URL}${urlEmbbed}?q=${region}&appid=${VITE_API_KEY}&units=metric`;

        ( async () => {
            try {
                const data = await fetchWeatherApi(url, isDisplayClicked)
                isDisplayClicked? setWeatherData(data): setForecastData(data);
            }
            catch(e) {
                console.log("Error Occurred ", e);
            };
        })();

        // const dat = fetchWeatherApi(url, isDisplayClicked)
        // .then((data)=>{
        //     isDisplayClicked? setWeatherData(data): setForecastData(data);
        // })
        // .catch(e => {
        //     console.log("Error Occurred ", e);
        // });
    }
    return (
        <>
        <div className='Container'>
            <form action="submit" onSubmit={submitHandler}>
                <input id='inputRegion' type="text" placeholder='Enter Region' value={region} onChange={(e)=> setRegion(e.target.value)}/>
                <button className='btn' type="submit" onClick={() => setIsDisplayClicked(true)}>Display Weather</button>
                <button className='btn' type="submit" onClick={() => setIsDisplayClicked(false)}>Display Forecast</button>
            </form>
        </div>
            
       </>
    );
};

export default InputRegion;