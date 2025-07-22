'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CalendarDays, PenLine } from 'lucide-react';

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/data/blog/Blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="py-14 px-5 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="border border-[#EDE6DB] p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer bg-white hover:bg-gray-50">
              {/* Image */}
              <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Date and Writer */}
              <div className="text-sm text-[#191818] flex items-center gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} className="text-[#E9C46A]" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <PenLine size={16} className="text-[#E9C46A]" />
                  {blog.writer}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-[#191818] text-sm mb-2 line-clamp-3">
                {blog.description}
              </p>

              {/* Optional Read More text (not a button) */}
              <button className="bg-[#E9C46A] hover:bg-[#125C3A] hover:text-white text-black font-semibold px-6 py-2 rounded-3xl shadow-md transition">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
