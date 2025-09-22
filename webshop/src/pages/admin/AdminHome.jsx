import { Link } from "react-router-dom"

function AdminHome() {
  return (
    <div>
        <Link to="/admin/add-product">
            <button>Add product</button>
        </Link>

        <Link to="/admin/manage-products">
            <button>Manage products</button>
        </Link>
        <br></br>
        <Link to="/admin/supplier1">
            <button>Supplier1</button>
        </Link>
        <Link to="/admin/supplier2">
            <button>Supplier2</button>
        </Link>
        <Link to="/admin/supplier3">
            <button>Supplier3</button>
        </Link>
    </div>
  )
}

export default AdminHome