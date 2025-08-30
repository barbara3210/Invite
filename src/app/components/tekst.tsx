import Image from "next/image";

export default function Tekst() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/tekst.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover object-center sm:object-top"
        priority
      />
    </section>
  );
}
