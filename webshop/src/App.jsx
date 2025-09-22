
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
import { useState } from 'react'
import Shops from './pages/global/Shops'
import {ContactUs} from './pages/global/ContactUs'
import Supplier1 from './pages/admin/api/Supplier1'
import Supplier2 from './pages/admin/api/Supplier2'
import Supplier3 from './pages/admin/api/Supplier3'

function App() {
  const [dark, setDark] = useState(localStorage.getItem("isDarkTheme") === "true");

  function setDarkMode() {
    setDark(true);
    localStorage.setItem("isDarkTheme", "true");
  }

  function setLightMode() {
    setDark(false);
    localStorage.setItem("isDarkTheme", "false");
  }
  

  return (
    <div className={dark === true ? "dark-mode": undefined}>
      <Menu></Menu>
      <button onClick={setDarkMode}>Dark mode</button>
      <button onClick={setLightMode}>Light mode</button>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/cart" element={ <Cart/>}/>
        <Route path="/login" element={ <LogIn/>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="/shops" element={ <Shops/>}/>
        <Route path="/contact" element={ <ContactUs/>}/>

        <Route path="/admin" element={ <AdminHome/>}/>
        <Route path="/admin/add-product" element={ <AddProduct/>}/>
        <Route path="/admin/manage-products" element={ <ManageProducts/>}/>
        <Route path="/admin/manage-categories" element={ <ManageCategories/>}/>

        <Route path="/admin/supplier1" element={ <Supplier1/>}/>
        <Route path="/admin/supplier2" element={ <Supplier2/>}/>
        <Route path="/admin/supplier3" element={ <Supplier3/>}/>

        <Route path="/*" element={ <NotFound/>}/>
      </Routes>
        
    </div>
  )
}

export default App
