import React from 'react';
import './Panal.css';

function Panal({Icon , title, Status}) {
   
    return (
        <div className={Status==='Active' ? "panal__active" : "panal"}>
                <div className="header__option">    
                    {Icon &&  <Icon className = 'headerOption__icon' />}
                    <h4 className='headerOption__title'>{title}</h4>
                </div>
        </div>
    )
}

export default Panal
