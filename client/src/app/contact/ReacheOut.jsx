'use client';

import Image from 'next/image';

export default function ReachOut() {
  return (
    <section className="text-center py-14 px-4">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">REACH OUT TO US !</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:px-20">
        {/* Contact No. */}
        <div className="w-full h-[120px] border border-[#EDE6DB] rounded-xl flex items-center justify-center gap-3 shadow-sm">
          <Image
            src="/assets/contact/Phone.png"
            alt="Phone Icon"
            width={50}
            height={50}
          />
          <p className="text-3xl font-semibold text-[#191818]">Contact No.</p>
        </div>

        {/* Mail */}
        <div className="w-full h-[120px] border border-[#EDE6DB] rounded-xl flex items-center justify-center gap-3 shadow-sm">
          <Image
            src="/assets/contact/Mail.png"
            alt="Mail Icon"
            width={50}
            height={50}
          />
          <p className="text-3xl font-semibold text-[#191818]">Mail</p>
        </div>

        {/* Address */}
        <div className="w-full h-[120px] border border-[#EDE6DB] rounded-xl flex items-center justify-center gap-3 shadow-sm">
          <Image
            src="/assets/contact/Location.png"
            alt="Location Icon"
            width={50}
            height={50}
          />
          <p className="text-3xl font-semibold text-[#191818]">Address</p>
        </div>
      </div>
    </section>
  );
}
