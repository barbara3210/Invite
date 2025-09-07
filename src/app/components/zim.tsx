import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end items-center overflow-visible">
      {/* Background image container */}
      <div className="relative w-full flex justify-center items-center flex-grow max-h-[80%] sm:max-h-[70%]">
        <Image
          src="/zim2.jpg"
          alt="Mato i Zrinka"
          fill
          className="object-cover sm:object-contain sm:object-center"
          priority
        />
      </div>

      <div className="-mt-20 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
