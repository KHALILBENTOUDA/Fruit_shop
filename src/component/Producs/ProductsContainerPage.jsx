import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import productimg from '../../imges/WhatsApp_Image_2023-01-25_at_6.29.56_PM__3_-removebg-preview.png'
import Category_Slider from '../Catogory/Category_Slider'
import Product from './Product'
import { Datapro } from '../../Redux/Action'
const ProductsContainerPage = () => {
  const [prod, setprod] = useState([])
    const dataproduct=useSelector((state)=>state.produ)
    const dispatch=useDispatch()
    useEffect(() => {
        setprod(dataproduct)
    }, [dataproduct])
    useEffect(() => {
        dispatch(Datapro())
    },[])
  return (
    <>
    
      <div className='All-products'>
        <Product/>
    </div>
    </>
  )
}

export default ProductsContainerPage
