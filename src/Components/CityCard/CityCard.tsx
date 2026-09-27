import type { IWeatherResponse } from "../../interfaces/IRespone";
import "./cityCard.css";

interface CityCardProps {
  data: IWeatherResponse;
  cityImage: string;
}

const CityCard = ({ data, cityImage }: CityCardProps) => {
  return (
    <div className="city-card">

      <img
        className="city-image"
        src={cityImage}
        alt={data.location.name}
      />

      <div className="city-info">

        <h4>{data.location.name}</h4>

        <p>{data.location.country}</p>

        <div className="weather-temp">

          <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
          />

          <span>
            {Math.round(data.current.temp_c)}°C
          </span>

        </div>

      </div>

    </div>
  );
};

export default CityCard;