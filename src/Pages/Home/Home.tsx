import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../Util/api.js";
import Loading from "../../Components/Loading/Loading.js";
import HourlyForecast from "../../Components/HourlyForecast/HourlyForecast";
import type { IWeatherResponse } from "../../interfaces/IRespone.js";
import "./home.css";
import WeaklyForecast from "../../Components/WeaklyForecast/WeaklyForecast.js";
import TopImageCity from "../../Components/TopImageCity/TopImageCity.js";
import CityWeatherState from "../../Components/CityWeatherState/CityWeatherState.js";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/Store.js";
const Home = () => {
      const city = useSelector((state: RootState) => state.city.value)

      console.log(city)
  const { isPending, error, data } = useQuery<IWeatherResponse>({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
  });
  if (isPending) {
    return <Loading />;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="home-page">
      
      {/* ================= WEATHER CARD ================= */}
        <TopImageCity data={data}/>
      {/* ================= STATISTICS ================= */}
        <CityWeatherState data={data}  boxStyle="" />
      {/* ================= HOURLY FORECAST ================= */}
      <section className="hourly-forecast">
        
        <HourlyForecast forecastday={data.forecast.forecastday} />
      </section>
         {/* ================= 7 DAYS FORECAST ================= */}
      <section className="Weakly-forecast">
        
        <WeaklyForecast forecastday={data.forecast.forecastday} />
      </section>
    </div>
  );
};
export default Home;
