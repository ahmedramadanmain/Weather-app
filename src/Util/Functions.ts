import type {IWeatherResponse } from "../interfaces/IRespone";
import { getNamedTime } from "./TimeConverter";

export function getTempChartData(data:IWeatherResponse){
     return data?.forecast.forecastday.map((forecastDay)=>{
    return {
      day:getNamedTime(forecastDay.date).weekday,
      date:(getNamedTime(forecastDay.date).month).concat(" ",getNamedTime(forecastDay.date).day),
      high:forecastDay.day.maxtemp_c,
      low:forecastDay.day.mintemp_c
    }
  })
}

export function getPreciptionChartData(data:IWeatherResponse){
     return data?.forecast.forecastday.map((forecastDay)=>{
    return {
      day:getNamedTime(forecastDay.date).weekday,
      date:(getNamedTime(forecastDay.date).month).concat(" ",getNamedTime(forecastDay.date).day),
    precipitation:forecastDay.day.daily_chance_of_rain
    }
  })
}