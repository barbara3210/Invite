import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden">
      {/* Responsive hero image */}
      <div className="relative w-full flex-grow flex justify-center items-center">
        <Image
          src="/dvajspete1.JPG"
          alt="Mato i Zrinka"
          fill
          className="object-cover sm:object-contain sm:object-center"
          priority
        />
      </div>

       {/* Arrow for scroll hint */}
      <div className="mb-4 sm:mb-8 -translate-y-10">
        <Image
          src="/strelica.png"
          alt="Scroll dolje"
          width={50}
          height={50}
          className="sm:w-16 sm:h-16"
        />
      </div>
    </section>
  );
}
