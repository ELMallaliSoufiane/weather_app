import React, {useState} from 'react';

import './index.css';


const InputBox = (props)=>{


    const handSubmit = (e)=>{
        e.preventDefault();
        props.handleSubmit();
    }

    return(
        
            <div className="search-box">
              <div className="search-bar">
                <form onSubmit={handSubmit}>
                    <input placeholder="Type a city/countery ..." name="city" type="text" value={props.city} onChange={props.handleChange}/>
                </form>
              </div>
            </div>
    );
}
export default InputBox;