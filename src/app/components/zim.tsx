import Image from "next/image";

export default function Zim() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slika preko cijelog ekrana, ali fokusirana na sredinu */}
      <Image
        src="/zim2.jpg"
        alt="Mato i Zrinka"
        fill
        className="object-cover object-center sm:object-top"
        priority
      />
    </section>
  );
}
