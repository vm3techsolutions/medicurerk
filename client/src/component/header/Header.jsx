"use client";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-14 max-w-7xl">
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image  
               src="/assets/header/rkLogo.png" alt="Logo" className="h-15 w-auto"   width={120} height={60} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 text-xl -ml-10">
            <Link href="/about" className="text-[#191818] font-bold transition">
              About Us
            </Link>
            <Link href="/product" className="text-[#191818] font-bold transition">
              Product
            </Link>
            <Link href="/blog" className="text-[#191818] font-bold transition">
              Blog
            </Link>
            <Link href="/contact" className="text-[#191818] font-bold transition">
              Contact Us
            </Link>
          </nav>

          {/* Download button on the right (desktop) */}
          <div className="hidden md:flex">
            <Link
              href="/brochure.pdf"
              download
              className="flex items-center gap-2 bg-[#E9C46A] text-[#191818] font-bold px-4 py-2 rounded-3xl transition"
            >
              <Download size={18} />
              Download Brochure
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-[#191818]">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center text-lg font-semibold">
          <Link href="/about" className="block text-[#191818]" onClick={toggleMobileMenu}>
            About Us
          </Link>
          <Link href="/product" className="block text-[#191818]" onClick={toggleMobileMenu}>
            Product
          </Link>
          <Link href="/blog" className="block text-[#191818]" onClick={toggleMobileMenu}>
            Blog
          </Link>
          <Link href="/contact" className="block text-[#191818]" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
          <a
            href="/brochure.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 bg-[#E9C46A] text-[#191818] px-4 py-2 rounded-3xl"
            onClick={toggleMobileMenu}
          >
            <Download size={18} />
            Download Brochure
          </a>
        </div>
      )}
    </header>
  );
}
