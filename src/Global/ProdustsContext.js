import React, { createContext, useState } from 'react'
import shopData from './shopData'

export const ProductsContext = createContext()

const ProdustsContextProvider = props => {
  const [products, setProducts] = useState(shopData)
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProdustsContextProvider
