import { useState } from "react";

function Seaded() {
  const [keel, setKeel] = useState("et");

  return (
    <div>
      {/* <div>Hetkel aktiivne keel on: {keel}</div> */}
      <button onClick={() => setKeel("et")}>Eesti</button>
      <button onClick={() => setKeel("en")}>Inglise</button>
      <button onClick={() => setKeel("es")}>Hispaania</button>
      <button onClick={() => setKeel("ru")}>Vene</button>

      <br /><br />

      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La pagina esta en espanol</div>}
      {keel === "ru" && <div>Pycckij</div>}
      {keel !== "et" && <i>Muud tõlked peale eesti ei ole veel valmis</i>}

    </div>
  )
}

export default Seaded