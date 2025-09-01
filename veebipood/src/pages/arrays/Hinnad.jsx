import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Hinnad() {
    const [hinnad, setHinnad] = useState([41, 34, 56, 234, 278, 24, 67, 89, 4, 3456, 1234, 8760, 567, 987]);

  function reset() {
    setHinnad([41, 34, 56, 234, 278, 24, 67, 89, 4, 3456, 1234, 8760, 567, 987]);
  }

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b);
    setHinnad(hinnad.slice());
  }

  function sorteeriKahanevalt() {
    hinnad.sort((a, b) => b - a);
    setHinnad(hinnad.slice());
  }

  function filtreeriVaiksemadKui1000() {
    const vastus = hinnad.filter(hind => hind < 1000);
    setHinnad(vastus);
  }

  function filtreeriSuuremadKui100() {
    const vastus = hinnad.filter(hind => hind > 100);
    setHinnad(vastus);
  }

  return (
    <div>
        <ArraysHome></ArraysHome>
        <button onClick={reset}>Reset</button>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={filtreeriVaiksemadKui1000}>Filtreeri väiksemad kui 1000</button>
        <button onClick={filtreeriSuuremadKui100}>Filtreeri suuremad kui 100</button>
        {hinnad.map((hind, index) => <div key={index}>{hind}</div>)}
        {/* {hinnad.map(hind => <div key={key=hind}>{hind}</div>)} */}
        {/* index'ga kui sama väärtust kordub */}
    </div>
  )
}

export default Hinnad