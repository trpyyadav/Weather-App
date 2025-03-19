import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "e301dc869ae1de7da35aec7eb5ab6fec";

    let getWeatherData = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let weatherData = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(weatherData);
        return weatherData;
        } catch(err) {
            throw(err);
        }
        
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
        console.log(city);
        setError(false);
        setCity("");
        let newInfo = await getWeatherData();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
        
    }


    return(
        <div className='app'>
        <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City" 
            variant="outlined" 
            required value={city} 
            onChange={handleChange
            }/>
            <br /><br />
            <Button variant="outlined" type="submit">Submit</Button>
            {error && <p style={{color: "red"}}>No such place exists!!</p>}
        </form>
        </div>
        

    );
}