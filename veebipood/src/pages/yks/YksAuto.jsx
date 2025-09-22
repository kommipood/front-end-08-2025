import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
    const { name } = useParams();
    const leitud = autodFailist.find(auto => auto.nimi === name);

    if (leitud === undefined) {
        return <div>Autot ei leitud</div>
    }

  return (
    <div>
        <div>{leitud.nimi}</div>
        <div>{leitud.hind}</div>
        <div>{leitud.pilt}</div>
        <div>{leitud.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</div>
    </div>
  )
}

export default YksAuto