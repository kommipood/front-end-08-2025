import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function lisa() {
    if (emailRef.current.value === "") {
      toast.error("Midagi peab sisestama!");
      return; // katkesta funktsioon, kui siia if-i sisse jõuab
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Ei saa emaili ilma @ märgita lisada!");
      return;
    }

    if (emailRef.current.value.length < 5) {
      toast.error("Email liiga lühike!");
      return;
    }

    toast.success("Email lisatud!");
  }


  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" :  undefined} onClick={() => setSumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-aktiivne" :  undefined} onClick={() => setSumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-aktiivne" :  undefined} onClick={() => setSumma(100)}>100 €</button>
      <div>Kinkekaart {summa} €</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br></br>

      <label>E-mail</label><br></br>
      <input ref={emailRef} type="text" /><br></br>
      <button onClick={lisa}>Lisa</button>
      <ToastContainer 
        position="top-center"
        autoClose={4000}
        theme="light"
      />
    </div>
  )
}

export default Kinkekaart