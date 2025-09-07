import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative h-[100dvh] w-full flex justify-center items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/zim2.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover sm:object-contain"
        priority
      />

      {/* Grid pinned to bottom */}
      <div className="absolute bottom-4 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
