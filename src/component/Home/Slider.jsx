import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slidrimg from '../../imges/WhatsApp Image 2023-01-25 at 6.22.59 PM.jpeg'
import slidr2 from '../../imges/WhatsApp_Image_2023-01-25_at_6.22.59_PM-removebg-preview.png'
import slidr3 from '../../imges/WhatsApp_Image_2023-01-25_at_6.22.59_PM__1_-removebg-preview.png'
import slidr4 from '../../imges/WhatsApp_Image_2023-01-25_at_6.29.56_PM__3_-removebg-preview.png'
import Category_Slider from '../Catogory/Category_Slider';

function Slider() {
  const [index,setindex]=useState(0)
  const handleSelect=(ele)=>{
    setindex(ele)
  }
  return (
    <>
    <div className='Slider'>
      <Category_Slider/>
      <div className='sectionSlider'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='ldflgjdkf'>
          <div className='itmessection'>
            <div className='itemdiv'>
            <h1>Take Organic <br></br> Food and Stay<br></br> Healty</h1>
              <p><i className='fa-solid fa-arrow-down-long'></i>   A trusted brand for megor food</p>
              <div className='Buttons'>
                <button>Shop Naw</button>
                <button>More</button>
              </div>
            </div>
            <div className='imgdiv'>
              <img src={slidr2}/>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='itmessection'>
            <div className='itemdiv'>
            <h1><span></span> Take Organic<br></br> Food and Stay<br></br> Healty</h1>
              <p> <i className='fa-solid fa-arrow-down-long'></i>    A trusted brand for megor food</p>
              <div className='Buttons'>
                <button>Shop Naw</button>
                <button>More</button>
              </div>
            </div>
            <div className='imgdiv'>
              <img src={slidr2}/>
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='itmessection'>
            <div className='itemdiv'>
            <h1><span></span> Take Organic <br></br>Food and Stay<br></br> Healty</h1>
              <p><i className='fa-solid fa-arrow-down-long'></i>    A trusted brand for megor food</p>
              <div className='Buttons'>
                <button>Shop Naw</button>
                <button>More</button>
              </div>
            </div>
            <div className='imgdiv'>
              <img src={slidr2}/>
            </div>
          </div>
          </Carousel.Item>
        </Carousel>
        <div className='itemsimger'>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Slider