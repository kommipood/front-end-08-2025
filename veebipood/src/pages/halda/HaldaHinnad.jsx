import { useState } from 'react'
import HaldaHome from './HaldaHome'
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from 'react';

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist);
    const hindRef = useRef();
    const sonanaRef = useRef();
    
    function lisa() {
        hinnadFailist.push({
            hind: hindRef.current.value,
            sonana: sonanaRef.current.value
        });
        setHinnad(hinnadFailist.slice());
    }


    function kustuta(index) {
        hinnadFailist.splice(index,1);
        setHinnad(hinnadFailist.slice());
    }
 
    return (
    <div>
        <HaldaHome></HaldaHome>
        <div>Hindu kokku: {hinnad.length} tk</div>

        <label>Hind</label><br></br>
        <input ref={hindRef} type="text"></input><br></br>
        <label>Sõnana</label><br></br>
        <input ref={sonanaRef} type="text"></input><br></br>
        <button onClick={lisa}>Sisesta</button>

        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Hind</th>
                    <th>Sõnana</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{hind.hind}</td>
                        <td>{hind.sonana}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad