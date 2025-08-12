import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// 1. npm i react-router-dom ---> vajalikud koodijupid lähevad node_modules
// 2. pean react-router-dom seest võtma koodi BrowserRouter osas ja selle importida
// 3. pean oma rakenduse <App /> ümbritsema BrowserRouteriga
// 4. pean tegema URL ja failide vahelisi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
