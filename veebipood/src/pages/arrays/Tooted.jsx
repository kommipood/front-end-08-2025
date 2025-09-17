import { useState } from "react"
import ArraysHome from "./ArraysHome"
import tootedFailist from "../../data/tooted.json"
import { useRef } from "react";

function Tooted() {
  const [tooted, setTooted] = useState(tootedFailist);
  const otsingRef = useRef();

  function reset() {
      setTooted(tootedFailist);
    }

  function sorteeriAZ() {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi)); 
    setTooted(tooted.slice()); 
  }

  function sorteeriZA() {
    tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setTooted(tooted.slice());
  }

  function tahedKasvavalt() {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    setTooted(tooted.slice());
  }

  function tahedKahanevalt() {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    setTooted(tooted.slice());
  }

  function teineTahtAZ() {
    tooted.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    setTooted(tooted.slice());
  }

  function filtreeri6Tahelised() {
    const vastus = tooted.filter(toode => toode.nimi.length === 6);
    setTooted(vastus);
  }

  function filtreeriVahemKui6Tahelised() {
    const vastus = tooted.filter(toode => toode.nimi.length < 6);
    setTooted(vastus);
  }

  function filtreeriAgaLoppevad() {
    const vastus = tooted.filter(toode => toode.nimi.endsWith("a"));
    setTooted(vastus);
  }

  function filtreeriYgaLoppevad() {
    const vastus = tooted.filter(toode => toode.nimi.endsWith("y"));
    setTooted(vastus);
  }

  function filtreeriPaarisarv() {
    const vastus = tooted.filter(toode => toode.nimi.length % 2 === 0);
    setTooted(vastus);
  }

  function arvutaHindKokku() {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  function otsi() {
    const vastus = tootedFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
    setTooted(vastus);
  }

//Kuva välja tooted: Coca, Fanta, Sprite, Vichy, Red Bull, Aura, Monster Energy, Põltsamaa, 7UP, Pepsi

//Sorteeri
//1. A-Z
//2. Z-A
//3. Tähed kasvavalt
//4. Tähed kahanevalt
//5. Teine täht A-Z

//kuni 6 tähelised
//täpselt 6 tähelised
//a-ga lõppevad
//y-ga lõppevad
//paaristähti arv sisalduvaid

//kogus
//reset

  return (
    <div>
        <ArraysHome></ArraysHome>
        <div>Tooteid kokku: {tooted.length} tk</div>
        <button onClick={reset}>Reset</button>
        <br></br>
        <input ref={otsingRef} onChange={otsi} type="text"></input><br></br>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={tahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={tahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={teineTahtAZ}>Sorteeri teine täht A-Z</button>
        <br></br>
        <button onClick={filtreeri6Tahelised}>Jäta alles täpselt 6 tähelised</button>
        <button onClick={filtreeriVahemKui6Tahelised}>Jäta alles vähem kui 6 tähelised</button>
        <button onClick={filtreeriAgaLoppevad}>Jäta alles a-ga lõppevad</button>
        <button onClick={filtreeriYgaLoppevad}>Jäta alles y-ga lõppevad</button>
        <button onClick={filtreeriPaarisarv}>Jäta alles paarisarv tähti sisaldavad</button>
        <br></br>
        {tooted.map(toode =>
        <div key={toode}>
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div>{toode.aktiivne}</div>
          <div>{toode.pilt}</div>
        </div> )}
        <div>Toodete hind kokku: {arvutaHindKokku()} €</div>
    </div>
  )
}

export default Tooted

//1. Objektideks muuta: {"nimi": "Fanta", "hind": 2,5, "aktiivne": true, "pilt": ""}
//2. JSON faili tõsta
//3. kokkuarvutus --> hind
//4. Otsing