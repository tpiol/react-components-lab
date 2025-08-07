import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx"
import WeatherData from "../WeatherData/WeatherData.jsx"

const Forecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className="weather">

            <h2>{day}</h2>
            <WeatherIcon img={img} imgAlt={imgAlt}/>
            <p><span>conditions: </span> {conditions} </p>
            <p><span>time: </span> {time} </p>

        </div>

    )
};

export default Forecast;