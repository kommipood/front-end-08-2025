import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 4x Indrekuga
// 5. 12.08 - Reacti algus - navigeerimine
// 6. 14.08 - useState
// 7. 21.08 - dünaamiline CSS, alamkomponendid
// 8. T 26.08 - useState
// 9. R 29.08 - server, kujundus, toastify, arrays
//10. E 01.09 - sort, filter
//11. N 04.09 - tabelid, kustutamine
//12. E 08.09 - Webshop - ENG pood
//13. E 15.09 - lisamine, otsing, kokkuarvutus
//14. K 17.09 - darkmode, tõlge, localStorage
//15. E 22.09 - useParams, API
//16. E 29.09 - Firebase, andmebaasid
//17. K 01.10 - andmebaasid
//18. K 08.10 - lõpuprojekti esitlemine
