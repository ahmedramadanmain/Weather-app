import { IoWaterOutline } from "react-icons/io5";
import { FaWind, FaEye } from "react-icons/fa6";
import { GiPressureCooker } from "react-icons/gi";
import { GoSun } from "react-icons/go";

import "./cityWeatherState.css"
import type { IWeatherResponse } from "../../interfaces/IRespone";

interface ICityWeatherStateProps{
  data:IWeatherResponse,
  boxStyle:string
}
const CityWeatherState = ({data,boxStyle}:ICityWeatherStateProps) => {
  return (
    <section className={`statistics`}>
      {/* Humidity */}
      <div className="box  ">
        <div className="icon">
          <IoWaterOutline />
        </div>
        <div className={`info ${boxStyle}`}>
          <h2> Humidity </h2> <span> {data.current.humidity}% </span>
        </div>
      </div>
      {/* Wind */}
      <div className="box">
        <div className="icon">
          <FaWind />
        </div>
        <div className={`info  ${boxStyle}`}>
          <h2> Wind </h2>
          <span>
            {data.current.wind_kph} km/h
            <span className="wind-direction">{data.current.wind_dir}</span>
          </span>
        </div>
      </div>
      {/* Pressure */}
      <div className="box">
        <div className="icon">
          <GiPressureCooker />
        </div>
        <div className={`info ${boxStyle}`}>
          <h2> Pressure </h2>
          <span> {data.current.pressure_mb} hPa </span>
        </div>
      </div>
      {/* UV */}
      <div className="box">
        <div className="icon">
          <GoSun />
        </div>
        <div className={`info ${boxStyle}`}>
          <h2> UV Index </h2> <span> {data.current.uv} </span>
        </div>
      </div>
      {/* Visibility */}
      <div className="box">
        <div className="icon">
          <FaEye />
        </div>
        <div className={`info ${boxStyle}`}>
          <h2> Visibility </h2> <span> {data.current.vis_km} KM </span>
        </div>
      </div>
    </section>
  );
};

export default CityWeatherState;
