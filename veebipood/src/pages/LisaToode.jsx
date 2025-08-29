import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      toast.error("Tühja nimega ei saa toodet lisada!");
      setSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      toast.success("Uus toode lisatud: " + nimiRef.current.value);
      setSonum("Uus toode lisatud: " + nimiRef.current.value);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <ToastContainer 
        position="top-center"
        autoClose={4000}
        theme="light"
      />


    </div>
  )
}

export default LisaToode