import {NavLink} from "react-router-dom"

function ArraysHome() {

  return (
    <div>
        <NavLink to="/autod" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Autod</button>
        </NavLink>

        <NavLink to="/esindused" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Esindused</button>
        </NavLink>

        <NavLink to="/hinnad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Hinnad</button>
        </NavLink>

        <NavLink to="/kasutajad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Kasutajad</button>
        </NavLink>

        <NavLink to="/tootajad" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"}>
            <button>Tootajad</button>
        </NavLink>

        <NavLink to="/tooted" className={({ isActive }) => isActive ? "vaade-aktiivne" : "vaade"} >
            <button>Tooted</button>
        </NavLink>
    </div>
  )
}

export default ArraysHome