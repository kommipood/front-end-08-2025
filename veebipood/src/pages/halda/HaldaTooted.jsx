import { useState } from "react";
import tootedFailist from "../../data/tooted.json"
import HaldaHome from './HaldaHome'
import { useRef } from "react";

//Võtta failist, kustutada, tabelis näidata, lisada

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
    
  function lisa() {
    tootedFailist.push({
    nimi: nimiRef.current.value,
    hind: Number(hindRef.current.value),
    aktiivne: aktiivneRef.current.checked,
    pilt: piltRef.current.value
    });
    setTooted(tootedFailist.slice());
    }

  function kustuta(index) {
    tootedFailist.splice(index,1);
    setTooted(tootedFailist.slice());
  }

  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Tooteid kokku: {tooted.length} tk</div>

        <label>Nimi</label><br></br>
        <input ref={nimiRef} type="text"></input><br></br>
        <label>Hind</label><br></br>
        <input ref={hindRef} type="number"></input><br></br>
        <label>Aktiivne</label><br></br>
        <input ref={aktiivneRef} type="checkbox"></input><br></br>
        <label>Pilt</label><br></br>
        <input ref={piltRef} type="text"></input><br></br>
        <button onClick={lisa}>Sisesta</button>

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Nimi</th>
                    <th>Hind</th>
                    <th>Aktiivne</th>
                    <th>Pilt</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tooted.map((toode, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{toode.nimi}</td>
                        <td>{toode.hind}</td>
                        <td>{toode.aktiivne === true ? "Aktiivne" : "Mitteaktiivne"}</td>
                        <td>{toode.pilt}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted