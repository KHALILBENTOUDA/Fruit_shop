import React from 'react'
import './Style.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './component/Utitly/Nav'
import Footer from './component/Utitly/Footer'
import AllCategoryPages from './Pages/CategoryPage/AllCategoryPages'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import LoginPage from './Pages/AuthPages/LoginPage'
import Favorit from './Pages/FavoriteList/Favorit'
import AboutPage from './Pages/AboutPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category' element={<AllCategoryPages/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/favoritelist' element={<Favorit/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App