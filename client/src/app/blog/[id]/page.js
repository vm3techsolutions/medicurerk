'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CalendarDays, PenLine } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/data/blog/Blog.json')
      .then(res => res.json())
      .then(data => {
        const matched = data.find(item => item.id === params.id);
        if (!matched) return notFound();
        setBlog(matched);

        // For related blogs: get next 3 blogs after the current one
        const currentIndex = data.findIndex(item => item.id === params.id);
        const nextBlogs = data.slice(currentIndex + 1, currentIndex + 4);
        setBlogs(nextBlogs);
      });
  }, [params.id]);

  if (!blog) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      {/* Blog Banner Image */}
      <div className="relative w-full sm:h-[80vh] h-[30vh] mb-6 rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Date & Writer */}
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

      {/* Title, Description & Content */}
      <h1 className="sm:text-4xl text-xl font-bold mb-2">{blog.title}</h1>
      <p className="text-[#191818] text-md mb-4">{blog.description}</p>
      <p className="text-[#191818] leading-7 whitespace-pre-line text-md">{blog.content}</p>

      {/* Related Blog Cards */}
      {blogs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">
            YOU MUST READ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <Link key={blog.id} href={`/blog/${blog.id}`}>
                <div className="border border-[#EDE6DB] p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer bg-white hover:bg-gray-50">
                  {/* Card Image */}
                  <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Card Date & Writer */}
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

                  {/* Card Title & Description */}
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <p className="text-[#191818] text-sm mb-2 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Read More Text */}
                 <button className="bg-[#E9C46A] hover:bg-[#125C3A] hover:text-white text-black font-semibold px-6 py-2 rounded-3xl shadow-md transition">
                Read More
              </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
