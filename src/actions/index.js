import axios from 'axios';
import API_KEY_WEATHER from '../api_keys';


const API_KEY = API_KEY_WEATHER; // here replace with your api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},ar`
  const request = axios.get(url);

  console.log(  request);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
