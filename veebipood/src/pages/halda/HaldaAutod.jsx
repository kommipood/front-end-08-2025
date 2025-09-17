import  { useState } from 'react'
import HaldaHome from './HaldaHome'
import autodFailist from "../../data/autod.json"
import { useRef } from 'react';

function HaldaAutod() {
  const [autod, setAutod] = useState(autodFailist);
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();

  function sisesta() {
    const uusAuto = {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value), 
        "aktiivne": aktiivneRef.current.checked, 
        "pilt": piltRef.current.value
    }
    autodFailist.push(uusAuto);
    setAutod(autodFailist.slice());
  }
//Teine võimalus:
//   autodFailist.push({
//         "nimi": nimiRef.current.value,
//         "hind": hindRef.current.value, 
//         "aktiivne": aktiivneRef.current.checked, 
//         "pilt": piltRef.current.value
//     });
//     setAutod(autodFailist.slice());

  function kustuta(index) {
    autodFailist.splice(index,1);
    setAutod(autodFailist.slice());
  }

  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Autosid kokku: {autod.length} tk</div>

        <label>Nimi</label> <br></br>
        <input ref={nimiRef} type="text"></input> <br></br>
        <label>Hind</label> <br></br>
        <input ref={hindRef} type="number"></input> <br></br>
        <label>Aktiivne</label> <br></br>
        <input ref={aktiivneRef}  type="checkbox"></input> <br></br>
        <label>Pilt</label> <br></br>
        <input ref={piltRef}  type="text"></input> <br></br>
        <button onClick={sisesta}>Sisesta</button>

         <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Auto nimi</th>
                    <th>Auto hind</th>
                    <th>Auto pilt</th>
                    <th>Auto aktiivne</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {autod.map((auto, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{auto.nimi}</td>
                        <td>{auto.hind}</td>
                        <td>{auto.pilt}</td>
                        <td>{auto.aktiivne === true ? "Aktiivne" : "Mitteaktiivne"}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

          // {autod.map(auto =>
          // <div key={auto}>
          //   <div>{auto.nimi}</div>
          //   <div>{auto.hind}</div>
          //   <div>{auto.pilt}</div>
          //   <div>{auto.aktiivne}</div>
          // </div> )}

export default HaldaAutod