import React, { useState} from 'react';
import firebase from './firebase';
import './Controls.css';
import Switch from 'react-neumorphic-toggle';

function Controls() {  
    const [stateLED0, setStateLED0] = useState(0);
    const [stateLED1, setStateLED1] = useState(0);
    const [stateLED2, setStateLED2] = useState(0);
    const [stateLED3, setStateLED3] = useState(0);
    const [stateLED4, setStateLED4] = useState(0);
    const [stateLED5, setStateLED5] = useState(0);

    const ChangeVal0 = () => {
        firebase.database().ref().update({
          LED_STATUS0 : stateLED0
        });
    }

    const ChangeVal1 = () => {
        firebase.database().ref().update({
          LED_STATUS1 : Number(!stateLED1)
        });
    }

    const ChangeVal2 = () => {
        firebase.database().ref().update({
          LED_STATUS2 : Number(!stateLED2)
        });
    }

    const ChangeVal3 = () => {
        firebase.database().ref().update({
          LED_STATUS3 : Number(!stateLED3)
        });
    }

    const ChangeVal4 = () => {
        firebase.database().ref().update({
          LED_STATUS4 : Number(!stateLED4)
        });
    }

    const ChangeVal5 = () => {
        firebase.database().ref().update({
          LED_STATUS5 : Number(!stateLED5)
        });
    }

    function handleChange(event,led)
    {
        if(led==="relay"){ setStateLED0(stateLED0 ? 0:1); ChangeVal0();}
        if(led==="led1"){ setStateLED1(stateLED1 ? 0:1); ChangeVal1();}
        if(led==="led2"){ setStateLED2(stateLED2 ? 0:1); ChangeVal2();}
        if(led==="led3"){ setStateLED3(stateLED3 ? 0:1); ChangeVal3();}
        if(led==="led4"){ setStateLED4(stateLED4 ? 0:1); ChangeVal4();}
        if(led==="led5"){ setStateLED5(stateLED5 ? 0:1); ChangeVal5();}
    };

    return (
        <div className="controls">
          <div className="led__left">
            <div className="led">
              <p>Relay </p>
              <p>{Number(stateLED0)}</p>
              <Switch onChange={event => {handleChange(event,"relay")}}/>
            </div>

            <div className="led"> 
              <p>LED1 </p>
              <p>{Number(stateLED1)}</p>
              <Switch onChange={event => {handleChange(event,"led1")}}/>
            </div>
            
            <div className="led"> 
              <p>LED2 </p>
              <p>{Number(stateLED2)}</p>
              <Switch onChange={event => {handleChange(event,"led2")}}/>
            </div>
          </div>
        
          <div className="led__right">
              <div className="led"> 
                <p>LED3 </p>
                <p>{Number(stateLED3)}</p>
                <Switch onChange={event => {handleChange(event,"led3")}}/>
              </div>
              
              <div className="led"> 
                <p>LED4 </p>
                <p>{Number(stateLED4)}</p>
                <Switch onChange={event => {handleChange(event,"led4")}}/>
              </div>
              
              <div className="led"> 
                <p>LED5 </p>
                <p>{Number(stateLED5)}</p> 
                <Switch onChange={event => {handleChange(event,"led5")}}/>
              </div>
          </div>
        </div>
    )
}

export default Controls