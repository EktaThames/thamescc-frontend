'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import ThreeIconsSection from '../ThreeSections/ThreeSections';
export const HeroBanner = () => {
  const slides = [
    { image: '/images/hero-banner1.png', price: '£9.69' },
    { image: '/images/hero-banner1.png', price: '£8.49' },
    { image: '/images/hero-banner1.png', price: '£7.99' },
  ];

  return (
    <section className="bg-white">
      <div className="hero-banner relative overflow-hidden">
        <div className="mx-auto px-8 relative w-full">
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
                  <div className="relative w-full flex justify-center items-center">
                    <Image
                      src={slide.image}
                      alt=" "
                      width={1248}
                      height={480}
                      className="test"
                      style={{ height: 'auto' }}
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="w-[50px] h-[50px] custom-prev justify-center flex items-center-safe absolute top-1/2 left-2 transform -translate-y-1/2 z-20 bg-white text-xl px-3 py-1 rounded-full shadow hover:bg-gray-100 cursor-pointer">
            <img src="/images/arrow-left.svg" alt=" " />
          </button>
          <button className="w-[50px] h-[50px] justify-center flex items-center-safe custom-next absolute top-1/2 right-2 transform -translate-y-1/2 z-20 bg-white text-xl px-3 py-1 rounded-full shadow hover:bg-gray-100 cursor-pointer">
            <img src="/images/arrow-rit.svg" alt=" " />
          </button>
        </div>
      </div>
      <ThreeIconsSection />
    </section>
  );
};