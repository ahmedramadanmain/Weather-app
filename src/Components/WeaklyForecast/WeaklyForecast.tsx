import type { IForecastDay } from "../../interfaces/IRespone";
import { getNamedTime } from "../../Util/TimeConverter";
import "./weaklyForecast.css";
interface IForecastDayProps {
  forecastday: IForecastDay[];
}
const WeaklyForecast = ({ forecastday }: IForecastDayProps) => {
  const GetAll = () => {
    console.log(forecastday);
  };

  return (
    <div className="weaklyForecast">
      {/* Header */}
      <div className="weakly-header">
        <h2>🌡️ 7-Days Forecast</h2>

        <button onClick={() => GetAll()}>View All</button>
      </div>

      {/* weaklyForecast */}
      <div className="weakly-content">
        {forecastday?.map((forecast) => (
          <div className="box" key={forecast.date}>
            <h3 className="forecast-date">
              <span>{getNamedTime(forecast.date).weekday}</span>
              <span>
                {getNamedTime(forecast.date).month}{" "}
                {getNamedTime(forecast.date).day}
              </span>
            </h3>
            <img
              src={forecast.day.condition.icon}
              alt={forecast.day.condition.text}
            />
            <div className="d-flex align-items-center">
              <span className="fw-bold fs-2">
                {Math.round(forecast.day.maxtemp_c)}°
              </span>
              <span className="fw-normal fs-3">
                /{Math.round(forecast.day.mintemp_c)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaklyForecast;
