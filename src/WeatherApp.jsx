
import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp(){
   const [weatherInfo, setWeatherInfo] = useState(
    {
    
     city: "Delhi",
    feelsLike: 31.43,
    humidity: 74,
    temp: 28.1,
    tempMax: 28.1,
    tempMin: 28.1,
    weather: "haze",
        
    }
   );

   let updateInfo= (result)=>{
    setWeatherInfo(result);
   }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/> 
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
