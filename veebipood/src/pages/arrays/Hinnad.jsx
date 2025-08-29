import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Hinnad() {
    const [hinnad, setHinnad] = useState([41, 34, 56, 234, 278, 24, 67, 89, 4]);

  return (
    <div>
        <ArraysHome></ArraysHome>
        {hinnad.map(hind => <div key={hind}>{hind}</div>)}
    </div>
  )
}

export default Hinnad