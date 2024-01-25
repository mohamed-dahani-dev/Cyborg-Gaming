// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BrowseSwipe.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




import manSwipeImg from '../../../Assets/Images/featured-01.jpg'
import boySwipeImg from '../../../Assets/Images/featured-02.jpg'
import spaceSwipeImg from '../../../Assets/Images/featured-03.jpg'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={manSwipeImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={boySwipeImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaceSwipeImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={manSwipeImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={boySwipeImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaceSwipeImg} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
