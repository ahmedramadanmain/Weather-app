import { useQuery } from "@tanstack/react-query";
import type { IWeatherResponse } from "../../interfaces/IRespone";
import { getWeather } from "../../Util/api";
import Loading from "../../Components/Loading/Loading";
import TempChart from "../../Components/TempChart/TempChart";
import HourlyForecast from "../../Components/HourlyForecast/HourlyForecast";
import WeaklyForecast from "../../Components/WeaklyForecast/WeaklyForecast";
import CityHeadTitle from "../../Components/CityHeadTitle/CityHeadTitle";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";

const Forecast = () => {
  const city = useSelector((state: RootState) => state.city.value);
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
    <div className="forecast-page">
      <CityHeadTitle
        region={data.location.region}
        country={data.location.country}
        addToFavorites={false}
        date={false}
      />
      <div className="tempchart">
        <TempChart data={data} height={300} />
      </div>
      <HourlyForecast forecastday={data.forecast.forecastday} />
      <WeaklyForecast forecastday={data.forecast.forecastday} />
    </div>
  );
};

export default Forecast;
