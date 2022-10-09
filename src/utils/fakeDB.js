const addToDb = id=>{

  const storedProduct = getStoredProduct()
  let quantity = storedProduct[id]
  if(quantity){
    const newQuantity = quantity + 1
    storedProduct[id] = newQuantity
  }
  else{
    storedProduct[id] = 1
  }
  localStorage.setItem('shopping-cart',JSON.stringify(storedProduct))

}
const getStoredProduct = ()=>{
  const storedProduct = localStorage.getItem('shopping-cart')
  let cart = {}
  if(storedProduct){
    cart = JSON.parse(storedProduct)
  }
  return cart
}

const removeData = (id)=>{
  const storedProduct = getStoredProduct()

  if(storedProduct[id]){
    delete storedProduct[id]
  }

  localStorage.setItem('shopping-cart',JSON.stringify(storedProduct))
}

const clearData = ()=>{
  localStorage.clear()
}

export {addToDb, getStoredProduct,removeData, clearData}