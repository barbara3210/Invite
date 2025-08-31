import Image from "next/image";

export default function Tekst() {
  return (
    <section className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      <Image
        src="/pismo.jpg"
        alt="Pismo"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
