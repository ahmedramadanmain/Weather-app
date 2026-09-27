import { useQuery } from "@tanstack/react-query";
import CityHeadTitle from "../../Components/CityHeadTitle/CityHeadTitle";
import Loading from "../../Components/Loading/Loading";
import type { IAirQuality, IWeatherResponse } from "../../interfaces/IRespone";
import { getWeather } from "../../Util/api";
import { Col, Row } from "react-bootstrap";
import TopImageCity from "../../Components/TopImageCity/TopImageCity";
import CityWeatherState from "../../Components/CityWeatherState/CityWeatherState";
import { useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import { GiPressureCooker } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import "./details.css";

const Details = () => {
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
  function getAirQualityInfo(air: IAirQuality | undefined) {
    let index;
    if (air) {
      index = air["us-epa-index"];
    }
    switch (index) {
      case 1:
        return {
          aqi: 42,
          percentage: 42,
          status: "Good",
        };

      case 2:
        return {
          aqi: 75,
          percentage: 75,
          status: "Moderate",
        };

      case 3:
        return {
          aqi: 120,
          percentage: 100,
          status: "Unhealthy",
        };

      case 4:
        return {
          aqi: 180,
          percentage: 100,
          status: "Unhealthy",
        };

      case 5:
        return {
          aqi: 250,
          percentage: 100,
          status: "Very Unhealthy",
        };

      case 6:
        return {
          aqi: 350,
          percentage: 100,
          status: "Hazardous",
        };

      default:
        return {
          aqi: 0,
          percentage: 0,
          status: "Unknown",
        };
    }
  }
  const airInfo = getAirQualityInfo(data.current.air_quality);
  console.log(data.forecast.forecastday);
  return (
    <div className="Details-page">
      <CityHeadTitle
        country={data.location.country}
        region={data.location.region}
        addToFavorites={true}
        date={false}
        
      />
      <Row>
        <Col md={6}>
          <TopImageCity data={data} />
        </Col>
        <Col md={6}>
          <CityWeatherState
            data={data}
            boxStyle="d-flex align-items-center justify-content-between flex-grow-1"
          />
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6}>
          <div className="air-quality card">
            <h2>Air Quality</h2>

            <div className="aq-top">
              <div className="aqi-value">{airInfo.percentage}</div>

              <div className="aq-status">
                <h3>{airInfo.status}</h3>
                <p>Air Quality Index (AQI)</p>
              </div>
            </div>

            <div className="pollutants">
              <div>
                <span>CO</span>
                <strong>{data.current.air_quality?.co} μg/m³</strong>
              </div>

              <div>
                <span>NO₂</span>
                <strong>{data.current.air_quality?.no2} μg/m³</strong>
              </div>

              <div>
                <span>O₃</span>
                <strong>{data.current.air_quality?.o3} μg/m³</strong>
              </div>

              <div>
                <span>SO₂</span>
                <strong>{data.current.air_quality?.so2} μg/m³</strong>
              </div>

              <div>
                <span>PM2.5</span>
                <strong>{data.current.air_quality?.pm2_5} μg/m³</strong>
              </div>

              <div>
                <span>PM10</span>
                <strong>{data.current.air_quality?.pm10} μg/m³</strong>
              </div>
            </div>
          </div>
        </Col>

        <Col md={3}  sm={6}>
          <div className="sun-moon card">
            <h2>Sun & Moon</h2>

            <div className="sun-moon-content">
              <div className="astro-row">
                <div className="astro-info">
                  <div className="astro-icon">🌅</div>

                  <span>Sunrise</span>
                </div>

                <span className="astro-time">
                  {data.forecast.forecastday[0].astro.sunrise}
                </span>
              </div>

              <div className="astro-row">
                <div className="astro-info">
                  <div className="astro-icon">🌇</div>

                  <span>Sunset</span>
                </div>

                <span className="astro-time">
                  {data.forecast.forecastday[0].astro.sunset}
                </span>
              </div>

              <div className="moon-row">
                <div className="moon-icon">🌙</div>

                <div className="moon-phase">
                  <span>Moon Phase</span>
                  <strong>
                    {data.forecast.forecastday[0].astro.moon_phase}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={3}  sm={6}>
          <div className="wind card">
            <h2>Wind</h2>

            <div className="wind-compass">
              <div className="compass">
                <span className="north">N</span>
                <span className="east">E</span>
                <span className="south">S</span>
                <span className="west">W</span>

                <div
                  className="wind-arrow"
                  style={{
                    transform: `rotate(${data.current.wind_degree}deg)`,
                  }}
                >
                  ↑
                </div>

                <strong>{data.current.wind_dir}</strong>
              </div>
            </div>

            <div className="wind-data">
              <div>
                <strong>{data.current.wind_kph} km/h</strong>
                <span>Wind Speed</span>
              </div>

              <div>
                <strong>{data.current.gust_kph} km/h</strong>
                <span>Gusts</span>
              </div>
            </div>
          </div>
        </Col>

        <Col md={3}  sm={6}>
          <div className="pressure card">
            <h2>Pressure & Visibility</h2>

            <div className="pressure-box">
              <div className="pressure-icon">
                <GiPressureCooker />
              </div>

              <div className="pressure-info">
                <span>Pressure</span>
                <strong>{data.current.pressure_mb} hPa</strong>
              </div>
            </div>

            <div className="pressure-box">
              <div className="pressure-icon">
                <FaEye />
              </div>

              <div className="pressure-info">
                <span>Visibility</span>
                <strong>{data.current.vis_km} km</strong>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
