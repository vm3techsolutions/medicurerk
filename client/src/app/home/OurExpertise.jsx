// components/ExpertiseGrid.tsx

import Image from 'next/image';

const expertiseData = [
  { name: 'Obstetrics', img: '/assets/home/Expertise1.png' },
  { name: 'Gastroenterology', img: '/assets/home/Expertise2.png' },
  { name: 'Gynaecology', img: '/assets/home/Expertise3.png' },
  { name: 'Andrology', img: '/assets/home/Expertise4.png' },
  { name: 'Urology', img: '/assets/home/Expertise5.png' },
  { name: 'Osteology', img: '/assets/home/Expertise6.png' },
  { name: 'Diabetology', img: '/assets/home/Expertise7.png' },
  { name: 'Cardiology', img: '/assets/home/Expertise8.png' },
  { name: 'Neurology', img: '/assets/home/Expertise9.png' },
];

export default function ExpertiseGrid() {
  return (
    <div className="py-14  text-center bg-white">
      <h2 className=" text-2xl sm:text-3xl font-bold text-[#125C3A] mb-8">OUR EXPERTISE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-16 mx-auto">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="border border-[#EDE6DB] rounded-xl shadow-sm p-5 flex items-center justify-start bg-white hover:shadow-md transition gap-4"
          >
            <Image src={item.img} alt={item.name} width={50} height={50} />
            <p className="text-[#191818] font-semibold text-left">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
