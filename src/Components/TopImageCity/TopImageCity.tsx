import type { IWeatherResponse } from "../../interfaces/IRespone";
import { getNumericTime } from "../../Util/TimeConverter";
import "./topImageCity.css"
interface TopImageCityProp{
    data:IWeatherResponse
}
const TopImageCity = ({data}:TopImageCityProp) => {
    return ( 
           <section className="top">
        
        <div className="content">
          
          {/* LEFT SIDE */}
          <div className="left">
            
            <h2>
              
              {data.location.region}, {data.location.country}
            </h2>
            <span className="last-updated"> {data.current.last_updated} </span>
            <div className="weather-info">
              
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
              <div className="info">
                
                <h4 className="temp"> {data.current.temp_c}°C </h4>
                <span> {data.current.condition.text} </span>
                <span> Feels Like {data.current.feelslike_c}°C </span>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="right">
            
            <div className="local-time">
              
              <span> Local Time </span>
              <span> {getNumericTime(data.location.localtime)} </span>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default TopImageCity;