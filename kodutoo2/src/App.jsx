import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
    } else {
      muudaSonum("Vale parool");
    }
  }

    const logiValja = () => {
      muudaSisselogitud("ei");
      muudaSonum("");
    }

  return (
    <div className="App">
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label><br></br>
        <input ref={kasutajaNimiRef} type="text"></input><br></br>
        <label>Parool</label><br></br>
        <input ref={paroolRef} type="password"></input><br></br>
      </div> }

      {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}




      <div>--SIIN ON VARASEM KODUTÖÖ--</div>
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/meist"><button>Meist</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/seaded"><button>Seaded</button></Link>

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/meist" element={<Meist/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/seaded" element={<Seaded/>}/>
      </Routes>
    </div>
  )
}


export default App
