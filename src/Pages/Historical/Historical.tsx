import CityHeadTitle from "../../Components/CityHeadTitle/CityHeadTitle";
import { useQuery } from "@tanstack/react-query";
import type { IWeatherResponse } from "../../interfaces/IRespone";
import { getWeather } from "../../Util/api";
import Loading from "../../Components/Loading/Loading";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import { Col, Row } from "react-bootstrap";
import TempChart from "../../Components/TempChart/TempChart";
import PrecipitationChart from "../../Components/PrecipitationChart/PrecipitationChart";
import DailySummary from "../../Components/DailySummary/DailySummary";

const Historical = () => {
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
    <div className="historical-page">
      <CityHeadTitle
        country={data.location.country}
        region={data.location.region}
        addToFavorites={false}
        date={true}
      />
      <Row>
        <Col md={6} sm={12}>
          <TempChart data={data} height={365}/>
        </Col>
        
        <Col md={6} sm={12}>
        <PrecipitationChart data={data}  />
        </Col>
      </Row>
      <DailySummary data={data}/>
    </div>
  );
};

export default Historical;
