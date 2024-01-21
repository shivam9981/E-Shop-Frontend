import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselData from './CaroselData'
const HomeCarosel = () => {
  const items = CarouselData.map((item) => <img className='cursor-pointer' role='presentation' src={item.image} alt={item.title} />)

  return (
    <div className='-z-10'>
      <AliceCarousel
        autoPlay
        items={items}
        autoPlayDirection={5000}
        disableButtonsControls
        infinite
      />
    </div>
  )
}

export default HomeCarosel