import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from './Card';
import humidity from './assets/humidity.gif';
import day from './assets/Day.gif';
import night from './assets/night.gif';
import Switch from 'react-neumorphic-toggle';
import sunny from './assets/BS.gif';
import cloudy from './assets/cloudsONLY.gif';
import sc from './assets/SwC.gif';
import firebase from './firebase';
import ApiHome from './ApiHome';

function Home() {

    const [Connectivity, setConnectivity] = useState(0);

    var d = new Date();
    var n = d.getHours();
  
    const [StatusH, setStatusH] = useState([]);
    const [StatusT, setStatusT] = useState([]);
    const [StatusLED0, setStatusLED0] = useState([]);
    const [StatusLED1, setStatusLED1] = useState([]);
    const [StatusLED2, setStatusLED2] = useState([]);
    const [StatusLED3, setStatusLED3] = useState([]);
    const [StatusLED4, setStatusLED4] = useState([]);
    const [StatusLED5, setStatusLED5] = useState([]);

    useEffect(() => {
      const myitemsH = firebase.database().ref("Humidity");
        myitemsH.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusH(value);
      });

      const myitemsT = firebase.database().ref("Temperature");
      myitemsT.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusT(value);
      });

      const conn = firebase.database().ref("Connectivity");
      conn.on("value", (snapshot) => {
        setConnectivity(snapshot.val());
      });

      const relay = firebase.database().ref('LED_STATUS0');
      relay.on("value", snapshot => {
        setStatusLED0(snapshot.val());
      })

      const myitems1 = firebase.database().ref('LED_STATUS1');
      myitems1.on("value", snapshot => {
        setStatusLED1(snapshot.val());
      })

      const myitems2 = firebase.database().ref('LED_STATUS2');
      myitems2.on("value", snapshot => {
        setStatusLED2(snapshot.val());
      })

      const myitems3 = firebase.database().ref('LED_STATUS3');
      myitems3.on("value", snapshot => {
        setStatusLED3(snapshot.val());
      })

      const myitems4 = firebase.database().ref('LED_STATUS4');
      myitems4.on("value", snapshot => {
        setStatusLED4(snapshot.val());
      })

      const myitems5 = firebase.database().ref('LED_STATUS5');
      myitems5.on("value", snapshot => {
        setStatusLED5(snapshot.val());
      })

    }, []);

    console.log(StatusLED0, StatusLED1, StatusLED2, StatusLED3, StatusLED4, StatusLED5);

    const off = () => {
      firebase.database().ref().update({
        Connectivity: 0,
        Humidity: 0,
        Temperature: 0,
        LED_STATUS0: 1,
        LED_STATUS1: 0,
        LED_STATUS2: 0,
        LED_STATUS3: 0,
        LED_STATUS4: 0,
        LED_STATUS5: 0,
      });
    };


    const handleChange = (event) => {
      off();
    };



    return (
        
        <div className = 'home'>
            <div className="Data_Overiew">
                <Card Status__Pic={humidity}  Value={StatusH}  Unit = "%" title="Humidity" />
                <div className="Current__Environment">
                    {n>= 6 && n<20 ? <img src={day} alt=""/> : <img src={night} alt=""/> }
                    <h3><ApiHome /></h3>
                    <p style={{color : "#000", "font-weight" : "bold" }}>New Delhi</p>
                </div>

                <Card Status__Pic={
                    StatusH >=0 && StatusH <=45 ? cloudy
                    : StatusH >45 && StatusH <= 60?
                    sc
                    : StatusH >60 && StatusH <=100?
                    sunny
                    :false
                  }
                  
                Value={StatusT} 
                Unit = "℃"
                title="Temperature" />

            </div>
            <div className="Home__Status">
                <div className="Top__element">
                    <div className="status__element">
                        <h3> Connectivity :</h3>
                        <div className = {Connectivity ? "Connected" : "Disconnected"}>
                        </div> 
                    </div>

                    <div className="status__element">
                    <h3> Terminate :</h3>

                   <Switch
                        onChange={handleChange}          
                    />  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
