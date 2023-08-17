import axios from "axios";

/* 
const API = 'e7afa7d66ab649ca94e34712232503';

const FetchData = async () =>{
    const data = axios.get(`http://api.weatherapi.com/v1/current.json?key=${API}>&q=Faridabad`);
    console.log(data)
}
 */


// <!------- Rapid API -------!>
const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {zip: '121002', city: 'Faridabad', state: 'Haryana', country: 'India'},
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

export const fetchData = () =>{  
    axios.request(options).then(function (response) {
        return response
    }).catch(function (error) {
        console.error(error);
    });
}


