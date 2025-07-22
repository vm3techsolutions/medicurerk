"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCards() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("/data/products/Products.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Products JSON is not an array!", data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setProducts([]);
      });
  }, []);

  const truncateDescription = (text, wordLimit = 10) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const nextImage = () => {
    if (selectedProduct?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct?.images?.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="py-10 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.isArray(products) &&
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#EDE6DB] hover:shadow-xl transition duration-300 flex flex-col"
            >
              <div className="relative w-full h-[250px] bg-white flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-lg font-bold text-[#191818] mb-1">
                  {product.title}
                </h1>
                <span className="text-md text-[#191818] mb-1 font-semibold">
                  {product.quantity}
                </span>
                <span className="text-sm text-[#191818] mb-4">
                  {truncateDescription(product.desc)}
                </span>

                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="bg-[#E9C46A] hover:bg-[#125C3A] hover:text-white text-black font-semibold px-6 py-2 rounded-3xl shadow-md transition"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EDE6DBA6] bg-opacity-65 sm:p-20 p-5">
          <div className="bg-white w-full max-w-5xl p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="fixed top-3 right-4 text-3xl font-bold text-[#191818]"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Left with Image Slider */}
              <div className="flex flex-col items-center md:w-1/2 relative">
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-2/2 text-2xl font-bold bg-[#E9C46A] shadow px-2 rounded-full"
                >
                  &#8592;
                </button>

                <Image
                  src={
                    selectedProduct.images
                      ? selectedProduct.images[currentImageIndex]
                      : selectedProduct.image
                  }
                  alt={selectedProduct.title}
                  width={350}
                  height={350}
                  className="object-contain"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-2/2 text-2xl font-bold bg-[#E9C46A] shadow px-2 rounded-full"
                >
                  &#8594;
                </button>

                <h2 className="text-xl font-bold text-[#191818] mt-4 text-center">
                  {selectedProduct.title}
                </h2>
                <p className="text-sm font-medium text-[#555]">
                  {selectedProduct.quantity}
                </p>

                <div className="text-md text-[#191818] whitespace-pre-wrap mt-4 md:mt-2 px-4 text-center">
                  {selectedProduct.desc}
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-1/2 space-y-4">
                {selectedProduct.details?.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold text-[#191818] mb-1">
                      {section.title}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-[#191818] space-y-1">
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
