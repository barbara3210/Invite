export default function InvitationNote() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Ručno crtani SVG valovi kao pozadina */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fdf6f0"
            d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,213.3C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Glavni sadržaj */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center border border-[#e5d5c0]">
        <h2 className="text-3xl font-serif text-[#6b4c3b] mb-4">Pozivamo Vas</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          S velikom radošću Vas pozivamo da budete dio našeg posebnog dana.
          Pridružite nam se u proslavi ljubavi, smijeha i zajedništva <br/>
          21. studenog 2025.
        </p>
      </div>
    </section>
  );
}
