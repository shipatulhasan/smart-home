import React, { useContext } from 'react'
import { toast } from 'react-toastify'

import { addToDb } from '../utils/fakeDB'
import Product from './Product'
import { CartContext, ProductContext } from './Roots'

const Shop = () => {
  const products = useContext(ProductContext)
  const [cart, setCart] = useContext(CartContext)
  
  const handleCart = (selectedProduct)=>{
    addToDb(selectedProduct.id)
   
    let newCart = []

    const exists = cart.find(product=>product.id === selectedProduct.id)
    if(!exists){
      selectedProduct.quantity = 1
      newCart = [...cart, selectedProduct]
    }
    else{
      const rest = cart.filter(product=>product.id !== selectedProduct.id)
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]

    }

    setCart(newCart)
    toast.success('product added successfully!!!!', {autoClose:500})
    
  }
 
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product=><Product key={product.id} product={product} handleCart={handleCart} />)
        }
      </div>
    </div>
  )
}

export default Shop
