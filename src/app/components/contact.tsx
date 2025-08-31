import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <Image
        src="/kontakt.jpg"
        alt="kontakt"
        fill
        className="object-cover"
        priority
      />
       {/* Strelica koja sugerira scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Image
          src="/strelica.png"  
          alt="Scroll dolje"
          width={90}          
          height={90}         
        />
      </div>
    </section>
  );
}
