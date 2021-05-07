import React, { useEffect, useState } from 'react'
import './ApiHome.css'

function ApiHome() {

    const [temp, settemp] = useState(0);
    const [humi, sethumi] = useState(0);

    useEffect(() => {
      let isMounted = true;
      if (isMounted){
        fetchApi()
      }
      return () =>{isMounted =false};
      }, []);

    const fetchApi = async () => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=a4d8340632dfca4d53dd9e6e6b8d394f`;
        const response = await fetch(URL);
        const resJson = await response.json();
        settemp(Math.trunc(resJson.main.temp));  //Decimal Removal Fucntion
        sethumi(resJson.main.humidity)
      };

    return (
        <div className = "API_home">
        <h3>{temp} ℃</h3>
        <h3>{humi} %</h3>
        
        </div>
    )
}

export default ApiHome
