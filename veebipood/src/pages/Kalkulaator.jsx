import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import TavaKalkulaator from "../components/TavaKalkulaator"

function Kalkulaator() {
  

  return (
    <div>
      <TavaKalkulaator/>
      <br></br>
      <div>Laenu kalkulaator:</div>
      <LaenuKalkulaator/>
      <br></br>
      <div>Maksimaalne kalkulaator:</div>
      <MaksimaalneKalkulaator/>
    </div>
  )
}

export default Kalkulaator