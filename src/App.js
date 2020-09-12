import React, {useState} from 'react';
import {fetchWeather} from './api/weatherApi'
import './App.css';
import logo from './images//logo.png'
import { Typography } from '@material-ui/core';
import {FaHeart} from 'react-icons/fa';

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async(e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }
    return (
        <div className = 'main-container'>
        <img src = {logo} alt = 'weather-forecast' className = 'logo'/>
            <input
                className = 'search'
                placeholder = 'Search City...'
                value = {query}
                onKeyPress = {search}
                onChange = {(e)=> setQuery(e.target.value)}
            />
            {weather.main && (
                <div className = 'city'>
                    <h2 variant = 'h2' className = 'city-name'>
                        <span variant = 'subtitle2'>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className = 'city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className = 'info'>
                        <img className = 'city-icon' src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt= {weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
            <Typography className = 'footer'>Developed with <FaHeart/> by Israr Ahmed</Typography>
        </div>
    )
}

export default App;
