import React, { useContext } from 'react'
import Banner from './Banner'
import { ProductsContext } from '../Global/ProdustsContext'
import { CartContext } from '../Global/CartContext'

const Products = () => {
  const { products } = useContext(ProductsContext)
  const { dispatch } = useContext(CartContext)

  return (
    <>
      <Banner />
      <div className='products'>
        {products.map(product => {
          const { id, name, price, img, status } = product
          return (
            <div className='product' key={id}>
              <div className='product-img'>
                <img src={img} alt={name} />
              </div>
              <div className='product-details'>
                <div className='product-name'>{name}</div>
                <div className='product-price'>${price}.00</div>
              </div>
              <div
                className='add-cart'
                onClick={() => dispatch({ type: 'ADD_TO_CART', id, product })}
              >
                add to cart
              </div>
              {product.status === 'hot' ? <div className='hot'>Hot</div> : ''}
              {product.status === 'new' ? <div className='new'>New</div> : ''}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products
