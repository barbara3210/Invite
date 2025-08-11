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
    <div className="relative py-10 px-4 sm:px-8">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#bfae9e]" />

      <div className="space-y-16">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start relative"
            >
              {/* Left side - content or image */}
              <div className={`w-full md:w-5/12 ${isLeft ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                {isLeft ? (
                  <div>
                    <p className="text-sm text-gray-500">{step.time}</p>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
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
                ) : (
                  <div className="flex justify-center md:justify-start">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={220}
                      height={220}
                      className="rounded-lg max-w-[75%] md:max-w-[220px] object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Center dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#8c7155] w-4 h-4 rounded-full z-10" />

              {/* Right side - image or content */}
              <div className={`w-full md:w-5/12 ${isLeft ? 'pl-6 text-left' : 'pr-6 text-right'}`}>
                {isLeft ? (
                  <div className="flex justify-center md:justify-end">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={220}
                      height={220}
                      className="rounded-lg max-w-[75%] md:max-w-[220px] object-contain"
                    />
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-500">{step.time}</p>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
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

              {/* Mobile dot */}
              <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 bg-[#8c7155] w-4 h-4 rounded-full z-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}