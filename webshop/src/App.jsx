
import './App.css'
import AddProduct from './pages/admin/AddProduct'
import AdminHome from './pages/admin/AdminHome'
import ManageCategories from './pages/admin/ManageCategories'
import ManageProducts from './pages/admin/ManageProducts'
import LogIn from './pages/auth/LogIn'
import Signup from './pages/auth/Signup'
import Cart from './pages/global/Cart'
import HomePage from './pages/global/HomePage'
import NotFound from './pages/global/NotFound'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'

function App() {
  

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/cart" element={ <Cart/>}/>
        <Route path="/login" element={ <LogIn/>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="/admin" element={ <AdminHome/>}/>
        <Route path="/admin/add-product" element={ <AddProduct/>}/>
        <Route path="/admin/manage-products" element={ <ManageProducts/>}/>
        <Route path="/admin/manage-categories" element={ <ManageCategories/>}/>
        <Route path="/*" element={ <NotFound/>}/>
      </Routes>
        
    </>
  )
}

export default App
