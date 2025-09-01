import React, { useState } from 'react'
import HaldaHome from './HaldaHome'

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState([41, 34, 56, 234, 278, 24, 67, 89, 4, 3456, 1234, 8760, 567, 987]);
  
    function kustuta(index) {
        hinnad.splice(index,1);
        setHinnad(hinnad.slice());
    }
 
    return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Hindu kokku: {hinnad.length} tk</div>
        <table>
            <thead></thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Hind</th>
                    <th>Kustuta</th>
                </tr>
            <tbody>
                {hinnad.map((hind, index) =>
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

export default HaldaHinnad