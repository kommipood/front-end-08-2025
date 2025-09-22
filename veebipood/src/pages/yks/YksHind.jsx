import {useParams} from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const {index} = useParams();
  const leitud = hinnadFailist[index];
  //const leitud = hinnadFailist[index]; --> järjekorra numbriga võtan nii

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }


  return (
    <div>
      <div>{leitud.hind}</div>
      <div>{leitud.sonana}</div>
    </div>
  )
}

export default YksHind