import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../imges/p1.png'
const Login = () => {
  return (
    <div className='login'>
    <form>
        
        <div className='user-img'>
            <img src={user}></img>
        </div>
        <div className='titel-user'>
            <h1>Login</h1>
        </div>
        <div className='forma-user'>
            <label >Username : </label><br />
            <input type="text" placeholder="Enter your Name"/><br />
            <label >Password : </label><br />
            <input type="text" placeholder="Enter your Password"/><br />
            <button type="submit">Login</button><br />
        </div>
        <div className='forget-user'>
            <p>Forget your Password ?</p>
            <p>Create a Counte !</p>
            <Link>Register</Link>
        </div>
    </form>
    </div>
  )
}

export default Login
