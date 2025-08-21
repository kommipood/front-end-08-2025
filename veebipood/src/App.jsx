import './App.css'
import { Route, Routes} from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import Esindused from './pages/Esindused'
import Kalkulaator from './pages/Kalkulaator'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

function App() {
  
  return (
    <>
      <Menu />


      <Routes>
        <Route path="/" element={ <Avaleht/> } />
        <Route path="/ostukorv" element={<Ostukorv/>} />
        <Route path="/lisa-toode" element={<LisaToode/>} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart/>} />
        <Route path="/seaded" element={<Seaded/>} />
        <Route path="/esindused" element={<Esindused/>} />
        <Route path="/kalkulaator" element={<Kalkulaator/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
