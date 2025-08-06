import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx"

const forecast = ({ day, img, imgAlt, conditions, time })

return (
    <div className="weather">
        <h2>`{day} of the Week`</h2>
        <img src="" alt="" />
        <p><span>{conditions}: </span>current weather conditions</p>
        <p><span>time: </span>time of day</p>
    </div>

)

export default forecast;