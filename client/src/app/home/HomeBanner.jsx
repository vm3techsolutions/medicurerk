"use client";

import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative w-full sm:h-[80vh] h-[30vh]">
      {/* Banner Image */}
      <Image
        src="/assets/home/HomeBanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-"
        priority
      />

      {/* Text Overlay at Bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white -mb-1">
        <h1 className="text-2xl md:text-7xl font-bold ">
          SCIENCE FOR BETTER HEALING
        </h1>
      </div>
    </section>
  );
}
