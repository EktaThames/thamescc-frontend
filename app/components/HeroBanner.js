'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { CategoryMenu } from './CategoryMenu';
export const HeroBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const slides = [
    { image: '/hero-banner1.png', price: '£9.69' },
    { image: '/hero-banner1.png', price: '£8.49' },
    { image: '/hero-banner1.png', price: '£7.99' },
  ];


  return (
    <section className="bg-white">
            <div className="relative z-50 navigation-bg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between text-sm md:text-base font-medium text-gray-700 relative">
          <a href="#" className="text-orange-600 hover:text-orange-700">Home</a>

          <div className="relative" ref={menuRef}>
            <button
              className="hover:text-orange-600 px-4 py-2 cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              All Categories
            </button>
            {menuOpen && <CategoryMenu/>}
          </div>

          <a href="#" className="hover:text-orange-600">Offer & Promotion</a>
          <a href="#" className="hover:text-orange-600">New Arrivals</a>
          <a href="#" className="hover:text-orange-600">Shop By Top Brand</a>
          <a href="#" className="hover:text-orange-600">Clearance Offers</a>
        </div>
      </div>
      <div className="hero-banner relative overflow-hidden">
        {/* Swiper Carousel */}
        <div className="mx-auto px-4 relative w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            modules={[Navigation]}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="relative w-full h-100 flex justify-center items-center">
                      <Image
                        src={slide.image}
                        alt=' '
                        width={1248}
                        height={480}
                        className="test"
                      />
                    
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="hero-bann-btn custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-white text-xl px-3 py-1 rounded-full shadow hover:bg-gray-100">
			<img src="/arrow-left.svg" alt=" " />
          </button>
          <button className="hero-bann-btn custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-white text-xl px-3 py-1 rounded-full shadow hover:bg-gray-100">
            <img src="/arrow-rit.svg" alt=" " />
          </button>
        </div>
      </div>

      <div className="pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center block-3icon">
        {[
          { img: '/best-quality.png', title: 'BEST QUALITY', desc: 'Your one-stop online marketplace for fresh, quality products delivered to your door.' },
          { img: '/online-payment.png', title: 'ONLINE PAYMENT', desc: 'Seamlessly pay for your products with our secure and convenient online payment system.' },
          { img: '/fast-delivery.png', title: 'FAST DELIVERY', desc: 'Fresh products delivered fast to your doorstep—shop conveniently online!' }
        ].map((info, i) => (
          <div key={i}>
            <div className="mx-auto w-150 bg-white h-150 border-1 border-orange rounded-full flex items-center justify-center text-orange-600 text-3xl">
              <img src={info.img} alt={info.title} />
            </div>
            <h3 className="font-bold mt-2 mb-2 black-text">{info.title}</h3>
            <p className="text-sm body-text">{info.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
