import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slika preko cijelog ekrana, ali fokusirana na sredinu */}
      <Image
        src="/home.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover object-center sm:object-top"
        priority
      />

      {/* Tekst centriran gore horizontalno 
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center px-4">
        <h1 className={`text-5xl sm:text-8xl ${greatVibes.className}`}>
          Zrinka &
        </h1>
        <h1 className={`text-5xl sm:text-8xl ${greatVibes.className}`}>Mato</h1>
        <p className="text-2xl sm:text-4xl mt-2">21.11.2025.</p>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #EAE3DF 100%)",
        }}
      /> */}
    </section>
  );
}
