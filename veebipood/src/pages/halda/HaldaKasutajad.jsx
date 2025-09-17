
import { useState } from 'react';
import HaldaHome from './HaldaHome'
import kasutajadFailist from "../../data/kasutajad.json"

function HaldaKasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist);

  function kustuta(index) {
    kasutajadFailist.splice(index,1);
    setKasutajad(kasutajadFailist.slice());
  }


  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Kasutajaid kokku: {kasutajad.length} tk</div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Kasutajanimi</th>
                    <th>Registreerimise aasta</th>
                    <th>Postituste arv</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {kasutajad.map((kasutaja, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{kasutaja.kasutajanimi}</td>
                        <td>{kasutaja.aasta}</td>
                        <td>{kasutaja.postitusi}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaKasutajad