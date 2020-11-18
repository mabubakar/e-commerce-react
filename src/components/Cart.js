import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)
  const handleToken = token => {}
  return (
    <div className='cart-container'>
      <div className='cart-details'>
        {shoppingCart.length > 0
          ? shoppingCart.map(cart => {
              const { id, img, name, price, qty } = cart
              return (
                <div className='cart' key={id}>
                  <span className='cart-image'>
                    <img src={img} alt={name} />
                  </span>
                  <span className='cart__productName'>{name}</span>
                  <span className='cart__productPrice'>${price}.00</span>
                  <span
                    className='inc'
                    onClick={() => dispatch({ type: 'INC', id, cart })}
                  >
                    <FaPlus />
                  </span>
                  <span className='product__quantity'>{qty}</span>
                  <span
                    className='dec'
                    onClick={() => dispatch({ type: 'DEC', id, cart })}
                  >
                    <FaMinus />
                  </span>
                  <span className='product__totalPrice'>{price * qty}.00</span>
                  <span
                    className='delete_product'
                    onClick={() => dispatch({ type: 'DELETE', id, cart })}
                  >
                    <MdDelete />
                  </span>
                </div>
              )
            })
          : 'Sorry Your Cart is Corrently Empty'}
      </div>
      {shoppingCart.length > 0 ? (
        <div className='cart__summary'>
          <div className='summary'>
            <h3>Cart Summary</h3>
            <div className='total__items'>
              <div className='items'>Total Items</div>
              <div className='items__count'>{qty}</div>
            </div>
            <div className='total__priceSection'>
              <div className='just__title'>Total Price</div>
              <div className='items__price'>${totalPrice}.00</div>
            </div>
            <div className='stripe__section'>
              <StripeCheckout
                stripeKey='pk_test_51HohF2H3bzqLB7n53A0H9yQQ7NOIDiPYhIR4HfFSqsdPIApA6fmaijcFLKtBbotOWZptZU4sIyrFrKGqyiSftAbh00pTgmE1cd'
                token={handleToken}
                billingAddress
                shippingAddress
                amount={totalPrice * 100}
                name='All Products'
              ></StripeCheckout>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Cart
