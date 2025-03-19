import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let init_url = "https://plus.unsplash.com/premium_photo-1716827895587-ee11d9313320?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjBkZWxoaXxlbnwwfHwwfHx8MA%3D%3D";
    let hot_url = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let cold_url = "https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let rain_url = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // let info = {
    //     city: "Delhi",
    //     feelsLike: 21.59,
    //     humidity: 49,
    //     pressure: 1009,
    //     temp: 22.05,
    //     tempMax: 22.05,
    //     tempMin: 22.05,
    //     weather: "haze",
    // }
    return(
        <div className='infoBox'>
            <div className='containerBox'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rain_url: info.temp > 15 ? hot_url : cold_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature: {info.temp}&deg;C</div>
          <div>Minimum Temperature: {info.tempMin}&deg;C</div>
          <div>Maximum Temperature: {info.tempMax}&deg;C</div>
          <div>Humidity: {info.humidity}</div>
          <div>Pressure: {info.pressure}</div>
          <div>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
        
    );
}