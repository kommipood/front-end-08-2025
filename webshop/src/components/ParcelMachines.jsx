import { useEffect } from "react";
import { useState } from "react"


function ParcelMachines() {
    const [ParcelMachines, setParcelMachines] = useState([]);

    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
            .then(res => res.json())
            .then(json => setParcelMachines(json.filter(pm => pm.A0_NAME === "EE")))
    }, []);


  return (
    <div>
        <select>
            {ParcelMachines.map(pm =>
            <option key={pm.NAME}>{pm.NAME}</option>
            )}
        </select>
    </div>
  )
}

export default ParcelMachines