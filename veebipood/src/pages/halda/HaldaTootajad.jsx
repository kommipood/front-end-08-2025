import { useState } from "react";
import tootajadFailist from "../../data/tootajad.json"
import HaldaHome from './HaldaHome'
import { useRef } from "react";

//Võtta failist, kustutada, tabelis näidata, lisada

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist);
  const nimiRef = useRef();
  const vanusRef = useRef();
  const ametRef = useRef();
    
  function lisa() {
    tootajadFailist.push({
    nimi: nimiRef.current.value,
    vanus: Number(vanusRef.current.value),
    ametikoht: ametRef.current.value
    });
    setTootajad(tootajadFailist.slice());
    }

  function kustuta(index) {
    tootajadFailist.splice(index,1);
    setTootajad(tootajadFailist.slice());
  }

  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Töötajaid kokku: {tootajad.length} tk</div>

        <label>Nimi</label><br></br>
        <input ref={nimiRef} type="text"></input><br></br>
        <label>Vanus</label><br></br>
        <input ref={vanusRef} type="number"></input><br></br>
        <label>Ametikoht</label><br></br>
        <input ref={ametRef} type="text"></input><br></br>
        <button onClick={lisa}>Sisesta</button>

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Nimi</th>
                    <th>Vanus</th>
                    <th>Ametikoht</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tootajad.map((tootaja, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{tootaja.nimi}</td>
                        <td>{tootaja.vanus}</td>
                        <td>{tootaja.ametikoht}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad