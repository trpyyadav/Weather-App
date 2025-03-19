import { useState } from "react";
import "./WeatherApp.css"
import InfoBox from "./infoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
    let[weatherInfo, setWeatherInfo] = useState({
        // city: "WonderLand",
        // feelsLike: 21.59,
        // humidity: 49,
        // pressure: 1009,
        // temp: 22.05,
        // tempMax: 22.05,
        // tempMin: 22.05,
        // weather: "haze",

        city: "",
        feelsLike: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        tempMax: 0,
        tempMin: 0,
        weather: "",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return(
        <div className="weatherApp">
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}