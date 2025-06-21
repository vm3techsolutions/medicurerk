"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#EDE6DB] text-[#191818]">
      <div className=" mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 gap-12 sm:pl-10 ">
        
        {/* Logo & Socials */}
        <div className="flex flex-col items-start gap-4 sm:pl-5">
          <Link href="/">
            <Image
              src="/assets/footer/footerLogo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-40 h-auto"
            />
          </Link>
          <div className="flex gap-4 text-2xl text-[#125C3A]">
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaYoutube /></Link>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#191818]">Pages</h3>
          <ul className="space-y-2 text-[#191818]">
            <li><Link href="/" className="">Home</Link></li>
            <li><Link href="/about" className="">About Us</Link></li>
            <li><Link href="/product" className="">Product</Link></li>
            <li><Link href="/blog" className="">Blog</Link></li>
            <li><Link href="/contact" className="">Contact Us</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#191818]">Quick Links</h3>
          <ul className="space-y-2 text-[#191818]">
            <li><Link href="#" className="">Privacy Policy</Link></li>
            <li><Link href="#" className="">Terms & Conditions</Link></li>
            <li><Link href="#" className="">Disclaimer</Link></li>
            <li><Link href="#" className="">Cookie Policy</Link></li>
          </ul>
        </div>

       {/* Contact Us */}
<div>
  <h3 className="font-semibold text-lg mb-3 text-[#191818]">Contact Us</h3>
  <ul className="space-y-4 text-[#191818]">
    <li className="flex items-center gap-2">
      <FiPhone className="text-[#125C3A]"/>
      <a href="tel:+91111111111" className="hover:underline">
        +91 123456789
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FiMail className="text-[#125C3A]"/>
      <a href="mailto:info@ekmedical.com" className="hover:underline">
        info@rkmedical.com
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FiMapPin className="text-[#125C3A]"/>
      <Link
        href="https://www.google.com/maps/place/VM3+Tech+Solutions+LLP"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Pune, Maharashtra
      </Link>
    </li>
  </ul>
</div>
      </div>

      {/* Bottom Bar */}
<div className="bg-[#125C3A] text-white text-center py-1 text-md">
  Designed & Developed By:{" "}
  <Link
    href="https://vm3techsolution.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold  transition"
  >
    VM3 Tech Solutions LLP
  </Link>
</div>

    </footer>
  );
}
