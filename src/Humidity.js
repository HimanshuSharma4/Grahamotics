import React, {useState , useEffect} from 'react';
import Gauge from 'react-svg-gauge';
import firebase from './firebase'; 
import graph from './assets/graph.gif';
import './Humidity.css'; 

function Humidity() {
    const [Status2, setStatus2] = useState([]);
    useEffect(()=>{
        let isMounted = true;
        const myitems2 = firebase.database().ref('Humidity');
        myitems2.on("value", snapshot => {
            let value = snapshot.val();
            if (isMounted)
            setStatus2(value);
        })
        return () =>{isMounted =false};
    })

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
        <div className='humidity'>
            <p>Humidity</p>
            <div className="humidity__gauge">
                <Gauge className="meter__gauge" color={Color__codes[(Math.round(Status2/10))*10]} value={Status2} width={220} height={200} label='' valueLabelStyle = {LableStyle}/>
            </div>
            <img src={graph} alt=""/>
        </div>
        
    )
}

export default Humidity;