
import { CalendarClock, Church, Utensils } from "lucide-react";

export default function HodogramTimeline() {
  const steps = [
    {
      time: "15:00h",
      title: "Okupljanje",
      location: "Konoba Marjan",
      address: "Senjska ul. 1",
      mapsLink: "https://www.google.com/maps/place/Konoba+Marjan/@43.5085102,16.4345296,17z/data=!3m1!4b1!4m6!3m5!1s0x13355df8d6c1e421:0x7c5dfa958ce9374e!8m2!3d43.5085102!4d16.4345296!16s%2Fg%2F1260wnr_g?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
      icon: <CalendarClock className="w-5 h-5 text-white" />,
    },
    {
      time: "17:30h",
      title: "Vjenčanje",
      location: "Crkva sv. Frane",
      address: "Trg Franje Tuđmana 1, Split",
      mapsLink: "https://www.google.com/maps/place/Crkva+i+samostan+sv.+Frane/@43.5082299,16.4329714,17z/data=!3m1!4b1!4m6!3m5!1s0x13355dff206d0743:0x9b14d65a7529d03f!8m2!3d43.508226!4d16.435541!16s%2Fg%2F11fy95nd67?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D",
      icon: <Church className="w-5 h-5 text-white" />,
    },
    {
      time: "19:30h",
      title: "Svečana večera",
      location: "Restoran Kampus",
        address: "Cvite Fiskovića 3, Split",
      mapsLink: "https://www.google.com/maps/place/Restoran+Kampus+(sala+za+vjenčanja)/@43.5118478,16.4637362,17z/data=!3m1!4b1!4m6!3m5!1s0x13355f5c91dd2509:0xa7d1f84dc7993334!8m2!3d43.5118439!4d16.4663058!16s%2Fg%2F11pcrrkj3s?entry=ttu&g_ep=EgoyMDI1MDYwOS4wIKXMDSoASAFQAw%3D%3D",
      icon: <Utensils className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-serif text-center mb-20 text-gray-800">Hodogram</h2>

      {/* Linija za mobile (s lijeve strane) */}
    <div className="relative md:hidden">
    <div className="absolute left-5 top-0 h-full w-1 bg-[#e5d5c0]" />
    <div className="flex flex-col gap-12 pl-16"> {/* ← povećan razmak */}
        {steps.map((step, index) => (
        <div key={index} className="relative">
            {/* Točkica */}
            <div className="absolute -left-8 top-1.5 w-8 h-8 bg-[#e5d5c0] rounded-full flex items-center justify-center shadow-md border-2 border-white">
            {step.icon}
            </div>
            {/* Tekst */}
            <div className="text-left text-gray-800 px-6">
            <p className="text-base text-gray-500">{step.time}</p>
            <p className="text-xl font-semibold">{step.title}</p>
            <a
                    href={step.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#bfae9e] hover:text-gray-500 transition"
                    >
                    {step.location}
                    </a>
            {step.address && <p className="text-base text-gray-300">{step.address}</p>}
            </div>
        </div>
        ))}
    </div>
    </div>


      {/* Desktop layout */}
      <div className="relative hidden md:block">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#e5d5c0]" />
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="mb-16 flex flex-col md:grid md:grid-cols-3 md:items-center relative"
            >
              {/* Lijevi sadržaj */}
              <div className={`hidden md:flex justify-end pr-4`}>
                {isLeft && (
                  <div className="text-right text-gray-800 max-w-xs">
                    <p className="text-base text-gray-500">{step.time}</p>
                    <p className="text-xl font-semibold">{step.title}</p>
                    <a
                    href={step.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#bfae9e] hover:text-gray-500 transition"
                    >
                    {step.location}
                    </a>
                    {step.address && <p className="text-base text-gray-500">{step.address}</p>}
                  </div>
                )}
              </div>

              {/* Točkica s ikonom */}
              <div className="flex justify-center items-center z-10">
                <div className="w-10 h-10 bg-[#e5d5c0] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  {step.icon}
                </div>
              </div>

              {/* Desni sadržaj */}
              <div className={`hidden md:flex justify-start pl-4`}>
                {!isLeft && (
                  <div className="text-left text-gray-800 max-w-xs">
                    <p className="text-base text-gray-500">{step.time}</p>
                    <p className="text-xl font-semibold">{step.title}</p>
                    <a
                    href={step.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-[#bfae9e] hover:text-gray-500 transition"
                    >
                    {step.location}
                    </a>
                    {step.address && <p className="text-base text-gray-500">{step.address}</p>}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
