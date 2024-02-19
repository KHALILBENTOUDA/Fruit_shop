import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import Offers from '../Catogory/Offers.js.jsx'
const Offers_Home = () => {
  return (
    <>
        <ItemesCategory type="Offers For You !" more="More" />
        <div className='All-offer'>
            <Offers/>
            <Offers/>
            <Offers/>
        </div>
        
    </>
  )
}

export default Offers_Home