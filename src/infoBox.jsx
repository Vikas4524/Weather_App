import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function infoBox({info}){
    let INIT_URL =" https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs="

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1658526942745-3141b425b1b9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdlYXRoZXIlMjBjb2xkfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-21JImEjaPh55Ek00YRctuv1VNPwKJnlSDfySyonYw=";

    return(
        <div className="InfoBox">
           <h1>WeatherInfo - {info.weather} </h1>
          <div className='cardContainer'> 
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= { info.humidity>80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          { info.humidity>80 ? <ThunderstormIcon/> : info.temp >15 ? < WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body3" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature = {info.temp}</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}</p>
         <p>max Temp = {info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    

          </div>
          <br /><br />
        </div>
    )
}