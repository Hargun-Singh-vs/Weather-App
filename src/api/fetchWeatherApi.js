import createForecastData from "./createForecastData";
import errors from "../Constant/error";

const fetchWeatherApi = async (url, isDisplayClicked) => {
    try {
        const apiRes = await fetch(url);
        if(!apiRes.ok){
            throw new Error(errors[apiRes.status]);
        }
        const jsonRes = await apiRes.json();
        return isDisplayClicked? jsonRes: createForecastData(jsonRes);
    }
    catch(err) {
        console.log({err});
        alert(err.message);
    }
}

// const fetchWeatherApi = (url, isDisplayClicked) => {
//     return fetch(url)
//         .then((res)=>{
//             if(!res.ok)
//             {
//                 throw new Error(errors[res.status]);
//             }
//             return res.json();
//         })
//         .then((data)=>{
//             if(isDisplayClicked){
//                 return data;
//             }
//             else
//                 return createForecastData(data);
//         })
//         .catch(err => {
//             console.log({err});
//             alert(err.message);
//         })
// }

export default fetchWeatherApi;
