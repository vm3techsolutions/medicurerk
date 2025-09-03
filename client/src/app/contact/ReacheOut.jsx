'use client';

import Image from 'next/image';

export default function ReachOut() {
  return (
    <section className="text-center py-14 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">REACH OUT TO US !</h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:px-20">
  {/* Active Number */}
  <div className="w-full h-[200px] border border-[#EDE6DB] rounded-xl flex flex-col items-center justify-center gap-3 shadow-sm text-center p-4">
    <Image
      src="/assets/contact/Phone.png"
      alt="Phone Icon"
      width={50}
      height={50}
    />
    <p className="text-lg font-semibold text-[#191818]">
      <a href="tel:+91976543210" className="hover:text-[#0E509E]">
        +91 0000000000
      </a>
    </p>
  </div>

  {/* Mail */}
  <div className="w-full h-[200px] border border-[#EDE6DB] rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm text-center p-4">
    <Image
      src="/assets/contact/Mail.png"
      alt="Mail Icon"
      width={50}
      height={50}
    />
    <p className="text-sm font-semibold text-[#191818] leading-relaxed">
      <a href="mailto:admin@rkmedicurepharm.com" className="hover:text-[#0E509E]">
        admin@rkmedicurepharm.com
      </a>
      <br />
      <a href="mailto:info@rkmedicure.com" className="hover:text-[#0E509E]">
       Sales: info@rkmedicure.com
      </a>
    </p>
  </div>

  {/* Address */}
  <div className="w-full h-[200px] border border-[#EDE6DB] rounded-xl flex flex-col items-center justify-center gap-3 shadow-sm text-center p-4">
    <Image
      src="/assets/contact/Location.png"
      alt="Location Icon"
      width={50}
      height={50}
    />
    <p className="text-sm font-semibold text-[#191818] leading-relaxed">
      RK Medicure Pharma, 168/1, 1st floor, Manganahalli, Ullal basthi, <br />
      Bangalore-560056, Karnataka, India
    </p>
  </div>
</div>

    </section>
  );
}
