import Image from "next/image";
import HodogramTimeline from "./components/HodogramTimeline";
import { Great_Vibes } from "next/font/google";
import InvitationNote from "./components/InvitationNote";
import RSVPForm from "./components/RSVPForm";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";

const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#fffdf9] text-gray-800 min-h-screen">
      {/* Hero page */}
      <Hero/>

     
      {/* Pozivnica */}
       <Envelope/>
    
      {/* Hodogram */}
      <section>
        <HodogramTimeline />
       
      </section>

      {/* RSVPForm */}
      <section>
        <RSVPForm />
      </section>
    </main>
  );
}
