"use client";

import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative w-full sm:h-[80vh] h-[30vh]">
      {/* Banner Image */}
      <Image
        src="/assets/contact/ContactBanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-"
        priority
      />

      {/* Text Overlay at Bottom Left */}
      <div className="absolute inset-0 flex flex-col justify-end items-start text-white px-6 sm:px-16  -mb-2">
        <h1 className="text-4xl sm:text-9xl font-bold">CONTACT US</h1>
      </div>
    </section>
  );
}
