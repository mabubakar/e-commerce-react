import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../Global/CartContext'

const Navbar = () => {
  const { qty } = useContext(CartContext)
  return (
    <nav>
      <ul className='left'>
        <li>
          <Link to='/' className='link'>
            PakExpress
          </Link>
        </li>
      </ul>
      <ul className='right'>
        <li>
          <Link to='/cart' className='link'>
            <span className='shoppingCart'>
              <FaShoppingCart className='FaShoppingCart' />
              <span className='cartCount'>{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
