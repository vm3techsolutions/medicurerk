// components/OurStory.tsx
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="  sm:px-10 px-5 py-14 flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Text Section */}
      <div className="md:w-1/2">

        <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold mb-4">OUR STORY</h2>
         <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
         {/* At R K Medicure, we believe that the health of women and children is the foundation of a 
healthier, stronger world. Yet, these segments are often underserved, with gaps in 
access, focus, and care. We set out to change that. */}

R K Medicare was founded with a singular purpose — to make a meaningful difference in the lives of women and children. Recognizing the critical and often underserved needs in female and pediatric health, we embarked on a mission in the pharmaceutical space to bring focused, evidence-based, and value-driven solutions to the market.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
        {/* Founded with a singular mission — to make a meaningful difference in healthcare 
through specialized solutions — we bring together clinical expertise, evidence-based 
innovation, and compassionate care to address needs across multiple therapeutic 
areas.  */}

What began as a vision in a single segment has grown into a dedicated healthcare movement. Today, R K Medicare stands proud as a specialist in female and pediatric segments, offering a diverse and dynamic portfolio designed to support women through various life stages and to nurture healthy development in children.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          {/* Our expertise spans Obstetrics, Gastroenterology, Gynaecology, Andrology, Urology, 
Diabetology, Cardiology, and Neurology, allowing us to serve patients at every stage of 
life. While our heart remains deeply rooted in female and pediatric health, our 
diversified portfolio ensures comprehensive care that addresses interconnected health 
needs for individuals and families. */}

Our growth is rooted in a strong foundation of clinical excellence, compassionate care, and customer trust, and we remain committed to expanding our impact across India and beyond.
        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          {/* From supporting women through adolescence, motherhood, and beyond — to nurturing 
healthy growth in children, managing chronic conditions, and enhancing quality of life 
for all — every product we create is backed by research, quality, and a deep 
understanding of patient needs.  */}


        </p>

        <p className="text-[#191818] leading-relaxed text-sm sm:text-base">
          {/* From a single vision, we’ve grown into a trusted name in healthcare, partnering with 
doctors, pharmacists, and communities across India. With every step forward, we’re 
driven by one commitment: to bring better health and brighter futures to those who 
need it most. */}


        </p>
      </div>

     {/* Right Image Section - 2 images in a row with overlap */}
<div className="md:w-1/2 flex items-start justify-center gap-0 relative">
  
  {/* Left Image (child) - higher z-index and right overlap */}
  <div className="relative sm:w-[50vh] sm:h-[60vh] w-[25vh] h-[30vh] rounded-bl-[60px] overflow-hidden shadow-lg z-20 -mr-10 mt-28">
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
  <div className="relative sm:w-[50vh] sm:h-[60vh] w-[25vh] h-[30vh] rounded-tr-[60px] overflow-hidden shadow-lg -mt-5 z-10">
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
