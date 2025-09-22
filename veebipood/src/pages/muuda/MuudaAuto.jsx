import {useParams, useNavigate} from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";

function MuudaAuto() {
  const {index} = useParams();
  const leitud = autodFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const suuna = useNavigate();

  function muuda() {
    if (nimiRef.current.value === "") {
      alert("Tühja nimega ei saa sisestada");
      return;
    }

    autodFailist[index] = {
      "nimi": nimiRef.current.value,
      "hind": hindRef.current.value,
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.value
    }

    
    suuna("/halda-autod");
  }

  if (leitud === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <label>Nimi</label><br></br>
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text"></input><br></br>
      <label>Hind</label><br></br>
      <input ref={hindRef} defaultValue={leitud.hind} type="text"></input><br></br>
      <label>Pilt</label><br></br>
      <input ref={piltRef} defaultValue={leitud.pilt} type="text"></input><br></br>
      <label>Aktiivne</label><br></br>
      <input ref={aktiivneRef} defaultValue={leitud.aktiivne} type="text"></input><br></br>
      {/* EI SAA TEHA SEST VAJAB DÜNAAMIKAT <Link to="/halda-autod"> */}
        <button onClick={muuda}>Muuda</button>
      {/* </Link> */}
    </div>
  )
}

export default MuudaAuto