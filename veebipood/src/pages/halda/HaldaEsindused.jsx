import React, { useState } from 'react'
import HaldaHome from './HaldaHome'

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  function kustuta(index) {
    keskused.splice(index,1);
    setKeskused(keskused.slice());
  }

  return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Esindusi kokku: {keskused.length} tk</div>
        <table>
            <thead></thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Hind</th>
                    <th>Kustuta</th>
                </tr>
            <tbody>
                {keskused.map((hind, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{hind}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaEsindused