import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productimg from '../../imges/WhatsApp_Image_2023-01-25_at_6.29.56_PM__3_-removebg-preview.png'
import { Datapro } from '../../Redux/Action'
import { Link } from 'react-router-dom'


const Product = () => {
    const [prod, setprod] = useState([])
    const [favorite, setfavorite] = useState([])
    const dataproduct=useSelector((state)=>state.produ)
    const dispatch=useDispatch()
    useEffect(() => {
        setprod(dataproduct)
    }, [dataproduct])
    useEffect(() => {
        dispatch(Datapro())
    }, [])
    const handleaddfavorite=(elements)=>{
        setfavorite([...favorite,elements])
    }
  return (
        prod.map((items)=>{
            return(
                <div className='Card-products'>
                <span className='product-promotion'>20%</span>
                    <div className='img-products'>
                        <img src={items.image}/>
                    </div>
                    <div className='items-product'>
                        <h2>{items.title}</h2>
                        <div className='start-product'>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                            <i className='fa-solid fa-star'></i>
                        </div>
                        <p>Sold by </p>
                        <div className='price-products'>
                            <span>{items.price}$</span>
                            <span>{items.price * 2}$</span>
                        </div>
                        <div className='btn-products'>
                            <button>Shop Now</button>
                            <i className='fa-solid fa-cart-shopping'></i>
                            <Link>
                                <i className='fa-solid fa-heart' onClick={()=>handleaddfavorite((favorite)=>favorite.id === items.id)}></i>
                            </Link>
                        </div>
                    </div>
                    <p>
                        {
                            favorite.map((ele)=>{
                                return(
                                    <p>
                                        {
                                            ele
                                        }
                                    </p>
                                )
                            })
                        }
                    </p>
                </div>
            )
        })
  )
}

export default Product