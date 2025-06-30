"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/home/TopSellingProducts.json");
      const data = await res.json();
      setProductData(data);
    };

    fetchData();
  }, []);

  const visibleProducts = showAll ? productData : productData.slice(0, 4);

  return (
    <section className="py-14 sm:px-10 px-6">
      <h2 className="text-[#125C3A] text-2xl sm:text-3xl font-bold text-center mb-8">
       TOP SELLING PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border border-[#EDE6DB]"
          >
            <div className="relative w-full h-48  rounded overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#191818] mb-1">
              {product.title}
            </h3>
            <p className="text-[#191818] font-medium mb-1">{product.qnt}</p>
            <p className="text-sm text-[#191818]">{product.desc}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#E9C46A] text-[#191818] px-6 py-2 rounded-full hover:text-white hover:bg-[#0e4c2f] transition"
          >
            View More Products
          </button>
        </div>
      )}
    </section>
  );
}
