'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const BlogRoom = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    fetch('/data/BlogRoom.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
  };

  const currentBlog = blogs[currentIndex];

  return (
    <div className="py-10">
      <div className="w-full bg-[#E9C46A] bg-opacity-75 px-6 sm:px-16 py-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Blog Title */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Blog Room
          </h2>
        </div>

        {/* Left Arrow */}
        <div onClick={prevSlide} className="hidden sm:flex items-center justify-center text-white text-6xl ml-5 cursor-pointer transition">
          <span className="font-bold">&lt;</span>
        </div>

        {/* Blog Content */}
        <div className="flex-1 text-center sm:text-left sm:px-5">
          {currentBlog && (
            <>
              <p className="text-[#191818] text-sm sm:text-xl font-semibold leading-snug mb-2">
                {currentBlog.description}
              </p>
             
            </>
          )}
        </div>

        {/* Button */}
        <div className="text-center sm:text-left sm:mr-20">
          <button className="bg-[#125C3A] text-white font-bold py-2 px-5 rounded-full shadow-md hover:bg-[#0e4c2f] transition">
            Read More
          </button>
        </div>

        {/* Right Arrow */}
        <div onClick={nextSlide} className="hidden sm:flex items-center justify-center text-white text-6xl cursor-pointer transition mr-5">
          <span className="font-bold">&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default BlogRoom;
