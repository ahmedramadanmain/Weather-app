import { getWeather } from "../../Util/api";
import type { IWeatherResponse } from "../../interfaces/IRespone";

import { useQueries } from "@tanstack/react-query";
import { Col, Row } from "react-bootstrap";

import NewYork from "../../assets/images/newYork.jpg";
import London from "../../assets/images/london.jpeg";
import Dubai from "../../assets/images/dubai.jpg";
import Tokyo from "../../assets/images/tokyo.jpg";
import Istanbul from "../../assets/images/Istanbul.jpg";
import Sydney from "../../assets/images/Sydney.jfif";

import CityCard from "../../Components/CityCard/CityCard";

import { CiClock2 } from "react-icons/ci";
import { LuDelete, LuBookmark } from "react-icons/lu";

import "./search.css";
import { useEffect, useState } from "react";

const Search = () => {
  const popularCities = [
    {
      name: "New York",
      image: NewYork,
    },
    {
      name: "London",
      image: London,
    },
    {
      name: "Dubai",
      image: Dubai,
    },
    {
      name: "Tokyo",
      image: Tokyo,
    },
    {
      name: "Istanbul",
      image: Istanbul,
    },
    {
      name: "Sydney",
      image: Sydney,
    },
  ];

  // =========================
  // Popular Cities Queries
  // =========================

  const citiesQueries = useQueries({
    queries: popularCities.map((city) => ({
      queryKey: ["weather", city.name],
      queryFn: () => getWeather(city.name),
      staleTime: 1000 * 60 * 5,
    })),
  });

  // =========================
  // States
  // =========================

  const [recentSearchedCities, setRecentSearchedCities] = useState<
    string[]
  >([]);

  const [savedCities, setSavedCities] = useState<string[]>([]);

  // =========================
  // Read LocalStorage
  // =========================

  const getCitiesFromStorage = (key: string): string[] => {
    const storedCities = localStorage.getItem(key);

    if (!storedCities) {
      return [];
    }

    try {
      const parsedCities = JSON.parse(storedCities);

      if (Array.isArray(parsedCities)) {
        return parsedCities;
      }

      return [];
    } catch {
      return [];
    }
  };

  // =========================
  // Load Cities
  // =========================

  useEffect(() => {
    const recentCities = getCitiesFromStorage("recentSearchedCities");
    const savedCities = getCitiesFromStorage("saved-cities");

    setRecentSearchedCities(recentCities);
    setSavedCities(savedCities);
  }, []);

  // =========================
  // Delete One City
  // =========================

  const handleDelete = (
    type: "recent-searched" | "saved-cities",
    cityToDelete: string
  ) => {
    if (type === "recent-searched") {
      const updatedCities = recentSearchedCities.filter(
        (city) => city !== cityToDelete
      );

      setRecentSearchedCities(updatedCities);

      localStorage.setItem(
        "recentSearchedCities",
        JSON.stringify(updatedCities)
      );

      return;
    }

    if (type === "saved-cities") {
      const updatedCities = savedCities.filter(
        (city) => city !== cityToDelete
      );

      setSavedCities(updatedCities);

      localStorage.setItem(
        "saved-cities",
        JSON.stringify(updatedCities)
      );
    }
  };

  // =========================
  // Clear All
  // =========================

  const handleClearAll = (
    type: "recent-searched" | "saved-cities"
  ) => {
    if (type === "recent-searched") {
      setRecentSearchedCities([]);

      localStorage.removeItem("recentSearchedCities");

      return;
    }

    if (type === "saved-cities") {
      setSavedCities([]);

      localStorage.removeItem("saved-cities");
    }
  };

  return (
    <div className="search-page">
      <Row>
        {/* =========================
            LEFT SIDEBAR
        ========================== */}

        <Col md={4} sm={12}>
          <div className="search-sidebar">

            {/* =========================
                Recent Searches
            ========================== */}

            <div className="recent-searched">
              <div className="head d-flex justify-content-between align-items-center">
                <h3>Recent Searches</h3>

                {recentSearchedCities.length > 0 && (
                  <button
                    onClick={() =>
                      handleClearAll("recent-searched")
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0000FF",
                    }}
                  >
                    Clear all
                  </button>
                )}
              </div>

              <ul className="list-unstyled d-flex flex-column gap-4">
                {recentSearchedCities.map((city) => (
                  <li
                    key={city}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="left gap-3 d-flex align-items-center">
                      <CiClock2 />

                      <span>{city}</span>
                    </div>

                    <div className="right">
                      <button
                        onClick={() =>
                          handleDelete(
                            "recent-searched",
                            city
                          )
                        }
                        style={{
                          background: "none",
                          border: "none",
                        }}
                      >
                        <LuDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* =========================
                Saved Cities
            ========================== */}

            <div className="saved-city">
              <div className="head d-flex justify-content-between align-items-center">
                <h3>Saved Cities</h3>

                {savedCities.length > 0 && (
                  <button
                    onClick={() =>
                      handleClearAll("saved-cities")
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0000FF",
                    }}
                  >
                    Clear all
                  </button>
                )}
              </div>

              <ul className="list-unstyled d-flex flex-column gap-4">
                {savedCities.map((city) => (
                  <li
                    key={city}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="left gap-3 d-flex align-items-center">
                      <LuBookmark />

                      <span>{city}</span>
                    </div>

                    <div className="right">
                      <button
                        onClick={() =>
                          handleDelete(
                            "saved-cities",
                            city
                          )
                        }
                        style={{
                          background: "none",
                          border: "none",
                        }}
                      >
                        <LuDelete />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>

        {/* =========================
            RIGHT SIDE
        ========================== */}

        <Col md={8} sm={12}>
          <div className="popular-cities">
            <h2>Popular Cities</h2>

            <Row>
              {popularCities.map((city, index) => {
                const query = citiesQueries[index];

                if (query.isPending) {
                  return (
                    <Col md={6} key={city.name}>
                      <div className="city-card loading">
                        Loading...
                      </div>
                    </Col>
                  );
                }

                if (query.isError) {
                  return (
                    <Col md={6} key={city.name}>
                      <div className="city-card">
                        Error loading weather
                      </div>
                    </Col>
                  );
                }

                return (
                  <Col md={6} key={city.name}>
                    <CityCard
                      data={query.data as IWeatherResponse}
                      cityImage={city.image}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;