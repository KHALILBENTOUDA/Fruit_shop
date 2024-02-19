import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import Product from '../Producs/Product'
const Product_Home= () => {
  return (
    <>
    <ItemesCategory type="Products" more="More" pathText="/Products"/>
    <div className='All-products'>
        <Product/>
    </div>
    </>
  )
}
export default Product_Home;