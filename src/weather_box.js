import React, {useState, useEffect} from 'react';
import fetchData from './api';
import './index.css';

const WeatherBox = (props)=>{


    return (
        <>
            <div className="location-box">
                <div className="location">
              { props.weather !== undefined ? props.weather.name +','+ props.weather.sys.country : ''}
                </div>
            </div>
            {props.weather ? 
            <div className="temperature-box">
              <div className="temperature-icon">
                <img src={require('./assets/'+iconcheck(props.weather.weather[0].main)+'.png')} />
              </div>
              <div className="temperature">
                <div className="temperature-degree">
                {props.weather ? Math.round(props.weather.main.temp)+'°c' :'' }
                </div>
                <div className="temperature-desc">
                  {props.weather ? props.weather.weather[0].main : ''}
                </div>
              </div>
            </div>
            : ''}
            </>
    );



}
function iconcheck(xs){
    if(xs.match(/.*cloud.*/i)){
      return 'Clouds';
    }
    if(xs.match(/.*rain.*/i)){
      return 'Rain';
    }
    if(xs.match(/.*Clear.*/i)){
      return 'Clear';
    }
    if(xs.match(/.*snow.*/i)){
      return 'snow';
    }
    if(xs.match(/.*Lightning.*/i)){
      return 'Lightning';
    }
  }


export default WeatherBox;