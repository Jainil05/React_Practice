import React from 'react'
import { Link } from 'react-router-dom'
import Men from '../../Pages/Men'

const Navbar_Product = () => {
  return (
    <div className='flex justify-center items-center gap-5 text-3xl text-white'>
        <Link to="men">Mens</Link>
        <Link to="women">Womens</Link>
        <Link to="child">Childs</Link>
    </div>
  )
}

export default Navbar_Product