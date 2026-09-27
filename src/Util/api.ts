const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeather = async (city:string) => {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
};
