import { useState } from "react"
import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import TavaKalkulaator from "../components/TavaKalkulaator"

function Kalkulaator() {
  const [vaade, setVaade] = useState("tava");
  

  return (
    <div>
      <button className={vaade === "tava" ? "vaade-aktiivne" : "vaade"} onClick={() => setVaade("tava")}>Tavakalkulaator</button>
      <button className={vaade === "laenu" ? "vaade-aktiivne" : "vaade"} onClick={() => setVaade("laenu")}>Laenukalkulaator</button>
      <button className={vaade === "maksimaalne" ? "vaade-aktiivne" : "vaade"} onClick={() => setVaade("maksimaalne")}>Maksimaalne laenu kalkulaator</button>
      {vaade === "tava" && <TavaKalkulaator/>}
      <br></br>
      {vaade === "laenu" && 
        <>
          <div>Laenu kalkulaator:</div>
          <LaenuKalkulaator/>
        </>
      }
      {vaade === "maksimaalne" &&
        <>
          <div>Maksimaalne kalkulaator:</div>
          <MaksimaalneKalkulaator/>
        </>
      }
    </div>
  )
}

export default Kalkulaator