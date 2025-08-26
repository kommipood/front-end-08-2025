import { useRef } from "react";
import { useState } from "react";

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function lisa() {
    if (emailRef.current.value === "") {
      alert("Midagi peab sisestama!");
      return; // katkesta funktsioon, kui siia if-i sisse jõuab
    }

    if (emailRef.current.value.includes("@") === false) {
      alert("Ei saa emaili ilma @ märgita lisada!");
      return;
    }

    if (emailRef.current.value.length < 5) {
      alert("Email liiga lühike!");
      return;
    }

    alert("Email lisatud!");
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

    </div>
  )
}

export default Kinkekaart