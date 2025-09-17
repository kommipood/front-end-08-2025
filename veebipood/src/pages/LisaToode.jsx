
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import autodFailist from "../data/autod.json"
  

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");
  // const nimiRef = useRef();
  const [product, setProduct] = useState({});

  function lisa() {
    if (product.nimi === undefined || product.nimi === "") {
      toast.error("Tühja nimega ei saa toodet lisada!");
      setSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      toast.success("Uus toode lisatud: " + product.nimi);
      setSonum("Uus toode lisatud: " + product.nimi);
      autodFailist.push(product);
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
      <div>Ajutine väljanäitamine: {JSON.stringify(product)}</div>
      <label>Toote nimi</label> <br />
      <input onChange={(e) => setProduct({... product, nimi: e.target.value})} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input onChange={(e) => setProduct({... product, hind: Number(e.target.value)})} type="number" /> <br />
      <label>Toote aktiivne</label> <br />
      <input onChange={(e) => setProduct({... product, aktiivne: e.target.checked})} type="checkbox" /> <br />
      <label>Toote pilt</label> <br />
      <input onChange={(e) => setProduct({... product, pilt: e.target.value})} type="text" /> <br />
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