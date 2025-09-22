import {useParams, useNavigate} from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import {useState} from "react"

function MuudaEsindus() {
  const {index} = useParams();
  const [leitud, setEsindus] = useState(esindusedFailist[index]);
  const suuna = useNavigate();

  function muuda() {
    if (leitud.nimi === "") {
      alert("Tühja nimega ei saa sisestada");
      return;
    }

    esindusedFailist[index] = leitud;
    suuna("/halda-esindused");
  }

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }
  return (
    <div>
      <label>Nimi</label><br></br>
      <input onChange={(e) => setEsindus({...leitud, nimi: e.target.value})} defaultValue={leitud.nimi} type="text"></input><br></br>
      <label>Telefon</label><br></br>
      <input onChange={(e) => setEsindus({...leitud, tel: e.target.value})} defaultValue={leitud.tel} type="text"></input><br></br>
      <label>Aadress</label><br></br>
      <input onChange={(e) => setEsindus({...leitud, aadress: e.target.value})} defaultValue={leitud.aadress} type="text"></input><br></br>
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus