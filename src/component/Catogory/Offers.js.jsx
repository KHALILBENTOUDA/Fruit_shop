import React from 'react'
import ItemesCategory from '../Utitly/ItemesCategory'
import OfferImg from '../../imges/WhatsApp_Image_2023-01-25_at_6.22.59_PM-removebg-preview.png'
import {Col,Row} from 'react-bootstrap'
const Offers = () => {
  return (
    <div className=" offer-item " >
    <div className='element-offer'>
      <h2>Get 30% on Fruit</h2>
      <p>Theres many fruits of passages of lorem lpsum available.</p>
      <div className='offer-imgbutton'>
        <button>Shop Now</button>
        <img src={OfferImg}/>
      </div>
    </div>
  </div>
  )
}

export default Offers