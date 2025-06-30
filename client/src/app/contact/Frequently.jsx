'use client';

import { useState, useEffect } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" mx-auto py-14 px-4 md:px-16">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="divide-y-2 divide-[#EDE6DB]">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full text-left py-4 px-4 font-semibold text-[#191818] hover:bg-gray-100 flex justify-between items-center"
            >
              <span className='text-xl'>{index + 1}. {item.question}</span>
              <span className=''>{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-8 pb-2 mt-1 text-[#191818] text-md">
                {item.answer ? item.answer : 'Answer coming soon.'}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch('/data/contact/Frequently.json')
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, []);

  return <Accordion items={faqData} />;
}
