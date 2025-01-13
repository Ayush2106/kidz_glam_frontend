import React , {useRef} from 'react'
import './Slider.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import food from '../../images/img1ob.png'
import nextNetflix  from '../../images/toy1.jpg'
import money from '../../images/imagestoy4.jfif'
import moviebox  from '../../images/toy3.jpg'
import rightArrow from '../../images/Arrow3.png'
import leftArrow from '../../images/Arrow4.png'

function Slider() {
    const swiperRef = useRef(null);

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  
    const goToNextSlide = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  return (
    <> 
    <div className='sliderwalasection'>
    <div className='swiper-button-prev' onClick={goToPrevSlide}>
    <img src={leftArrow} alt="/Left" />
    </div>
  
<Swiper 
 ref={swiperRef}
 className='portfolio-slider'
 spaceBetween={10}
 slidesPerView={1}
 loop={true}
 grabCursor={true}
 navigation={{
   prevEl: '.swiper-button-prev',
   nextEl: '.swiper-button-next'
 }}
 breakpoints={{
   640: {
     slidesPerView: 2
   },
   1000: {
    slidesPerView: 3
  },
   1300: {
     slidesPerView: 4
   }
 }}
 >

<SwiperSlide className='swiper-slide'>
        <img 
        
        src = {nextNetflix} alt = ""/>
        <div className='bannerleftsubheadingg'>Rainbow Teddy</div>
        </SwiperSlide> 

        <SwiperSlide className='swiper-slide'>
        <img 
        
        src = {food} alt = ""/>
                <div className='bannerleftsubheadingg'>Homify toy</div>

        </SwiperSlide>

 <SwiperSlide className='swiper-slide'>
        <img 
      
        src = {moviebox} alt = ""/>
                <div className='bannerleftsubheadingg'>Cranny Box</div>

        </SwiperSlide> 

       
        <SwiperSlide className='swiper-slide'>
        <img 
        
        src = {money} alt = ""/>
                        <div className='bannerleftsubheadingg'>Toyicoius</div>

        </SwiperSlide>

        
        <SwiperSlide className='swiper-slide'>
        <img 
       
        src = {nextNetflix} alt = ""/>
                        <div className='bannerleftsubheadingg'>Monotlithic </div>

        </SwiperSlide>

</Swiper>

<div className='swiper-button-next' onClick={goToNextSlide}>
        <img src={rightArrow} alt='/rightarrow' />
        </div>

    </div>

    </>
  )
}

export default Slider
