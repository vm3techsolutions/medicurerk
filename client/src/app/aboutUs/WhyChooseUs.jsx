import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-14 px-5 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row items-start gap-12">
        
        {/* Left Content Section */}
        <div className="md:w-2/3">
          <h2 className="text-[#125C3A] text-xl md:text-3xl font-bold mb-4">WHY CHOOSE US ?</h2>
          
          <p className="text-[#191818] mb-8 ">
            {/* At R K Medicare, we are committed to delivering healthcare solutions that matter especially in the
            sensitive areas of female and pediatric care. Here’s what makes us stand out: */}

            At R K Medicare, we are committed to delivering healthcare solutions that matter — especially in the sensitive areas of female and pediatric care. Here’s what makes us stand out:
          </p>

          <div className="space-y-8 text-sm text-[#191818] ">
            {/* 01 */}
            <div>
              <div className="flex gap-3 items-start">
                <span className="text-[#E9C46A] font-bold text-5xl">01</span>
                <div>
                  <h3 className="font-bold text-base">Problem-Solving Products</h3>
                  <p>
                    {/* Specializing in key fields: Obstetrics, Gastroenterology, 
Gynaecology, Andrology, Urology, Diabetology, Cardiology, and Neurology. */}

We develop need-based, clinically relevant formulations that address real gaps in female and pediatric healthcare — not just products, but purposeful solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div>
              <div className="flex gap-3 items-start">
                <span className="text-[#125C3A] font-bold text-5xl">02</span>
                <div>
                  <h3 className="font-bold text-base">Great Patient Compliance</h3>
                  <p>
                   {/* Products grounded in science, backed by trust.  */}

                   Our products are designed for ease, comfort, and better adherence — with pleasant taste profiles, convenient formats, and patient-friendly dosing.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 */}
            <div>
              <div className="flex gap-3 items-start">
                <span className="text-[#E9C46A] font-bold text-5xl">03</span>
                <div>
                  <h3 className="font-bold text-base">Cost-Effective Offerings</h3>
                  <p>
                    {/* Putting people before profit.  */}

                    We combine affordability with therapeutic value, ensuring access to quality healthcare without compromising effectiveness or safety.
                  </p>
                </div>
              </div>
            </div>

            {/* 04 */}
            <div>
              <div className="flex gap-3 items-start">
                <span className="text-[#125C3A] font-bold text-5xl">04</span>
                <div>
                  <h3 className="font-bold text-base">High-Quality Standards</h3>
                  <p>
                     {/* Making advanced healthcare affordable for all. */}

                     Every product is manufactured with stringent quality controls through reputed facilities like Akums, Hetero, and Synokem — ensuring safety, purity, and consistency in every dose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

     {/* Right Image Section */}
<div className="md:w-1/3 flex flex-col gap-2 relative items-center ml-8 mr:ml-0">

  {/* Green-Yellow Circle – Centered relative to full image section */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#125C3A] z-20 border-[6px] border-[#E9C46A]" />

  {/* Top Image */}
  <div className="relative sm:w-full sm:h-[45vh] h-[40vh] w-[40vh] rounded-t-[60px] overflow-hidden">
    <Image
      src="/assets/about/WhyChoose1.png"
      alt="Doctor with patient"
      layout="fill"
      objectFit="cover"
      className="rounded-tr-[60px]"
    />
  </div>

  {/* Bottom Images */}
  <div className="flex gap-2 sm:h-[45vh] h-[35vh] w-full">
    <div className="relative flex-1 rounded-bl-[60px] overflow-hidden">
      <Image
        src="/assets/about/WhyChoose2.png"
        alt="Child eating"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="relative flex-1 rounded-br-[60px] overflow-hidden">
      <Image
        src="/assets/about/WhyChoose3.png"
        alt="Medicine pills"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
