import {useParams} from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  const {shop} = useParams();
  const leitud = esindusedFailist.find(esindus => esindus.nimi === shop);

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.tel}</div>
      <div>{leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus