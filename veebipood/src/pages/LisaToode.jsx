import { useState } from "react";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode!");

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={() => setSonum("Uus toode sisestatud!")}>Sisesta</button> <br />


    </div>
  )
}

export default LisaToode