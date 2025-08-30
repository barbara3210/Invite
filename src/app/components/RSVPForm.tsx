"use client";
import { useState } from "react";

export default function RSVPForm() {
  // Stanja za broj odraslih, djece i male djece
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [toddlers, setToddlers] = useState(0);

  // Polja za imena
  const [adultNames, setAdultNames] = useState<string[]>([""]);
  const [kidNames, setKidNames] = useState<string[]>([]);
  const [toddlerNames, setToddlerNames] = useState<string[]>([]);

  // Validacija imena (true = greška)
  const [adultNameErrors, setAdultNameErrors] = useState<boolean[]>([]);
  const [kidNameErrors, setKidNameErrors] = useState<boolean[]>([]);
  const [toddlerNameErrors, setToddlerNameErrors] = useState<boolean[]>([]);

  // Je li forma poslana
  const [submitted, setSubmitted] = useState(false);

  // Pomoćna funkcija za prilagodbu broja polja imena
  const resizeNamesArray = (
    arr: string[],
    setArr: (names: string[]) => void,
    newSize: number
  ) => {
    const newArr = [...arr];
    while (newArr.length < newSize) newArr.push("");
    while (newArr.length > newSize) newArr.pop();
    setArr(newArr);
  };

  // Provjera da li su polja prazna
  const validateNames = (
    names: string[],
    setErrors: (errs: boolean[]) => void
  ) => {
    const errors = names.map((name) => name.trim() === "");
    setErrors(errors);
    return errors.some((e) => e);
  };

  // Slanje forme
  const handleSubmit = async () => {
    const hasAdultErrors = validateNames(adultNames, setAdultNameErrors);
    const hasKidErrors = validateNames(kidNames, setKidNameErrors);
    const hasToddlerErrors = validateNames(toddlerNames, setToddlerNameErrors);

    if (hasAdultErrors || hasKidErrors || hasToddlerErrors) {
      return;
    }

    const names = [
      ...adultNames.map((name) => ({ name: name.trim(), category: "Odrasli" })),
      ...kidNames.map((name) => ({
        name: name.trim(),
        category: "Dijete 6-12",
      })),
      ...toddlerNames.map((name) => ({
        name: name.trim(),
        category: "Dijete do 6",
      })),
    ];

    setSubmitted(true);

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ names }),
      });
    } catch (error) {
      console.error("Greška pri slanju:", error);
    }
  };

  // --- PRIKAZ ZAHVALE AKO JE FORMA POSLANA ---
  if (submitted) {
    return (
      <section className="relative py-20 px-6 bg-[#ffffff] min-h-[300px] flex items-center justify-center">
        <div className="max-w-xl mx-auto bg-white backdrop-blur-md rounded-3xl shadow-lg p-10 text-center ">
          <h2 className="text-3xl font-serif text-[#6B4F4F] mb-4">
            Hvala Vam! 🎉
          </h2>
          <p className="font-sans text-lg text-[#5A3E36]">
            Vaša potvrda dolaska je zaprimljena. Veselimo se druženju! ❤️
          </p>
        </div>
      </section>
    );
  }

  // --- GLAVNA FORMA ---
  return (
    <section className="bg-[#ffffff] py-20 px-4">
      <div className="max-w-3xl mx-auto bg-[#ffffff] border-[#1B1B1B] rounded-2xl shadow-lg p-10">
        {/* Naslov forme */}
        <h2 className="text-3xl font-sans text-center mb-10 text-[#1B1B1B]">
          Potvrda dolaska
        </h2>

        {/* Dio s brojačima odraslih/djece */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 mb-12 text-center">
          {[
            {
              label: "Odrasli",
              value: adults,
              setValue: setAdults,
              names: adultNames,
              setNames: setAdultNames,
            },
            {
              label: "Djeca 6–12 god.",
              value: kids,
              setValue: setKids,
              names: kidNames,
              setNames: setKidNames,
            },
            {
              label: "Djeca do 6 god.",
              value: toddlers,
              setValue: setToddlers,
              names: toddlerNames,
              setNames: setToddlerNames,
            },
          ].map(({ label, value, setValue, names, setNames }) => (
            <div
              key={label}
              className="font-sans flex flex-col items-center rounded-xl p-4 mb-6 sm:mb-0 min-w-[250px]"
            >
              <p className="text-base sm:text-lg text-[#1B1B1B] font-semibold mb-3">
                {label}
              </p>
              <div className="flex items-center justify-center gap-4">
                {/* Gumb minus */}
                <button
                  onClick={() => {
                    const newVal = Math.max(0, value - 1);
                    setValue(newVal);
                    resizeNamesArray(names, setNames, newVal);
                  }}
                  className="w-10 h-10 bg-[#E5989B] rounded-full text-white 
             text-2xl font-bold shadow-sm hover:bg-[#D67A7A] 
             transition flex items-center justify-center leading-none"
                  aria-label={`Smanji broj ${label}`}
                  type="button"
                >
                  &minus;
                </button>

                {/* Vrijednost */}
                <span className="text-2xl font-semibold text-[#5A3E36] w-10 text-center">
                  {value}
                </span>

                {/* Gumb plus */}
                <button
                  onClick={() => {
                    const newVal = value + 1;
                    setValue(newVal);
                    resizeNamesArray(names, setNames, newVal);
                  }}
                  className="w-10 h-10 bg-[#99C1DE] rounded-full text-white 
             text-2xl font-bold shadow-sm hover:bg-[#6B9AC4] 
             transition flex items-center justify-center leading-none"
                  aria-label={`Povećaj broj ${label}`}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Input polja za imena */}
        <div className="space-y-6 mb-10">
          {/* Odrasli */}
          {adultNames.map((name, i) => (
            <div key={`adult-${i}`} className="flex flex-col">
              <input
                value={name}
                onChange={(e) => {
                  const newNames = [...adultNames];
                  newNames[i] = e.target.value;
                  setAdultNames(newNames);
                }}
                className="font-sans w-full p-2 border border-[#E5989B] rounded-lg bg-white text-[#5A3E36]"
                placeholder={`Odrasli ${i + 1} - ime i prezime`}
              />
              {adultNameErrors[i] && (
                <p className="font-sans text-sm text-red-600 mt-1">
                  Molimo unesite ime gosta.
                </p>
              )}
            </div>
          ))}

          {/* Djeca 6–12 */}
          {kidNames.map((name, i) => (
            <div key={`kid-${i}`} className="flex flex-col">
              <input
                value={name}
                onChange={(e) => {
                  const newNames = [...kidNames];
                  newNames[i] = e.target.value;
                  setKidNames(newNames);
                }}
                className="font-sans w-full p-2 border border-[#F5C6AA] rounded-lg bg-white text-[#5A3E36]"
                placeholder={`Dijete ${i + 1} - ime i prezime`}
              />
              {kidNameErrors[i] && (
                <p className="font-sans text-sm text-red-600 mt-1">
                  Molimo unesite ime gosta.
                </p>
              )}
            </div>
          ))}

          {/* Djeca do 6 */}
          {toddlerNames.map((name, i) => (
            <div key={`toddler-${i}`} className="flex flex-col">
              <input
                value={name}
                onChange={(e) => {
                  const newNames = [...toddlerNames];
                  newNames[i] = e.target.value;
                  setToddlerNames(newNames);
                }}
                className="font-sans w-full p-2 border border-[#F5C6AA] rounded-lg bg-white text-[#5A3E36]"
                placeholder={`Malo dijete ${i + 1} - ime i prezime`}
              />
              {toddlerNameErrors[i] && (
                <p className="font-sans text-sm text-red-600 mt-1">
                  Molimo unesite ime gosta.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Gumb za slanje */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="font-sans inline-block px-8 py-4 bg-[#adcde4] text-[#1B1B1B] rounded-2xl text-lg font-semibold hover:bg-[#D67A7A] shadow-lg transition"
          >
            Potvrdi dolazak
          </button>
        </div>
      </div>
    </section>
  );
}
