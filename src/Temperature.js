import React, {useState , useEffect} from 'react';
import Gauge from 'react-svg-gauge';
import firebase from './firebase'; 
import './Temperature.css';
import graph from './assets/graph.gif';

function Temperature() {
    const [Status1, setStatus1] = useState([]);
    useEffect(()=>{
        let isMounted = true;
        const myitems2 = firebase.database().ref('Temperature');
        myitems2.on("value", snapshot => {
            let value = snapshot.val();
            if (isMounted)
            setStatus1(value);
        });
        return () =>{isMounted =false};
    });

    const LableStyle = {
        color:"white"
    };
    const Color__codes = {
        0 :"rgb(16, 188, 251)",
        10 :"rgb(43, 180, 223)",
        20 :"rgb(69, 172, 196)",
        30 :"rgb(96, 164, 168)",
        40:"rgb(122, 156, 141)",
        50 :"rgb(149, 147, 113)",
        60 :"rgb(175, 139, 86)",
        70 :"rgb(202, 131, 58)",
        80 :"rgb(228, 123, 31)",
        90 :"rgb(255, 115, 3)"
    } 
    return (
        <div className='temperature'>
            <p>Temperature</p>
            <div className="temperature__gauge">    
                <Gauge className="meter__gauge" color={Color__codes[(Math.round(Status1/10))*10]} value={Status1} width={220} height={200} label='' valueLabelStyle = {LableStyle}/>
            </div>
            <img src={graph} alt=""/>
        </div>
        
    )
}

export default Temperature;