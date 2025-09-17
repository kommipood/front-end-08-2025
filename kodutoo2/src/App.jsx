import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import Months from './pages/Months'
import { useState } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import NotFound from './pages/NotFound'

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    //pikkus on väiksem kui 8
    if (paroolRef.current.value.length < 8) {
      toast.error("Liiga lühike");
      return;
    }

    //kõik väikesteks tähtedeks teisendatuna on identne mis originaal
    if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
      toast.error("Peab sisaldama suurt tähte");
      return;
    }

    //kõik suurteks tähtedeks teisendatuna on identne mis originaal
    if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
      toast.error("Peab sisaldama väikest tähte");
      return;
    }

    //ei sisalda protsenti on false
    if (paroolRef.current.value.includes("%") === false) {
      toast.error("Peab sisaldama protsenti");
      return;
    }

    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
      toast.success("Sõnum");
      return;
    } 
      muudaSonum("Vale parool");
      toast.error("Sõnum");
      return;
      
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
      <Link to="/months"><button>Months</button></Link>

      <Routes>
        <Route path="/" element={<Avaleht/>}/>
        <Route path="/meist" element={<Meist/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="/seaded" element={<Seaded/>}/>
        <Route path="/momths" element={<Months/>}/>

        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
 
 
      )

}


export default App
