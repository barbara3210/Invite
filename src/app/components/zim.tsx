import Image from "next/image";
import Hod from "./hod";

export default function Zim() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <Image
        src="/zim2.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-5 w-full bg-white/80">
        <Hod />
      </div>
    </section>
  );
}
