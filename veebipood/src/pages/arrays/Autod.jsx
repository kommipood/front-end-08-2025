import { useState } from "react"
import ArraysHome from "./ArraysHome"

function Autod() {
    const [autod, setAutod] = useState(["BMW", "Audi", "Volvo", "Saab"]);

  return (
    <div>
        <ArraysHome></ArraysHome>
        {autod.map(auto => <div key={auto}>{auto}</div> )}
    </div>
  )
}

export default Autod