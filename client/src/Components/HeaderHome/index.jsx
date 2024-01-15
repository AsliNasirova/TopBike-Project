

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <>
      <Swiper navigation={true} 
      slidesPerView={1}
      spaceBetween={30}
      modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="header_container">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_4.jpg?v=1613575294" alt="" />
            <div className="headerText">
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="header_container">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/slideshow_3.jpg?v=1613575289" alt="" />
            <div className="headerText">
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

