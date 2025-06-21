'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    name: 'R. K. Agrawal',
    text: "We've seen remarkable results using their diabetes and bone health range—reliable, effective, and trusted by our patients.",
    image: '/assets/home/Testimonial1.png',
  },
  {
    name: 'Dr. A. Mehta',
    text: 'These supplements have brought noticeable improvements to our patients\' well-being.',
    image: '/assets/home/Testimonial1.png',
  },
  {
    name: 'S. Banerjee',
    text: 'The product quality and consistency have earned our trust over time.',
    image: '/assets/home/Testimonial1.png',
  },
  {
    name: 'K. Desai',
    text: 'We confidently recommend this range to anyone looking for effective health support.',
    image: '/assets/home/Testimonial1.png',
  },
  {
    name: 'M. Iyer',
    text: "Our patients have responded positively, and we're seeing real results.",
    image: '/assets/home/Testimonial1.png',
  },
  {
    name: 'N. Kapoor',
    text: 'Exceptional service and trusted product quality keep us coming back.',
    image: '/assets/home/Testimonial1.png',
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 2,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    let interval;
    if (sliderInstanceRef) {
      interval = setInterval(() => {
        sliderInstanceRef.current?.next();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [sliderInstanceRef]);

  const totalDots = Math.ceil(testimonials.length / 2);

  return (
    <div className="relative w-full mx-auto px-6 py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">
        WHAT OUR CLIENTS SAY ABOUT US
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderInstanceRef.current?.prev()}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-5xl text-[#191818] p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={() => sliderInstanceRef.current?.next()}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-5xl text-[#191818] p-2 rounded-full z-10 "
      >
        ›
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((item, idx) => (
          <div
            className="keen-slider__slide flex items-center rounded-2xl p-4 md:p-6 gap-2"
            key={idx}
          >
            <div className="flex-shrink-0">
              <Image
                width={80}
                height={80}
                src={item.image}
                alt={item.name}
                className="w-36 h-52 object-cover rounded-2xl"
              />
            </div>
            <div className="bg-[#F4F1EC] rounded-2xl p-2 h-52">
              <div className="w-12 h-12 mb-2">
                <Image
                  src="/assets/home/ClirntSlider.png"
                  width={40}
                  height={40}
                  alt="Quote"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#191818] text-sm md:text-base leading-relaxed p-2">
                {item.text}
              </p>
              <p className="mt-3 italic text-right text-gray-700 p-2">-- {item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => sliderInstanceRef.current?.moveToIdx(idx * 2)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-green-700' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
