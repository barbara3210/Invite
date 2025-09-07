import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative h-[100dvh] w-full flex justify-center items-center overflow-hidden">
      {/* Responsive image */}
      <Image
        src="/kontakt.jpg"
        alt="kontakt"
        fill
        className="object-cover object-center sm:object-contain"
        priority
      />

      {/* Scroll hint arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Image
          src="/strelica.png"
          alt="Scroll down"
          width={50}
          height={50}
          className="sm:w-20 sm:h-20"
        />
      </div>
    </section>
  );
}
