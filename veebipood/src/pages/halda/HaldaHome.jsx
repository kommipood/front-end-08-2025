import React from 'react'
import { NavLink } from "react-router-dom"

function HaldaHome() {
  return (
    <div>
        <NavLink to="/halda-autod" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Halda autosid</button>
        </NavLink>

        <NavLink to="/halda-esindused" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Halda esindusi</button>
        </NavLink>

        <NavLink to="/halda-hinnad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Halda hindu</button>
        </NavLink>

        <NavLink to="/halda-kasutajad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Halda kasutajaid</button>
        </NavLink>

        <NavLink to="/halda-tootajad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Halda töötajaid</button>
        </NavLink>

        <NavLink to="/halda-tooted" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"} >
            <button>Halda tooteid</button>
        </NavLink>
    </div>
  )
}

export default HaldaHome