"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/home/OurProducts.json");
      const data = await res.json();
      setTestimonials(data);
    };

    fetchData();
  }, []);

  return (
    <div className="py-14 px-6 sm:px-10 bg-[#EDE6DB] rounded-3xl relative">
      {/* Centered Title */}
      <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold text-center mb-8">
        OUR PRODUCTS
      </h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          250: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          750: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`rounded-xl  shadow-md text-center h-full transition duration-300 my-5 border-[#EDE6DB] bg-white`}
            >
              <div className="w-full h-56 relative mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#191818] text-center mb-4">
              {item.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination & Navigation Style */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: -5px !important;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background-color: #191818 !important;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #000 !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #191818;
          font-weight: bold;
          top: 40%;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
