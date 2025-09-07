import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-end items-center overflow-visible">
      {/* Background image container */}
      <div className="relative flex justify-center items-center flex-grow max-h-[50%] sm:max-h-[40%] w-full">
        <Image
  src="/zim1.jpg"
  alt="Mato i Zrinka"
  width={900}
  height={700}
  className="object-contain max-w-[90%] sm:max-w-[70%] h-auto"
  priority
/>

      </div>

      <div className=" mb-20 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
