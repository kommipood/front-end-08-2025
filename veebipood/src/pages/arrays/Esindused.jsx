import { useState } from "react";
import ArraysHome from "./ArraysHome";

function Esindused() {
  const [linn, setLinn] = useState("tallinn");
  const [keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  function sorteeriAZ() {
    keskused.sort((a, b) => a.localeCompare(b));
    setKeskused(keskused.slice());

  }

  function sorteeriZA() {
    keskused.sort((a, b) => b.localeCompare(a));
    setKeskused(keskused.slice());

  }

  return (
    <div>
      <ArraysHome></ArraysHome>
      {/* <div>Aktiivne linn on: {linn}</div> */}
      <button className={linn === "tallinn" ? "linn-aktiivne" :  undefined} onClick={() => setLinn("tallinn")}>Tallinn (6)</button>
      <button className={linn === "tartu" ? "linn-aktiivne" :  undefined} onClick={() => setLinn("tartu")}>Tartu (2)</button>
      <button className={linn === "narva" ? "linn-aktiivne" :  undefined} onClick={() => setLinn("narva")}>Narva (1)</button>
      <button className={linn === "pärnu" ? "linn-aktiivne" :  undefined} onClick={() => setLinn("pärnu")}>Pärnu (1)</button>

      {linn === "tallinn" &&
      <>
        <br></br>
        <div>Esindusi kokku: {keskused.length} tk</div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri A-Z</button>

      {/* <div>Ülemiste</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div> */}
      {/* teeb sama, mis ülemine kommentaar */}
      {keskused.map(keskus => <div key={keskus}>{keskus}</div>)} 
      </>}
      

      {linn === "tartu" && <div>Lõunakeskus</div>}
      {linn === "tartu" && <div>Raatuse</div>}

      {linn === "narva" && <div>Fama</div>}

      {linn === "pärnu" && <div>Port Artur 2</div>}


    </div>
  )
}

export default Esindused