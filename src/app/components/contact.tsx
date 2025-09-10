import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden">
      {/* Responsive image */}
      <div className="relative w-full flex-grow flex justify-center items-center">
        <Image
          src="/kontakt.jpg"
          alt="kontakt"
          fill
          className="object-cover object-center sm:object-contain sm:object-center"
          priority
        />
      </div>

      {/* Scroll hint arrow */}
      <div className="mb-4 sm:mb-8 -translate-y-10 animate-bounce">
        <Image
          src="/strelica.png"
          alt="Scroll down"
          width={80}
          height={80}
          className="sm:w-20 sm:h-20"
        />
      </div>
    </section>
  );
}
