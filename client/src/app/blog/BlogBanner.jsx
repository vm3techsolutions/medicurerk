"use client";

import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative w-full sm:h-[80vh] h-[30vh]">
      {/* Banner Image */}
      <Image
        src="/assets/blog/BlogBanner.png"
        alt="Home Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-"
        priority
      />

      {/* Text Overlay at Bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white -mb-1 ">
        <h1 className="text-lg md:text-6xl font-bold ">
         SIMPLYFING HEALTH THROUGH WORDS
        </h1>
      </div>
    </section>
  );
}
