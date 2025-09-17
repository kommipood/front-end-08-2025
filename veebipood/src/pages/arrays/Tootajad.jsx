import { useState } from "react"
import ArraysHome from "./ArraysHome"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react";

//["Kalle Karu", "Tiina Komm", "Rebekka Seep", "Mariliis Tammaru", "Anu Mardisalu", "Mart Jõeorg", "Ly Lepik", "Veikko Järve", "Saima Toompuu", "Kristofer Columbus"]

function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist);
  const otsingRef = useRef();

  function reset() {
      setTootajad(tootajadFailist);
    }

  function sorteeriAZ() {
    tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi)); 
    setTootajad(tootajad.slice()); 
  }

  function sorteeriZA() {
    tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setTootajad(tootajad.slice());
  }

  function tahedKasvavalt() {
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
    setTootajad(tootajad.slice());
  }

  function tahedKahanevalt() {
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    setTootajad(tootajad.slice());
  }

  function teineTahtAZ() {
    tootajad.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    setTootajad(tootajad.slice());
  }

  function sonadeArv() {
    tootajad.sort((a, b) => a.nimi.split(" ").length - b.nimi.split(" ").length);
    setTootajad(tootajad.slice());
  }

  function filtreeri3Tahelised() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.length === 3);
    setTootajad(vastus);
  }

  function filtreeriRohkemKui5Tahelised() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.length > 5);
    setTootajad(vastus);
  }

  function filtreeriAiSisaldavad() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.includes("ai"));
    setTootajad(vastus);
  }

  function filtreeriNeljasTahtI() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi[3] === "i");
    setTootajad(vastus);
  }

  function filtreeriMgaAlgavad() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.startsWith("M"));
    setTootajad(vastus);
  }

  function filtreeriPaarisarv() {
    const vastus = tootajad.filter(tootaja => tootaja.nimi.length % 2 === 0);
    setTootajad(vastus);
  }

  function arvutaVanusKokku() {
    let summa = 0;
    tootajad.forEach(tootaja => summa = summa + tootaja.vanus);
    return summa;
  }

  function otsi() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes(otsingRef.current.value));
    setTootajad(vastus);
  }


//Kuva välja 10 nime --> küsi chatGPT käest nimesid

//Sorteeri
//1. A-Z
//2. Z-A
//3. Tähed kasvavalt
//4. Tähed kahanevalt
//5. Teine täht A-Z
//6. Sorteeri sõnad arvu järgi

//Filtreeri
//1. Täpselt 3 tähelised
//2. Rohkem kui 5 tähelised
//3. "ai" lühendit sisaldavad
//4. Kellel on neljas täht "i"
//5. "M" tähega algavad
//5. Paarisarv tähti

//kogus: meil on xx töötajat
//reset: kustuta filtrid nupp



  return (
    <div>
        <ArraysHome></ArraysHome>
        <div>Töötajaid kokku: {tootajad.length} tk</div>
        <button onClick={reset}>Reset</button><br></br>
        <input ref={otsingRef} onChange={otsi} type="text"></input><br></br>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={tahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={tahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={teineTahtAZ}>Sorteeri tähed kahanevalt</button>
        <button onClick={sonadeArv}>Sorteeri sõnad arvu järgi</button>
        <br></br>
        <button onClick={filtreeri3Tahelised}>Jäta alles täpselt 3 tähelised</button>
        <button onClick={filtreeriRohkemKui5Tahelised}>Jäta alles rohkem kui 5 tähelised</button>
        <button onClick={filtreeriAiSisaldavad}>Jäta alles ai sisaldavad</button>
        <button onClick={filtreeriNeljasTahtI}>Jäta alles kellel neljas täht on i</button>
        <button onClick={filtreeriMgaAlgavad}>Jäta alles M-ga algavad</button>
        <button onClick={filtreeriPaarisarv}>Jäta alles paarisarv tähti sisaldavad</button>
        <br></br>
        {tootajad.map(tootaja => 
        <div key={tootaja}>
          <div>{tootaja.nimi}</div>
          <div>{tootaja.vanus}</div>
          <div>{tootaja.ametikoht}</div>
        </div> )}
        <div>Töötajate vanus kokku: {arvutaVanusKokku()} aastat</div>

    </div>
  )
}

export default Tootajad

//1. Objektideks muuta: {"nimi": "Mart", "vanus": 23, "ametikoht": "juht"}
//2. JSON faili tõsta
//3. kokkuarvutus --> nimede tähed või sünniaasta
//4. Otsing