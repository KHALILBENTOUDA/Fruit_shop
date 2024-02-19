import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import imgcatogory from '../../imges/WhatsApp_Image_2023-01-25_at_6.22.59_PM-removebg-preview.png'
const Category = () => {
    
  return (
            <div className='catogory-card'>
                <div className='category-img'>
                    <img src={imgcatogory}/>
                </div>
                <div className='category-items'>
                    <h2> Name category</h2>
                    <div className='category-btn'>
                        <button>Shop Naw</button>
                    </div>
                </div>
            </div>
  )
}

export default Category