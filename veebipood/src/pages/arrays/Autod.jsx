import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Autod() {
    const [autod, setAutod] = useState(["BMW", "Audi", "Mercedes", "Volvo", "Saab", "Lamborghini", "Ferrari", "Toyota", "Hyundai", "Ford"]);

  function reset() {
    setAutod(["BMW", "Audi", "Mercedes", "Volvo", "Saab", "Lamborghini", "Ferrari", "Toyota", "Hyundai", "Ford"]);
  }

  function sorteeriAZ() {
    autod.sort((a, b) => a.localeCompare(b)); //tähtede võrdlus
    setAutod(autod.slice()); //<-- uuendan HTMLi
    // .slice() ---> kui iseennast uuendan iseenda kaudu. Elementi arra sees.
  }

  function sorteeriZA() {
    autod.sort((a, b) => b.localeCompare(a)); //tähtede võrdlus
    setAutod(autod.slice());
  }

  function tahedKasvavalt() {
    autod.sort((a, b) => a.length - b.length);
    setAutod(autod.slice());
  }

  function tahedKahanevalt() {
    autod.sort((a, b) => b.length - a.length);
    setAutod(autod.slice());
  }

  function kolmasTahtAZ() {
    autod.sort((a, b) => a[2].localeCompare(b[2]));
    //autod.sort((a, b) => a.at(2).localeCompare(b.at(2)));
    //autod.sort((a, b) => a.charAt(2).localeCompare(b.charAt(2)));
    setAutod(autod.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = autod.filter(auto => auto.endsWith("i"));
    setAutod(vastus);
  }

  function filtreeriErSisaldavad() {
    const vastus = autod.filter(auto => auto.includes("er"));
    setAutod(vastus);
  }

  function filtreeri7Tahelised() {
    const vastus = autod.filter(auto => auto.length === 7);
    setAutod(vastus);
  }

  function filtreeriRohkemKui6Tahelised() {
    const vastus = autod.filter(auto => auto.length > 6);
    setAutod(vastus);
  }

  function filtreeriTeineTahtO() {
    const vastus = autod.filter(auto => auto[1] === "o");
    setAutod(vastus);
  }

  return (
    <div>
        <ArraysHome></ArraysHome>
        <div>Autosid kokku: {autod.length} tk</div>
        <button onClick={reset}>Reset</button>
        <br></br>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={tahedKasvavalt}>Sorteeri tähed kasvavalt</button>
        <button onClick={tahedKahanevalt}>Sorteeri tähed kahanevalt</button>
        <button onClick={kolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
        <br></br>
        <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga lõppevad</button>
        <button onClick={filtreeriErSisaldavad}>Jäta alles er sisaldavad</button>
        <button onClick={filtreeri7Tahelised}>Jäta alles täpselt 7 tähelised</button>
        <button onClick={filtreeriRohkemKui6Tahelised}>Jäta alles rohkem kui 6 tähelised</button>
        <button onClick={filtreeriTeineTahtO}>Jäta alles kellel teine täht on o</button>
        <br></br>
        {autod.map(auto => <div key={auto}>{auto}</div> )}
    </div>
  )
}

export default Autod