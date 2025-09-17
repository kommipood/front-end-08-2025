import { useState } from "react"
import ArraysHome from "./ArraysHome"
import autodFailist from "../../data/autod.json"
import ostukorv from "../../data/ostukorv.json"
import { useRef } from "react";

function Autod() {
    const [autod, setAutod] = useState(autodFailist);
    const otsingRef = useRef();

  function reset() {
    setAutod(autodFailist);
  }

  function sorteeriAZ() {
    autod.sort((a, b) => a.nimi.localeCompare(b.nimi)); //tähtede võrdlus
    setAutod(autod.slice()); //<-- uuendan HTMLi
    // .slice() ---> kui iseennast uuendan iseenda kaudu. Elementi arra sees.
  }

  function sorteeriZA() {
    autod.sort((a, b) => b.nimi.localeCompare(a.nimi)); //tähtede võrdlus
    setAutod(autod.slice());
  }

  function tahedKasvavalt() {
    autod.sort((a, b) => a.nimi.length - b.nimi.length);
    setAutod(autod.slice());
  }

  function tahedKahanevalt() {
    autod.sort((a, b) => b.nimi.length - a.nimi.length);
    setAutod(autod.slice());
  }

  function kolmasTahtAZ() {
    autod.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
    //autod.sort((a, b) => a.at(2).localeCompare(b.at(2)));
    //autod.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
    setAutod(autod.slice());
  }

  function sorteeriSonadeArv() {
    autod.sort((a, b) => a.nimi.split(" ").length - b.nimi.split(" ").length);
    setAutod(autod.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = autod.filter(auto => auto.nimi.endsWith("i"));
    setAutod(vastus);
  }

  function filtreeriErSisaldavad() {
    const vastus = autod.filter(auto => auto.nimi.includes("er"));
    setAutod(vastus);
  }

  function filtreeri7Tahelised() {
    const vastus = autod.filter(auto => auto.nimi.length === 7);
    setAutod(vastus);
  }

  function filtreeriRohkemKui6Tahelised() {
    const vastus = autod.filter(auto => auto.nimi.length > 6);
    setAutod(vastus);
  }

  function filtreeriTeineTahtO() {
    const vastus = autod.filter(auto => auto.nimi[1] === "o");
    setAutod(vastus);
  }

  function kaheSonalisedAutod() {
    const vastus = autod.filter(auto => auto.nimi.includes(" "));
    //const vastus = autod.filter(auto => auto.nimi.split(" ") > 1);
    setAutod(vastus);
  }

  function lisaOstukorvi(toode) {
    ostukorv.push(toode);
  }

  function arvutaHinnadKokku() {
    let summa = 0;
    autod.forEach(auto => summa = summa + auto.hind);
    return summa;
  }

  function otsi() {
    const vastus = autodFailist.filter(auto => auto.nimi.includes(otsingRef.current.value));
    setAutod(vastus);
  }

  return (
    <div>
        <ArraysHome></ArraysHome>
        <div>Autosid kokku: {autod.length} tk</div>
        <button onClick={reset}>Reset</button>
        <br></br>
        <input ref={otsingRef} onChange={otsi} type="text"></input>
        <br></br>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={tahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={tahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={kolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <button onClick={sorteeriSonadeArv}>Sorteeri sõnade arvu kasv</button>
        <br></br>
        <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga lõppevad</button>
        <button onClick={filtreeriErSisaldavad}>Jäta alles er sisaldavad</button>
        <button onClick={filtreeri7Tahelised}>Jäta alles täpselt 7 tähelised</button>
        <button onClick={filtreeriRohkemKui6Tahelised}>Jäta alles rohkem kui 6 tähelised</button>
        <button onClick={filtreeriTeineTahtO}>Jäta alles kellel teine täht on o</button>
        <button onClick={kaheSonalisedAutod}>Jäta alles kahe sõnalised autod</button>
        <br></br>
        {autod.map(auto =>
          <div key={auto}>
            <div>{auto.nimi}</div>
            <div>{auto.hind}</div>
            <div>{auto.pilt}</div>
            <div>{auto.aktiivne}</div>
            <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
          </div> )}
        
        <div>Hinnad kokku: {arvutaHinnadKokku()} €</div>
    </div>
  )
}

export default Autod