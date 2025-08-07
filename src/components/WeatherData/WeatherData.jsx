const WeatherData = ({ day, conditions, time }) => {
    return (
        <div className="weather">

            <h2>{day}</h2>
            <p><span> {conditions} </span></p>
            <p><span> {time} </span></p>

        </div>
    )
}

export default WeatherData;