import React from 'react'
import { useState } from 'react'

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti!");
  const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);

  function addProduct() {
    setMessage("Arvuti lisatud");
    uuendaN2itaNuppu(false);
  }

  return (
    <div>
      <div>{message}</div>
      <label>Mark</label> <br></br>
      <input type="text"></input> <br></br>
      <label>Mudel</label> <br></br>
      <input type="text"></input> <br></br>
      <label>Maksumus</label> <br></br>
      <input type="number"></input> <br></br>
      { n2itaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button>}
    </div>
  )
}

export default LisaArvuti