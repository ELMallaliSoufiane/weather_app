import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputBox from './Input_box';
import WeatherBox from './weather_box';
import fetchData from './api';



const App = ()=>{


  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');



    const handleChange = (e)=>{
        setCity(e.target.value);
    }


    const handleSubmit = ()=>{
      
    const fetchf = async () => {
        const fetch = await fetchData(city);
        console.log(fetch);
        setWeather(fetch);
    }
    
    fetchf();

    }

  return(
    <>
      <div className="app">
        <InputBox city={city} handleChange={handleChange} handleSubmit={handleSubmit} />
        {weather ? <WeatherBox weather={weather}/> : 'Loading'}
      </div>
        </>
  );

}

// class App extends React.Component{
//   constructor(props){
//       super(props);
//       this.state={
//         key: 'a674fdb334033016d686f15e426c0731',
//         query:'',
//         url: "https://api.openweathermap.org/data/2.5/weather?",
//         weather: '',
//       }
//   }

//   handleChange(e){
//     e.preventDefault();
//     this.setState({
//       query: e.target.value,
//     });
//   }

//   handleSearch(e){
//     if(e.key === "Enter"){
//       console.log(this.state.url+'q='+this.state.query+'&units=metric'+'&appid='+this.state.key);
//       const url = this.state.url+'q='+this.state.query+'&units=metric'+'&appid='+this.state.key;
//       fetch(url).then((res) => res.json()).then((result) =>{ this.setState({
//         weather: result,
//         query:'',
//       });});
//     }
//   }


//   render(){
//     const weather = this.state.weather;   
//       return(
//           <div className="app">
//             <div className="search-box">
//               <div className="search-bar">
//                 <input type="text" onChange={(e)=>this.handleChange(e)}  onKeyPress={(e)=>this.handleSearch(e)} placeholder="Type the city here then press Enter..."/>
//               </div>
//             </div>
//             <div className="location-box">
//                 <div className="location">
//                   {weather ? weather.name +','+ weather.sys.country : ''}
//                 </div>
//             </div>
//             {weather ? 
//             <div className="temperature-box">
//               <div className="temperature-icon">
//                 <img src={require('./assets/'+iconcheck(weather.weather[0].main)+'.png')} />
//               </div>
//               <div className="temperature">
//                 <div className="temperature-degree">
//                 {weather ? Math.round(weather.main.temp)+'°c' :'' }
//                 </div>
//                 <div className="temperature-desc">
//                   {weather ? weather.weather[0].main : ''}
//                 </div>
//               </div>
//             </div>
//             : ''}
//           </div>
//       );
//   }

// }

//=====//
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
