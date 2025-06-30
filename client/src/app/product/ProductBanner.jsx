"use client";

import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative w-full sm:h-[80vh] h-[30vh]">
      {/* Banner Image */}
      <Image
        src="/assets/product/ProductBanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-"
        priority
      />

      {/* Text Overlay at Bottom Left */}
      <div className="absolute inset-0 flex flex-col justify-end items-end text-white px-6 sm:px-16  -mb-1">
        <h3 className="text-lg md:text-4xl font-bold">Explore</h3>
        <h1 className="text-2xl md:text-6xl font-bold">OUR PRODUCTS</h1>
      </div>
    </section>
  );
}
