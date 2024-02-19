import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className='All-footer'>
                <div className='first-footer'>
                    <h3>GREENShop</h3>
                    <p>this shop is spesial store to bay<br></br> the new products with heghit<br></br>  coality and sheep for you</p>
                    <div className='socials'>
                        <i className='fa-brands fa-facebook'></i>
                        <i className='fa-brands fa-instagram'></i>
                        <i className='fa-brands fa-twitter'></i>
                        <i className='fa-brands fa-youtube'></i>
                    </div>
                </div>
                <div className='second-footer'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                        <a>/ Home</a>
                        </li>
                        <li>
                        <a>/ Product</a>
                        </li>
                        <li>
                        <a>/ Catagory</a>
                        </li>
                        <li>
                        <a>/ About_US</a>
                        </li>
                        <li>
                        <a>/ Contact_US</a>
                        </li>
                        <li>
                        <a>/ Serveces</a>
                        </li>
                        <li>
                        <a>/ Provice_Police</a>
                        </li>
                    </ul>
                </div>
                <div className='third-footer'>
                    <h3>Information</h3>
                    <div className='location'>
                        <i className='fa-solid fa-location-dot'></i>
                        <p>Morocco,Beni Mellal</p>
                    </div>
                    <div>
                    <div className='time'>
                        <i className='fa-solid fa-clock'></i>
                        <p>the Hours Work from 10:00 PM to 8:00 PM</p>
                    </div>
                    <div className='tel'>
                        <i className='fa-solid fa-phone'></i>
                        <p>
                            +212 09238900 <br></br>
                            +212 34879345
                        </p>
                    </div>
                </div>
                </div>
                <div className='fourth-footer'>
                    <form>
                        <input type="text" placeholder='your Name'/>
                        <input type="email" placeholder='your Email'/>
                        <textarea placeholder='write your asks here'/><br></br>
                        <button>Send</button>
                    </form>
                    
                </div>
                
                </div>
                
                    <p className='under-footer'>Copyright <span>©</span> 2023 GREENShop</p>
        </footer>
    </>
  )
}

export default Footer