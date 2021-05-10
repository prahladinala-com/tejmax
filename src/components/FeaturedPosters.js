import React from "react"
import fposter01 from "../img/fposter1.png"
import fposter02 from "../img/fposter2.png"
import fposter03 from "../img/fposter3.png"
export default function FeaturedPosters() {
  return (
    <div>
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={fposter03} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={fposter02} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item'>
            <img src={fposter01} className='d-block w-100' alt='...' />
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}
