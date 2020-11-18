import React, { createContext, useState } from 'react'
import dslr from '../assets/dslr.jpg'
import headphone from '../assets/headphone.jpg'
import iphone from '../assets/iphone.jpg'
import MicroPhone from '../assets/speaker.jpg'
import perfume from '../assets/perfume.jpg'
import ring from '../assets/ring.jpg'
import shoe from '../assets/shoe.jpg'
import watch from '../assets/watch.jpg'

export const ProductsContext = createContext()

const ProdustsContextProvider = props => {
  const [products, setProducts] = useState([
    { id: 1, name: 'DSLR', price: 300, img: dslr, status: 'hot' },
    { id: 2, name: 'HeadPhone', price: 30, img: headphone, status: 'new' },
    { id: 3, name: 'IPhone', price: 400, img: iphone, status: 'hot' },
    { id: 4, name: 'MicroPhone', price: 200, img: MicroPhone, status: 'hot' },
    { id: 5, name: 'Perfume', price: 100, img: perfume, status: 'new' },
    { id: 6, name: 'Ring', price: 150, img: ring, status: 'hot' },
    { id: 7, name: 'Shoes', price: 50, img: shoe, status: 'new' },
    { id: 8, name: 'Watch', price: 110, img: watch, status: 'hot' },
  ])
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProdustsContextProvider
