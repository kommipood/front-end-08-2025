import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
      <Link to="/">
        <img className="pilt" src="https://images.ctfassets.net/cnu0m8re1exe/EWn3yuPmZjB3RGjhb7R2k/9444420584c8300c0c87f635d210d833/Meer-cat.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Osta kinkekaart</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>

      <Link to="/arrays">
        <button>Arrays</button>
      </Link>
    </div>
  )
}

export default Menu