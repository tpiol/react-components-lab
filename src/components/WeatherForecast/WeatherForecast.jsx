import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon.jsx"
import WeatherData from "../WeatherData/WeatherData.jsx"

const Forecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className="weather">

            <WeatherData day={day} />
            <WeatherIcon img={img} imgAlt={imgAlt}/>
           <WeatherData conditions={conditions} time={time}/>
        </div>

    )
};

export default Forecast;