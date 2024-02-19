import React from 'react'
import Slider_Offer from '../Catogory/Slider_Offer'
import OfferImg from '../../imges/WhatsApp_Image_2023-01-25_at_6.22.59_PM-removebg-preview.png'
import ItemesCategory from '../Utitly/ItemesCategory'
const BigOffer = () => {
  return (
    <>
        <ItemesCategory type="Best Offer's !"/>
        <Slider_Offer OfferImg={OfferImg} />
    </>
  )
}

export default BigOffer