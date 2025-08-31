import RSVPForm from "./components/RSVPForm";
import Hero from "./components/Hero";
import Zim from "./components/zim";
import Tekst from "./components/tekst";
import Hod from "./components/hod";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="bg-[#ffffff] text-gray-800 min-h-screen">
      {/* Hero page */}
      <Hero />

      <Zim/>

      <Tekst/>

      <Hod/>

      <Contact/>

      <section>
        <RSVPForm />
      </section>
    </main>
  );
}
