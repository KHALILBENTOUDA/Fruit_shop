import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import Category from '../Catogory/Category'
import AllCategoryPages from '../../Pages/CategoryPage/AllCategoryPages'
const Category_Home = () => {
  return (
    <>
     <ItemesCategory type="Catagory" more="More" pathText="/Category"/>
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

export default Category_Home