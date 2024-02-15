const createForecastData = (data) => {
    const city = data.city.name;
    const weatherReport = [];
    const forecastList = data.list;
    const indianDateToday = new Date();
    const utcDateToday = new Date(indianDateToday.getFullYear(), indianDateToday.getMonth(), indianDateToday.getDate());
    let i = 0;
    while(true){
        const forecastData = forecastList[i];
        const forecastDataTime = new Date(forecastData.dt_txt);
        if(Date.now() < forecastDataTime.getTime() && forecastDataTime.getDate() != utcDateToday.getDate()){
            break;
        }
        i++;
    }
    // const minTemp, maxTemp, windSpeed, weatherCondition;
    while(i < 25) {
        weatherReport.push({
            minTemp: forecastList[i].main.temp_min,
            maxTemp: forecastList[i].main.temp_max,
            windSpeed: forecastList[i].wind.speed,
            weatherCondition: forecastList[i].weather[0].main,
            date: new Date(forecastList[i].dt_txt).toDateString(),
            city: city,
        });
        i += 8;
    }
    console.log(weatherReport);
    return weatherReport;
}

export default createForecastData;