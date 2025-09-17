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
    </div>
  )
}

export default AdminHome