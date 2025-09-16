import Image from "next/image";

export default function MissionVision() {
  return (
    <div className="bg-[#EDE6DB] rounded-3xl px-5 sm:px-32 py-14 ">
            
       <h2 className="text-[#125C3A] text-center text-2xl sm:text-3xl font-bold mb-10"> OUR MISSION & VISION</h2>

     <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
  
  {/* Mission Card */}
  <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-b from-[#E9C46A]/30 to-[#E9C46A]/100 p-4 rounded-xl shadow-md">
    <div className="flex items-start gap-3 mb-4">
      <Image
        src="/assets/about/MissionVision1.png"
        alt="Mission Icon"
        width={36}
        height={36}
      />
      <p className="font-medium text-sm text-[#191818]">
        {/* At R K Medicure, our mission is to address the evolving healthcare needs of women and children through: */}

        At R K Medicure, our mission is to address the evolving healthcare needs of women and children through:
      </p>
    </div>
    <ul className="list-disc pl-6 space-y-5 text-[#191818] text-sm flex-1">
      {/* <li>Scientifically formulated, high-quality products</li>
      <li>A deep commitment to affordability and accessibility</li>
      <li>Ethical business practices and partnerships with healthcare professionals</li>
      <li>Continuous research and product innovation for better therapeutic outcomes</li> */}

      <li>Scientifically formulated, high-quality products</li>
      <li>A deep commitment to affordability and accessibility</li>
      <li>Ethical business practices and partnerships with healthcare professionals</li>
      <li>Continuous research and product innovation for better therapeutic outcomes</li>

    </ul>
    <p className="text-sm text-[#191818] mt-4">
      {/* We aim to bridge the gap between care and need — ensuring every mother and child receives the attention and support they deserve. */}

      We aim to bridge the gap between care and need — ensuring every mother and child receives the attention and support they deserve.
    </p>
  </div>

  {/* Vision Card */}
  <div className="w-full md:w-1/2 flex flex-col bg-gradient-to-b from-[#E9C46A]/30 to-[#E9C46A]/100 p-4 rounded-xl shadow-md text-white">
    <div className="flex items-start gap-3 mb-4">
      <Image
        src="/assets/about/MissionVision2.png"
        alt="Vision Icon"
        width={36}
        height={36}
      />
      <p className="font-medium text-sm text-[#191818]">
        {/* At R K Medicure, our vision is to become a trusted leader in female and pediatric healthcare by: */}

        To become a trusted leader in female and pediatric healthcare by delivering innovative, safe, and accessible solutions that empower healthier generations and enhance the quality of life for women and children:
      </p>
    </div>
    <ul className="list-disc pl-6 space-y-4 text-sm flex-1 text-[#191818]">
      <li>Delivering innovative, safe, and scientifically backed healthcare solutions</li>
      <li>Ensuring high-quality, affordable, and accessible care for women and children</li>
      <li>Fostering ethical partnerships with healthcare professionals for better outcomes</li>
      <li>Advancing research to continuously improve therapeutic results and quality of life</li>
    </ul>
    <p className="text-sm mt-4 text-[#191818]">
      We are committed to shaping a healthier future where every woman and child receives the care, attention, and support they truly deserve.
    </p>
  </div>
</div>

    </div>
  );
}
