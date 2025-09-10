import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center overflow-visible">
      {/* Background image container */}
      <div className="relative flex justify-center w-full mt-4">
        <Image
          src="/zim.jpg"
          alt="Mato i Zrinka"
          width={800}
          height={900}
          className="max-h-[60vh] sm:max-h-[70vh] w-auto object-contain"
          priority
        />
      </div>

      {/* Hod overlapped closer to image */}
      <div className="-mt-4 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
