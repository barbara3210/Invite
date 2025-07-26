import Image from "next/image";
import HodogramTimeline from "./components/HodogramTimeline";
import { Great_Vibes } from "next/font/google";
import InvitationNote from "./components/InvitationNote";
import RSVPForm from "./components/RSVPForm";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#fffdf9] text-gray-800 min-h-screen">
      {/* Hero sekcija */}
      <section className="relative h-screen w-full">
  <Image
    src="/prosidba.jpeg"
    alt="Mato i Zrinka"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-gray bg-opacity-20" />

 <section className="absolute inset-0 z-10 flex items-start justify-center pt-32 px-4 text-white animate-fade-in">
  <div className="text-center">
    <h1 className={`text-7xl ${greatVibes.className}`}>Zrinka &</h1>
    <h1 className={`text-7xl ${greatVibes.className}`}>Mato</h1>
    <p className="text-2xl mt-2">21.11.2025.</p>
  </div>
</section>


  {/* Gradient overlay na dnu */}
  <div
    className="absolute bottom-0 left-0 w-full h-40"
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fdf6f0 100%)",
    }}
  />
</section>


      
      {/* Pozivamo Vas */}
      <InvitationNote />

      {/* Hodogram */}
      <section >
        <HodogramTimeline />
        <div
          className="absolute bottom-0 left-0 w-full h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fcf9f6 100%)",
          }}
        />
      </section>

       {/* RSVPForm */}
      <section>
        <RSVPForm />
      </section>
    </main>
  );
}
