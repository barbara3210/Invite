import Image from "next/image";
import Link from "next/link";

export default function Hod() {
  const items = [
    {
      src: "/ho1.jpg",
      alt: "Lokacija 1",
      href: "https://maps.app.goo.gl/oPhmvDMewjva6JJP6",
    },
    {
      src: "/ho2.jpg",
      alt: "Lokacija 2",
      href: "https://maps.app.goo.gl/hAjTMcAvTLTBJdkX6",
    },
    {
      src: "/ho3.jpg",
      alt: "Lokacija 3",
      href: 'https://maps.app.goo.gl/XMwBvQMdcZcdNG81A',
    },
  ];

  return (
    <section className=" w-full py-10 px-6 bg-[#FFFFFF]">
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-2 max-w-3xl mx-auto justify-items-center">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-35 h-55 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
