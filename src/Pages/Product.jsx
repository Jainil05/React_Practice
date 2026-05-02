import React from 'react'
import Navbar_Product from '../Components/Routers/Navbar_Product'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
     <div className='h-screen w-full bg-black text-white p-4' >
        <Navbar_Product/>
        
        {/* Outlet is  essential for rendering nested routes */}
        <Outlet />
    </div>
  )
}

export default Product