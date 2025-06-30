// components/OurStory.tsx
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="  sm:px-10 px-5 py-14 flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Text Section */}
      <div className="md:w-1/2">

        <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold mb-4">OUR STORY</h2>
         <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
         R K Medicare was founded with a singular purpose — to make a meaningful difference in the lives of women and children. Recognizing the critical and often underserved needs in female and pediatric health, we embarked on a mission in the pharmaceutical space to bring focused, evidence-based, and value-driven solutions to the market.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
         What began as a vision in a single segment has grown into a dedicated healthcare movement. Today, R K Medicare stands proud as a specialist in female and pediatric segments, offering a diverse and dynamic portfolio designed to support women through various life stages and to nurture healthy development in children.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          Our growth is rooted in a strong foundation of clinical excellence, compassionate care, and customer trust, and we remain committed to expanding our impact across India and beyond.
        </p>
      </div>

     {/* Right Image Section - 2 images in a row with overlap */}
<div className="md:w-1/2 flex items-start justify-center gap-0 relative">
  
  {/* Left Image (child) - higher z-index and right overlap */}
  <div className="relative sm:w-[45vh] sm:h-[45vh] w-[25vh] h-[30vh] rounded-bl-[60px] overflow-hidden shadow-lg z-20 -mr-10 mt-28">
    <Image
      src="/assets/about/OurStory1.png"
      alt="Child"
      layout="fill"
      objectFit="cover"
    />
    {/* Bottom-right yellow circle */}
    <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#E9C46A] rounded-full z-30" />
  </div>

  {/* Right Image (mother) - pushed slightly behind and lower */}
  <div className="relative sm:w-[45vh] sm:h-[45vh] w-[25vh] h-[30vh] rounded-tr-[60px] overflow-hidden shadow-lg -mt-5 z-10">
    <Image
      src="/assets/about/OurStoryMother.jpg"
      alt="Mother"
      layout="fill"
      objectFit="cover"
    />
    {/* Top-left yellow circle */}
    <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#E9C46A] rounded-full z-30" />
  </div>
</div>

    </div>
  );
}
