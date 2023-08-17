import axios from 'axios';
import React, { useEffect, useState } from 'react';
import sun from '../assets/sun.png';

const CurrentWeather = ({weatherInfo, forecast}) => {
 
  return (
    <main className='mt-20 font-comic'>
        <h2 className='text-center py-5 text-3xl font-semibold '>
          Weather in <span className='font-bold'> {weatherInfo?.location?.name} </span>
        </h2>
      <div className='text-center space-y-14 bg-[#a7b8d9] py-12 pb-20 rounded-xl'>
        <img 
        className='w-48 mx-auto'
        src={weatherInfo?.current?.condition?.icon} alt="" />


        <div className=' '>
          <h2 className='text-2xl font-semibold'> {weatherInfo?.current?.condition.text} </h2>
          <p className='text-5xl font-bold py-4'> {weatherInfo?.current?.temp_c}&#8451;</p>
          <span>High:{forecast?.forecastday?.[0]?.day?.maxtemp_c}&#8451;</span>
          <span className='pl-4'>Low:{forecast?.forecastday?.[0]?.day?.mintemp_c}&#8451;</span>
        </div>
        
        <ul className='flex justify-center space-x-10'>
          <li>
            <span>{weatherInfo?.current?.wind_kph}km/h</span>
            <h4>Wind</h4>
          </li>
          <li>
            <span>{forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}%</span>
            <h4>Chance of Rain</h4>
          </li>
          <li>
            <span>{weatherInfo?.current?.humidity}%</span>
            <h4>Humidity</h4>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default CurrentWeather