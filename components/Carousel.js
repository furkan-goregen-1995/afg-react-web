import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carousel({data,per,slug}) {


    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={per}
      navigation
      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {data.map(d=>(
            <SwiperSlide key={d.id}><img style={{height:500,width:"100%",objectFit:"contain"}} src={`http://manager.afg-react-web.com.tr/`+slug+`/`+d.image_path}/></SwiperSlide>
        ))}
    </Swiper>
    );
  
}
