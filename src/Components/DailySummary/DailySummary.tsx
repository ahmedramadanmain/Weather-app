import type { IWeatherResponse } from "../../interfaces/IRespone";
import { getNamedTime } from "../../Util/TimeConverter";

import "./dailySummary.css";

interface IDailySummaryProps {
  data: IWeatherResponse;
}

const DailySummary = ({ data }: IDailySummaryProps) => {
  return (
    <div className="daily-summary">
      <h2>Daily Summary</h2>

      <div className="content">

        {/* Header */}
        <div className="summary-head">
          <div className="summary-grid">
            <div>Date</div>
            <div>Condition</div>
            <div>High/Low</div>
            <div>Precipitation</div>
            <div>Humidity</div>
            <div>Wind</div>
            <div>Details</div>
          </div>
        </div>

        {/* Body */}
        <div className="summary-body">
          {data.forecast.forecastday.map((cast) => {
            const date = getNamedTime(cast.date);

            return (
              <div className="summary-grid summary-row" key={cast.date}>

                {/* Date */}
                <div className="summary-date">
                  {`${date.weekday}, ${date.month} ${date.day}`}
                </div>

                {/* Condition */}
                <div className="summary-condition">
                  <img
                    src={cast.day.condition.icon}
                    alt={cast.day.condition.text}
                  />

                  <span>{cast.day.condition.text}</span>
                </div>

                {/* High / Low */}
                <div className="summary-temp">
                  {`${cast.day.maxtemp_c}° / ${cast.day.mintemp_c}°`}
                </div>

                {/* Precipitation */}
                <div className="summary-precipitation">
                  {`${cast.day.daily_chance_of_rain}%`}
                </div>

                {/* Humidity */}
                <div className="summary-humidity">
                  {`${cast.day.avghumidity}%`}
                </div>

                {/* Wind */}
                <div className="summary-wind">
                  {`${cast.day.maxwind_kph} km/h`}
                </div>

                {/* Details */}
                <div className="summary-details">
                  <button >View</button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default DailySummary;
