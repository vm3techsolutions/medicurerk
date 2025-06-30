// components/AboutUs.tsx

"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white py-14 sm:px-10 px-5 flex flex-col md:flex-row items-start gap-8 md:gap-10 relative">
      
      {/* Image Section */}
      <div className="w-full md:w-1/3 relative">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] rounded-tl-[40px] md:rounded-tl-[60px] overflow-hidden shadow-lg">
          
          {/* Border Overlay on Top-Left */}
          <div className="absolute top-0 left-0 w-[25vh] h-[25vh] sm:w-[30vh] sm:h-[30vh] md:w-[40vh] md:h-[40vh] 
            border-t-[6px] sm:border-t-[8px] md:border-t-[12px] 
            border-l-[6px] sm:border-l-[8px] md:border-l-[12px] 
            border-[#E9C46A] 
            rounded-tl-[40px] md:rounded-tl-[60px] z-10">
          </div>

          {/* Actual Image */}
          <Image
            src="/assets/about/AboutUs.png"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
        <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold">ABOUT US</h2>
        
        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          Founded in 2020 with compassion and purpose, R K Medicare is a fast-growing pharmaceutical company dedicated to delivering high-quality, affordable healthcare solutions that serve the well-being of women, children, and families at large. Our journey began with a clear vision — to create a trusted healthcare brand that not only meets medical needs but understands the unique sensitivities of female and pediatric care.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          Innovation and optimism have been at the heart of our growth. With a thoughtfully curated portfolio spanning pharmaceuticals, personal care, wellness, and nutraceuticals, we offer products that support women through every stage of life — from adolescence to motherhood — and promote healthy development in children, from infancy through early growth years.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          Our formulations are rooted in clinical science and crafted with maternal sensitivity, prioritizing safety, comfort, and efficacy. We collaborate with leading manufacturing partners like Akums, Hetero, and Synokem to ensure world-class quality while maintaining accessibility and affordability.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          With a strong presence in over 35 therapeutic areas, including key segments like Gynaecology, Pediatrics, and General Practice, R K Medicare continues to evolve with agility and foresight. Today, we are recognized not just for the therapies we provide, but for the values we uphold — compassion, quality, and care — earning the trust of healthcare professionals and families alike.
        </p>

        <h5 className="text-[#125C3A] leading-relaxed font-semibold text-md sm:text-lg">
          Together, we move forward — innovating for a healthier future.
        </h5>
      </div>
    </div>
  );
}
