"use client";
import Image from "next/image";

const steps = [
  {
    time: "15:00h",
    title: "Okupljanje",
    location: "Konoba Marjan",
    address: "Senjska ul. 1",
    image: "/hodogram/glasses.png",
    mapsLink:
      "https://www.google.com/maps/place/Konoba+Marjan/@43.5085102,16.4345296,17z",
  },
  {
    time: "17:30h",
    title: "Vjenčanje",
    location: "Crkva sv. Frane",
    address: "Trg Franje Tuđmana 1, Split",
    image: "/hodogram/church.png",
    mapsLink:
      "https://www.google.com/maps/place/Crkva+i+samostan+sv.+Frane/@43.5082299,16.4329714,17z",
  },
  {
    time: "19:30h",
    title: "Svečana večera",
    location: "Restoran Kampus",
    address: "Cvite Fiskovića 3, Split",
    image: "/hodogram/cake.png",
    mapsLink:
      "https://www.google.com/maps/place/Restoran+Kampus+(sala+za+vjenčanja)/@43.5118478,16.4637362,17z",
  },
];

export default function HodogramTimeline() {
  return (
    <div
      className="relative py-14 px-4 sm:px-8 bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgrounds/timeline-bc.png')",
      }}
    >
      {/* Title */}
      <h2 className="text-center text-3xl font-bold mb-12 text-[#5a4b3a] drop-shadow-md">
        Hodogram
      </h2>

      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 top-50 transform -translate-x-1/2 w-[2px] h-full bg-[#bfae9e]" />

      <div className="space-y-16">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start md:justify-between relative"
            >
              {/* Left Side */}
              {isLeft && (
                <div className="hidden md:block w-full md:w-5/12 text-right pr-6">
                  <div className="flex justify-end mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={120}
                      height={120}
                      className="rounded-lg object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{step.time}</p>
                  <h3 className="text-lg font-semibold text-[#3e2f1c]">
                    {step.title}
                  </h3>
                  <p className="text-sm">{step.location}</p>
                  <a
                    href={step.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8c7155] underline"
                  >
                    {step.address}
                  </a>
                </div>
              )}

              {/* Mobile */}
              <div className="block md:hidden text-center max-w-sm mx-auto">
                <div className="flex justify-center mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={120}
                    height={120}
                    className="rounded-lg object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">{step.time}</p>
                <h3 className="text-lg font-semibold text-[#3e2f1c]">
                  {step.title}
                </h3>
                <p className="text-sm">{step.location}</p>
                <a
                  href={step.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#8c7155] underline"
                >
                  {step.address}
                </a>
              </div>

              {!isLeft && <div className="hidden md:block w-full md:w-5/12" />}

              {/* Right Side */}
              {!isLeft && (
                <div className="hidden md:block w-full md:w-5/12 text-left pl-6">
                  <div className="flex justify-start mb-4">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={120}
                      height={120}
                      className="rounded-lg object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{step.time}</p>
                  <h3 className="text-lg font-semibold text-[#3e2f1c]">
                    {step.title}
                  </h3>
                  <p className="text-sm">{step.location}</p>
                  <a
                    href={step.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8c7155] underline"
                  >
                    {step.address}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
