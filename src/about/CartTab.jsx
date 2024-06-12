import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../store/Cart'
import CartItem from './CartItem'


const CartTab = () => {
  return (
    <div className='fixed top-0 right-0 bg-gray-700 shadow-2xl w-full h-full grid grid-rows-[60px_1fr_60px] text-center'>
    <h2 className='p-5 text-white text-2xl '>Shopping Cart</h2>
    <div className='p-5'>
        {Cart.map((item,key)=>{
            <CartItem key={key} data={item}/>
        })}
    </div>
    <div className='grid grid-cols-2'>
        <button className='bg-black text-white'>CLOSE</button>
        <button className='bg-amber-600 text-white'>CHECKOUT</button>
    </div>
    </div>
  )
}



export default CartTab