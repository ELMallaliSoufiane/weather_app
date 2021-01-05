
import axios from 'axios';

  const key = 'a674fdb334033016d686f15e426c0731';
  const api = `https://api.openweathermap.org/data/2.5/weather?`;

  const fetchData =  async (city)=>{
      const query = `${api}q=${city}&units=metric&appid=${key}`
    //    const url = this.state.url+'q='+this.state.query+'&units=metric'+'&appid='+this.state.key;
    const {data} = await axios.get(query);
    console.log(data);
    return data;

  }
export default fetchData;
