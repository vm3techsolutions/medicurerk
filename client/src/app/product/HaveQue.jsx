'use client';

import Link from 'next/link';

export default function ContactBanner() {
  return (
    <section className=" py-14">
        <div className='bg-[#E9C46A] w-full py-5 px-4 md:px-16'>
      <div className="sm:px-32 flex flex-col md:flex-row justify-between items-center text-center md:text-center gap-4">
        {/* Text Section */}
        <div className=''>
          <p className="text-center text-sm md:text-xl font-bold text-[#191818]">
            HAVE QUESTIONS OR NEED ASSISTANCE?
          </p>
          <p className="text-center text-sm md:text-xl font-bold text-[#191818]">
            WE'RE JUST A MESSAGE AWAY — CONTACT US TODAY!
          </p>
        </div>

        {/* Button Section */}
        <Link href="/contact" className='sm:pr-20'>
          <button className="bg-[#125C3A] text-white  sm:px-7 sm:py-3 py-1 px-3 rounded-full text-xl sm:mr-10 font-bold hover:bg-[#125C3A]/90 transition">
            Contact Us
          </button>
        </Link>
      </div>
      </div>
    </section>
  );
}
