import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../store/Cart';


const ProductCart = (props) => {
    const carts=useSelector(store =>store.cart.items);
    
    const {id,name,price,image,slug}=props.data;
    const dispatch=useDispatch();
    const handleAddToCart = () =>{
        dispatch(addToCart({
            productId:id,
            quantity:1

        }));
        console.log(carts);
    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm border border-grey' >
    <Link to={slug}>
        <img src={image} alt='cart image' className='w-full h-80 object-over object-top drop-shadow-[0_80px_30px_#0007] rounded-2xl '/>
    </Link>
    <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
    <div className='flex justify-between items-center'>
        <p>
            $<span className='text-2xl font-medium'>{price}</span>
        </p>
        <button className='bg-grey-300 p-2 rounded-md text-xl hover:bg-grey-400 border border-black' onClick={handleAddToCart}>
            Add to cart
        </button>
    </div>

    </div>
  )
}



export default ProductCart