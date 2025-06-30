import Image from "next/image";

export default function BrochureBanner() {
  return (
    <div className="py-14 relative">
     {/* Book Images Above Green Box */}
<div className="absolute right-10 z-20 hidden md:flex space-x-[-30px]">
  <div className="relative w-[150px] h-[200px] rotate-[-15deg]">
    <Image
      src="/assets/home/BrouchureBook2.png"
      alt="Brochure 2"
      fill
      className="object-contain -mt-6 ml-5"
    />
  </div>
  <div className="relative w-[150px] h-[200px] rotate-[25deg]">
    <Image
      src="/assets/home/BrouchureBook1.png"
      alt="Brochure 1"
      fill
      className="object-contain -mt-2"
    />
  </div>
</div>


      {/* Green Banner Box */}
      <div className="relative w-full bg-gradient-to-r from-[#125C3A] to-[#125C3A]/40  py-5 px-6 overflow-hidden z-10">
        <div className="mx-auto text-left sm:ml-20">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            DOWNLOAD OUR PRODUCTS BROCHURE
          </h2>
         <a
  href="/assets/header/Brochure pdf.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#E9C46A] text-[#191818] font-bold px-4 py-2 rounded-3xl shadow-md sm:mt-5 sm:ml-60">
    Download Brochure
  </button>
</a>

        </div>
      </div>
    </div>
  );
}
