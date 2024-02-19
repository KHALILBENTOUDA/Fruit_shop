import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import Category from './Category'
const Category_Container = () => {
  return (
    <>
        <ItemesCategory type="All Categorys"/>
        <div className='All-catogory'>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
        </div>
    </>
  )
}

export default Category_Container