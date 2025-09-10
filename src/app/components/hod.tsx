import Image from "next/image";
import Link from "next/link";

export default function Hod() {
  const items = [
    {
      src: "/ho1.JPG",
      alt: "Lokacija 1",
      href: "https://maps.app.goo.gl/oPhmvDMewjva6JJP6",
    },
    {
      src: "/ho2.JPG",
      alt: "Lokacija 2",
      href: "https://maps.app.goo.gl/hAjTMcAvTLTBJdkX6",
    },
    {
      src: "/ho3.JPG",
      alt: "Lokacija 3",
      href: 'https://maps.app.goo.gl/XMwBvQMdcZcdNG81A',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto justify-items-center p-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-22 h-22 overflow-hidden rounded-sm shadow-lg hover:scale-105 transition-transform duration-300">
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
  );
}
