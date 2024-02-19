import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Datapro } from '../../Redux/Action'
import women from '../../imges/woman-clothes.png'
import men from '../../imges/cotton-polo-shirt.png'
import jewelery from '../../imges/diamond.png'
import elecronic from '../../imges/responsive.png'
import All from '../../imges/category.png'
import { Link } from 'react-router-dom'
const Category_Slider = () => {
    const [prod, setprod] = useState([])
    const dataproduct=useSelector((state)=>state.produ)
    const dispatch=useDispatch()

    const handlefilter=(ele)=>{

    }
    useEffect(() => {
        setprod(dataproduct)
    }, [dataproduct])
    useEffect(() => {
        dispatch(Datapro())
    }, [])
    const allcategory=['products',... new Set(prod.map((event)=>event.category))]
    const allicons=[All,men,jewelery,elecronic,women];
  return (
    <>
        <div className='menuSlider'>
            <ul className='menubar'>
            {
                allcategory.map((event,index)=>{
                    return (
                            <li>
                                <img src={allicons[index]}/>
                                <Link onClick={()=>handlefilter(event)} to='products'>
                                {
                                    event
                                }
                                </Link>
                            </li>
                    )
                })
            }
            </ul>
        </div>
    </>
  )
}

export default Category_Slider