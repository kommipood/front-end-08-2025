import { useState } from "react";
import laigitud from "../assets/laigitud.svg";
import mittelaigitud from "../assets/mittelaigitud.svg";

function Avaleht() {
  const [like, setLike] = useState(false);
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!")

  function nulli() {
    setKogus(0);
    setSonum("Nullitud!");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Vähendatud!");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Suurendatud!");
  }


  return (
    <div>
      {like === true && <img src={laigitud} alt="" />}
      {like === false && <img src={mittelaigitud} alt="" />}
      <button onClick= {() => setLike(!like)}>Vaheta like-i</button>
      <br /><br />

      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht