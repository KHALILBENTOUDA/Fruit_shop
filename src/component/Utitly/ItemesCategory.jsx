import React from 'react'
import { Link } from 'react-router-dom'
const ItemesCategory = ({type,more,pathText}) => {
  return (
    <>
            {
              more ? 
              <div className='chgeCate'>
                <div className='catagoryitme'>{type}</div>
                <Link to={pathText}>
                  <button className='catgorymore'>{more} <i className='fa-solid fa-angles-right'></i></button>
                </Link>
                
            </div>
            :
              <div className='chgeCate'>
                <div className='catagoryitme'>{type}</div>
                
              </div>
            }
    </>
  )
}

export default ItemesCategory