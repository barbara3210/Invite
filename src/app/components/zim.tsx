import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end items-center overflow-visible">
      {/* Background image container */}
      <div className="relative flex justify-center items-center flex-grow max-h-[50%] sm:max-h-[40%] w-full">
        <Image
          src="/zim.jpg"
          alt="Mato i Zrinka"
          width={1000}
          height={1100}
          className="object-contain max-w-[85%] sm:max-w-[70%] h-auto"
          priority
        />
      </div>

      {/* Hod overlapped closer to image */}
      <div className="-mt-12 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
