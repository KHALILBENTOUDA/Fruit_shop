import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imges/3_copy-removebg-preview.png'
function Nav() {
    const [first, setfirst] = useState(false)
    const handleclick=()=>{
        setfirst(!first)
    }
  return (
    <>
            <nav>
                <div className='first_ligne'>
                    <div className='logo'>
                        <h1 className='spanlogo'><span>GREEN</span> Shop</h1>
                    </div>
                    <div className='search'>
                        <input type='search' placeholder='Search...'/>
                        <i className='fa-solid fa-search'></i>
                    </div>
                    <div onClick={handleclick} className='listslove'>
                        <i className='fa-solid fa-cart-shopping'></i>
                        <Link to='/favoritelist' >
                            <i className='fa-regular fa-heart'></i>
                        </Link>
                        
                        <div className='auth'>
                            <Link  className="sin-up">Sin Up</Link>
                            <Link to='/Login' className="sin-in">Sin In</Link>
                        </div>
                    </div>
                </div>
                <div  className='second_ligne'>
                    <div className='forcolo'>
                    <div className='catogory'>
                        <p>
                            Categorys
                        </p>
                        <i className='fa-solid fa-angles-down'></i>
                        <i className='fa-solid fa-angles-up'></i>
                        {
                            
                        }
                    </div>
                    <ul>
                        <li>
                            <Link to="/" >Home</Link >
                        </li>
                        <li>
                            <Link to="/Category" >Catalogs</Link >
                        </li>
                        <li>
                            <Link to="about" >About_US</Link >
                        </li>
                        <li>
                            <Link to="contact" >Contact_US</Link >
                        </li>
                        <li>
                            <Link to="help" >Help</Link >
                            
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    </>
)
}

export default Nav