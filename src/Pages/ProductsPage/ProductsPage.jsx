import React from 'react'
import ProductsContainerPage from '../../component/Producs/ProductsContainerPage'
import ItemesCategory from '../../component/Utitly/ItemesCategory'
const ProductsPage = () => {
  return (
      <>
      <ItemesCategory type="All Products" pathText="/Products"/>
      <ProductsContainerPage/>
      </>
    
  )
}

export default ProductsPage
