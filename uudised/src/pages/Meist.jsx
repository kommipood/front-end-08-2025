import React from 'react'
import { useState } from 'react'

function Meist() {
    const [kontakt, n2itakontakti] = useState("");

  return (
    <div>
        <div>See on meist leht</div>
        <div>Meie töötajad:</div>
        <br></br>
        <div>Arvo Pärt</div>
        <div>Uudisklippide taustamuusika</div>
        <button onClick={() => n2itakontakti("+31312312")}>Võta ühendust</button>
        <br></br><br></br>
        <div>Kelly Sildaru</div>
        <div>Püstolreporter</div>
        <button onClick={() => n2itakontakti("+313124123")}>Võta ühendust</button>
        <br></br><br></br>
        <div>Edward von Lõngus</div>
        <div>Uudiste kujundamine</div>
        <button onClick={() => n2itakontakti("+3131231231")}>Võta ühendust</button>
        <br></br><br></br>
        <div>Kerli Kõiv</div>
        <div>Välisturgude spetsialist</div>
        <button onClick={() => n2itakontakti("+312312312")}>Võta ühendust</button>
        <br></br><br></br>
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  )
}

export default Meist