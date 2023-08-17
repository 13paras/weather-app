import React, { useState, useEffect } from 'react'
import CurrentWeather from './components/CurrentWeather'
import DailyForecast from './components/DailyForecast'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {
  const [weatherInfo, SetWeatherInfo ] = useState({});
  const [forecast, setForecast ] = useState([]);
  // const maxTemp = weatherInfo.forecast.forecastday[0].maxtemp_c;
  const API = import.meta.env.VITE_REACT_APP_API_KEY
  const fetchData = async () =>{
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API}&q=Faridabad&days=1&aqi=yes`)
    SetWeatherInfo(response?.data);
    setForecast(response?.data.forecast)
    console.log(weatherInfo);
    console.log(forecast)
  }
  useEffect(() =>{
    fetchData();
  },[])
  return (
    <div className='w-[60%] mx-auto'>
      <Navbar />
      <CurrentWeather
      weatherInfo={weatherInfo}
      forecast={forecast} />
      <DailyForecast />
    </div>
  )
}

export default App