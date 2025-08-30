import HodogramTimeline from "./components/HodogramTimeline";
import RSVPForm from "./components/RSVPForm";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Zim from "./components/zim";
import Tekst from "./components/tekst";
import Hod from "./components/hod";

export default function Home() {
  return (
    <main className="bg-[#fffdf9] text-gray-800 min-h-screen">
      {/* Hero page */}
      <Hero />

      <Zim/>

      <Tekst/>

      <Hod/>

      {/* Pozivnica 
      <Envelope />*/}

      {/* Hodogram
      <section>
        <HodogramTimeline />
      </section> */}

      {/* RSVPForm */}
      <section>
        <RSVPForm />
      </section>
    </main>
  );
}
