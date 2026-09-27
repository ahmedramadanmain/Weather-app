import { useMemo, useState } from "react";

import type { IForecastDay, IHour } from "../../interfaces/IRespone";

import { getNumericTime } from "../../Util/TimeConverter";

import "./hourlyForecast.css";

interface HourlyForecastProps {
  forecastday: IForecastDay[];
}

const HOURS_TO_SHOW = 12;

const HourlyForecast = ({ forecastday }: HourlyForecastProps) => {
  const [startIndex, setStartIndex] = useState(0);

  // Combine all hours from all forecast days
  const allHours = useMemo<IHour[]>(() => {
    return forecastday.flatMap((day) => day.hour);
  }, [forecastday]);

  const visibleHours = allHours.slice(
    startIndex,
    startIndex + HOURS_TO_SHOW
  );

  const handleNext = () => {
    setStartIndex((prev) => {
      // If there are no more 12 hours, go back to the beginning
      if (prev + HOURS_TO_SHOW >= allHours.length) {
        return 0;
      }

      return prev + HOURS_TO_SHOW;
    });
  };

  return (
    <div className="hourly">
      {/* Header */}
      <div className="hourly-header">
        <h2>🌡️ Hourly Forecast</h2>

        <button onClick={handleNext}>
          Next 12 hours
        </button>
      </div>

      {/* Forecast */}
      <div className="forecast-content">
        {visibleHours.map((hour) => (
          <div className="box" key={hour.time_epoch}>
            <h3>{getNumericTime(hour.time)}</h3>

            <img
              src={hour.condition.icon}
              alt={hour.condition.text}
            />

            <span>{Math.round(hour.temp_c)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;