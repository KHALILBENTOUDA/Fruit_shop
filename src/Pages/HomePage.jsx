import React from 'react'
import Slider from '../component/Home/Slider'
import Offers_Home from '../component/Home/Offers-Home.jsx'
import Category_Home from '../component/Home/Category-Home'
import Data from '../component/Utitly/Data'
import Product_Home from '../component/Home/Product-Home'
import BigOffer from '../component/Home/BigOffer'
import Footer from '../component/Utitly/Footer'
const HomePage = () => {
  return (
    <>
    <Slider/>
    <Offers_Home/>
    <Category_Home/>
    <BigOffer/>
    <Product_Home/>
    <Product_Home/>
    </>
  )
}

export default HomePage