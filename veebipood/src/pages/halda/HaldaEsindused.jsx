import { useState } from 'react'
import HaldaHome from './HaldaHome'
import esindusedFailist from "../../data/esindused.json"
import { useRef } from 'react';
import {Link} from "react-router-dom"

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(esindusedFailist);
  const nimiRef = useRef();
  const telRef = useRef();
  const aadressRef = useRef();

  function lisa() {
    esindusedFailist.push({
        nimi: nimiRef.current.value,
        tel: telRef.current.value,
        aadress: aadressRef.current.value
    })
    setKeskused(esindusedFailist.slice());
  }


  function kustuta(index) {
    esindusedFailist.splice(index,1);
    setKeskused(esindusedFailist.slice());
  }

  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Esindusi kokku: {keskused.length} tk</div>

        <label>Nimi</label><br></br>
        <input ref={nimiRef} type="text"></input><br></br>
        <label>Telefon</label><br></br>
        <input ref={telRef} type="text"></input><br></br>
        <label>Aadress</label><br></br>
        <input ref={aadressRef} type="text"></input><br></br>
        <button onClick={lisa}>Sisesta</button>

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Keskuse nimi</th>
                    <th>Keskuse telefon</th>
                    <th>Keskuse aadress</th>
                    <th>Kustuta</th>
                    <th>Muuda</th>
                </tr>
            </thead>
            <tbody>
                {keskused.map((keskus, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{keskus.nimi}</td>
                        <td>{keskus.tel}</td>
                        <td>{keskus.aadress}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                        <td>
                          <Link to={"/muuda-esindus/" + index}>
                            <button>Muuda</button>
                          </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused