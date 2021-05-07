import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import loader from './assets/iot.gif';
import react from './assets/react.gif';
import firebase from './assets/firebase.gif';

function App() {
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)

  }, [])

  return (
    <div className="App">    
    {
      loading ?
        <div className ="loader">
          <img src ={loader} alt="loader" />
          <img src ={firebase} alt="firebase"/>
          <img src ={react} alt="react"/>
        </div>
      : <div className ="image">
          <div><Header /></div>  
        </div>
    }

   </div>
  )
}

export default App
