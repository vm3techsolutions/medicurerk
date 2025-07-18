// components/StatsSection.tsx

import Image from 'next/image';

const stats = [
  {
    imgSrc: '/assets/home/About1.png', 
    value: '15+',
    label: 'Countries Reached',
  },
  {
    imgSrc: '/assets/home/About2.png',
    value: '10+',
    label: 'Years Of Experience',
  },
  {
    imgSrc: '/assets/home/About3.png',
    value: '25+',
    label: 'Products',
  },
  {
    imgSrc: '/assets/home/About4.png',
    value: '1K+',
    label: 'Happy Customers',
  },
];

export default function StatsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4  text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="border-2 border-[#E9C46A] rounded-full h-[20vh] w-[20vh] flex items-center justify-center">
  <Image
    src={stat.imgSrc}
    alt={stat.label}
    width={80}
    height={80}
    className="object-contain"
  />
</div>

            <h3 className="text-3xl font-bold text-[#191818]">{stat.value}</h3>
            <p className="text-[#191818] font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}