import React from 'react';
import './Card.css';
function Card({ Status__Pic , Value, Unit, title}) {
    return (
        <div className='card' 
            style={{
                background : title ==='Temperature' ? "linear-gradient(135deg, hsla(209, 100%, 49%, 1) 0%, hsla(178, 100%, 50%, 1) 100%)":'linear-gradient(135deg, hsla(178, 100%, 50%, 1) 0%, hsla(209, 100%, 49%, 1) 100%)',
                border: "1px solid skyblue" 
            }}>
            <img src={Status__Pic} alt=""/>
            <h1>{Value} {Unit}</h1>
            <p>{title}</p>
            
        </div>
    )
}

export default Card 
