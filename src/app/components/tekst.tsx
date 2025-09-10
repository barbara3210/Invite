import Image from "next/image";

export default function Tekst() {
  return (
    <section className="relative h-[100dvh] w-full flex justify-center items-center overflow-hidden">
      <Image
        src="/pismo.JPG"
        alt="Pismo"
        width={1000}  
        height={2000}  
        className="max-h-[80vh] w-auto object-contain"
        priority
      />
    </section>
  );
}
