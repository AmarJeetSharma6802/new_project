"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import Home from './home/page'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "695px" }}>
            <Image 
              src="https://ebroker.wrteam.me/images/slider/1739445133.6177.jpg" 
              alt="Nike Banner"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Black Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", 
            }} />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "695px" }}>
            <Image 
              src="https://ebroker.wrteam.me/images/slider/1739445180.4529.jpg" 
              alt="Nike Banner"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Black Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", 
            }} />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "695px" }}>
            <Image 
              src="https://ebroker.wrteam.me/images/slider/1739445180.4529.jpg" 
              alt="Nike Banner"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Black Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", 
            }} />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div style={{ position: "relative", width: "100%", height: "695px" }}>
            <Image 
              src="https://ebroker.wrteam.me/images/slider/1739445408.5142.png" 
              alt="Nike Banner"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Black Overlay */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", 
            }} />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="page2"></div>
      <Home/>
    </>
  );
}
