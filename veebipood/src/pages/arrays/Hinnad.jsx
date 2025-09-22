import { useState } from "react"
import ArraysHome from "./ArraysHome"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react";
import {Link} from "react-router-dom"

function Hinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist);
    const otsingRef = useRef();

  function reset() {
    setHinnad(hinnadFailist);
  }

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a.hind - b.hind);
    setHinnad(hinnad.slice());
  }

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b.hind - a.hind);
    setHinnad(hinnad.slice());
  }

  function filtreeriVaiksemadKui1000() {
    const vastus = hinnad.filter(hind => hind.hind < 1000);
    setHinnad(vastus);
  }

  function filtreeriSuuremadKui100() {
    const vastus = hinnad.filter(hind => hind.hind > 100);
    setHinnad(vastus);
  }

  function arvutaHinnadKokku() {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.hind);
    return summa;
  }

  function otsi() {
    const vastus = hinnadFailist.filter(hind => hind.sonana.includes(otsingRef.current.value));
    setHinnad(vastus);
  }

  return (
    <div>
        <ArraysHome></ArraysHome>
        <button onClick={reset}>Reset</button><br></br>

        <input ref={otsingRef} onChange={otsi} type="text"></input><br></br>

        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={filtreeriVaiksemadKui1000}>Filtreeri väiksemad kui 1000</button>
        <button onClick={filtreeriSuuremadKui100}>Filtreeri suuremad kui 100</button>
        {hinnad.map((hind, index) =>
          <div key={index}>
            {hind.hind}
            <Link to={"/hind/" + index}>
              <button>Vt lähemalt</button>
            </Link>
          </div>
        )}
        {/* {hinnad.map(hind => <div key={key=hind}>{hind}</div>)} */}
        {/* index'ga kui sama väärtust kordub */}
        <div>Hinnad kokku: {arvutaHinnadKokku()} €</div>
    </div>
  )
}

export default Hinnad