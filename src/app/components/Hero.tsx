import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex justify-center items-center overflow-hidden">
      {/* Fullscreen image */}
      <Image
        src="/dvajspete.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Arrow for scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
