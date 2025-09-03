import Image from 'next/image';

export default function CoreValues() {
  return (
    <section className="bg-white py-14 px-5 md:px-10">

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#125C3A] mb-4"> CORE VALUES</h2>
      <p className="text-center text-[#191818] font-semibold text-base md:text-lg max-w-3xl mx-auto mb-10">
        {/* At R K Medicare, CARE isn’t just what we provide — it’s who we are. Each letter reflects a core value
        that drives our work and defines our commitment to women and children’s health. */}

        To become the most trusted and impactful healthcare partner in specialized 
therapeutic care — in India and beyond — by delivering innovative, affordable, and 
evidence-based solutions that transform lives. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* C - Compassion */}
        <div className="bg-white rounded-xl border border-[#EDE6DB] shadow-sm p-6 text-center">
          <div className="text-[#125C3A] font-bold text-6xl mb-2">C</div>
          <h3 className="font-bold text-lg mb-2">Compassion</h3>
          <p className="text-sm text-[#191818]">
            We lead with empathy. Our products are designed with a deep understanding of the emotional and physical needs of mothers and children, making care more personal, supportive, and humane.
          </p>
        </div>

        {/* A - Accountability */}
        <div className="bg-white rounded-xl border border-[#EDE6DB] shadow-sm p-6 text-center">
          <div className="text-[#E9C46A] font-bold text-6xl mb-2">A</div>
          <h3 className="font-bold text-lg mb-2">Accountability</h3>
          <p className="text-sm text-[#191818]">
            We stand by our quality, our ethics, and our outcomes. Every action we take — from formulation to delivery — is driven by responsibility toward patients, doctors, and partners.
          </p>
        </div>

        {/* R - Reliability */}
        <div className="bg-white rounded-xl border border-[#EDE6DB] shadow-sm p-6 text-center">
          <div className="text-[#125C3A] font-bold text-6xl mb-2">R</div>
          <h3 className="font-bold text-lg mb-2">Reliability</h3>
          <p className="text-sm text-[#191818]">
            We deliver what we promise. With consistent quality, timely supply, and effective therapeutic outcomes, we build lasting trust among healthcare professionals and end users.
          </p>
        </div>

        {/* E - Excellence */}
        <div className="bg-white rounded-xl border border-[#EDE6DB] shadow-sm p-6 text-center">
          <div className="text-[#E9C46A] font-bold text-6xl mb-2">E</div>
          <h3 className="font-bold text-lg mb-2">Excellence</h3>
          <p className="text-sm text-[#191818]">
            We pursue excellence in everything — from innovation and research to customer experience. We aim not just to meet industry standards, but to set them.
          </p>
        </div>
      </div>
    </section>
  );
}
