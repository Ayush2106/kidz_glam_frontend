import React , {useRef} from 'react'
import './Slider.css';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import food from '../../images/img1ob.png'
import nextNetflix  from '../../images/img1ob.png'
import money from '../../images/img2ob.png'
import moviebox  from '../../images/img3ob.png'
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
        // onClick={(e) => {
        //   e.preventDefault();
        //   window.location.href='https://ecommerce-project-frontend-ruby.vercel.app/';
        //   }}
        src = {nextNetflix} alt = ""/>
        <div className='bannerleftsubheadingg'>ABC BRUSH</div>
        </SwiperSlide> 

        <SwiperSlide className='swiper-slide'>
        <img 
        //  onClick={(e) => {
        //   e.preventDefault();
        //   window.location.href='https://foodreciepebyayushsingla.netlify.app/';
        //   }}
        src = {food} alt = ""/>
                <div className='bannerleftsubheadingg'>DEF BRUSH</div>

        </SwiperSlide>

 <SwiperSlide className='swiper-slide'>
        <img 
        // onClick={(e) => {
        //   e.preventDefault();
        //   window.location.href='https://gregarious-sopapillas-c0d429.netlify.app/';
        //   }}
        src = {moviebox} alt = ""/>
                <div className='bannerleftsubheadingg'>GHI BRUSH</div>

        </SwiperSlide> 

       
        <SwiperSlide className='swiper-slide'>
        <img 
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.location.href="https://fastidious-chimera-2cecb7.netlify.app/";
          //   }}
        src = {money} alt = ""/>
                        <div className='bannerleftsubheadingg'>JKL BRUSH</div>

        </SwiperSlide>

        
        <SwiperSlide className='swiper-slide'>
        <img 
          // onClick={(e) => {
          //   e.preventDefault();
          //   window.location.href="https://next-movie-webite-68iy.vercel.app/";
          //   }}
        src = {nextNetflix} alt = ""/>
                        <div className='bannerleftsubheadingg'>MNO BRUSH</div>

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
