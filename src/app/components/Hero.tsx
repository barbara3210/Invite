import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Responsive hero slika */}
      <div className="relative h-full w-full sm:h-screen sm:w-auto flex justify-center">
        <Image
          src="/dvajspete.jpg"
          alt="Mato i Zrinka"
          fill
          className="object-cover object-center sm:object-contain"
          priority
        />
      </div>

      {/* Strelica koja sugerira scroll */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Image
          src="/strelica.png"
          alt="Scroll dolje"
          width={60}   
          height={60}
          className="sm:w-20 sm:h-20" 
        />
      </div>
    </section>
  );
}
