import React from 'react'
import { Product } from './Product'
import ProductCart from './ProductCart'

function ProductDetail() {
  return (
    <div>
        <h1 className='text-3xl my-5 text-center'>List of our Product</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {Product.map((product,key)=>
            <>
                <ProductCart key={key} data={product}/>
            </>
            )}
        </div> 
    </div>
  )
}

export default ProductDetail