"use client";
import { useState } from "react";

export default function RSVPForm() {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [toddlers, setToddlers] = useState(0);

  const [adultNames, setAdultNames] = useState<string[]>([""]);
  const [kidNames, setKidNames] = useState<string[]>([]);
  const [toddlerNames, setToddlerNames] = useState<string[]>([]);

  // Errors po kategorijama
  const [adultNameErrors, setAdultNameErrors] = useState<boolean[]>([]);
  const [kidNameErrors, setKidNameErrors] = useState<boolean[]>([]);
  const [toddlerNameErrors, setToddlerNameErrors] = useState<boolean[]>([]);

  const [submitted, setSubmitted] = useState(false);

  // Resize funkcija za imena (isto koristiš)
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

  // Validacija imena - vraća true ako ima greške, false ako nema
  const validateNames = (names: string[], setErrors: (errs: boolean[]) => void) => {
    const errors = names.map((name) => name.trim() === "");
    setErrors(errors);
    return errors.some((e) => e);
  };

  // Handle submit
  const handleSubmit = async () => {
    const hasAdultErrors = validateNames(adultNames, setAdultNameErrors);
    const hasKidErrors = validateNames(kidNames, setKidNameErrors);
    const hasToddlerErrors = validateNames(toddlerNames, setToddlerNameErrors);

    if (hasAdultErrors || hasKidErrors || hasToddlerErrors) {
      return;
    }

    const guests = [
      ...adultNames.map((name) => ({ name: name.trim(), category: "Odrasli" })),
      ...kidNames.map((name) => ({ name: name.trim(), category: "Dijete 5-14" })),
      ...toddlerNames.map((name) => ({ name: name.trim(), category: "Dijete do 5" })),
    ];

    setSubmitted(true);

    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guests }),
      });
    } catch (error) {
      console.error("Greška pri slanju:", error);
    }
  };

  if (submitted) {
    return (
      <section className="relative py-20 px-6 bg-[#fdf6f0] min-h-[300px] flex items-center justify-center">
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-10 text-center border border-[#e5d5c0]">
          <h2 className="text-3xl font-serif text-[#6b4c3b] mb-4">Hvala vam! 🎉</h2>
          <p className="text-lg text-gray-700">Vaša potvrda dolaska je zaprimljena. Veselimo se druženju! ❤️</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 px-6 bg-[#fdf6f0]">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-8 sm:p-12 border border-[#e5d5c0]">
        <h2 className="text-3xl font-serif text-[#6b4c3b] mb-8 text-center">Potvrda dolaska</h2>

        {/* Brojači */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-8 mb-12 text-center">
          {[
            { label: "Odrasli (od 15 god.)", value: adults, setValue: setAdults, names: adultNames, setNames: setAdultNames },
            { label: "Djeca 5–14 god.", value: kids, setValue: setKids, names: kidNames, setNames: setKidNames },
            { label: "Djeca do 5 god.", value: toddlers, setValue: setToddlers, names: toddlerNames, setNames: setToddlerNames },
          ].map(({ label, value, setValue, names, setNames }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-[#e5d5c0] p-5 mb-6 sm:mb-0 min-w-[250px]"
            >
              <p className="text-base sm:text-lg text-[#6b4c3b] font-semibold mb-4">{label}</p>
              <div className="flex items-center justify-center gap-5">
                <button
                  onClick={() => {
                    const newVal = Math.max(0, value - 1);
                    setValue(newVal);
                    resizeNamesArray(names, setNames, newVal);
                  }}
                  className="w-10 h-10 bg-[#e5d5c0]/70 rounded-lg text-[#3e2f1c] text-2xl font-semibold shadow-sm hover:bg-[#e5d5c0] transition flex items-center justify-center"
                  aria-label={`Smanji broj ${label}`}
                  type="button"
                >
                  −
                </button>
                <span className="text-3xl font-bold w-12 text-center">{value}</span>
                <button
                  onClick={() => {
                    const newVal = value + 1;
                    setValue(newVal);
                    resizeNamesArray(names, setNames, newVal);
                  }}
                  className="w-10 h-10 bg-[#e5d5c0]/70 rounded-lg text-[#3e2f1c] text-2xl font-semibold shadow-sm hover:bg-[#e5d5c0] transition flex items-center justify-center"
                  aria-label={`Povećaj broj ${label}`}
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Unos imena */}
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
                className="w-full p-2 border border-[#e5d5c0] rounded-lg bg-white/80"
                placeholder={`Odrasli ${i + 1} - ime i prezime`}
              />
              {adultNameErrors[i] && (
                <p className="text-sm text-red-600 mt-1">Molimo unesite ime gosta.</p>
              )}
            </div>
          ))}

          {/* Djeca */}
          {kidNames.map((name, i) => (
            <div key={`kid-${i}`} className="flex flex-col">
              <input
                value={name}
                onChange={(e) => {
                  const newNames = [...kidNames];
                  newNames[i] = e.target.value;
                  setKidNames(newNames);
                }}
                className="w-full p-2 border border-[#e5d5c0] rounded-lg bg-white/80"
                placeholder={`Dijete ${i + 1} - ime i prezime`}
              />
              {kidNameErrors[i] && (
                <p className="text-sm text-red-600 mt-1">Molimo unesite ime gosta.</p>
              )}
            </div>
          ))}

          {/* Mala djeca */}
          {toddlerNames.map((name, i) => (
            <div key={`toddler-${i}`} className="flex flex-col">
              <input
                value={name}
                onChange={(e) => {
                  const newNames = [...toddlerNames];
                  newNames[i] = e.target.value;
                  setToddlerNames(newNames);
                }}
                className="w-full p-2 border border-[#e5d5c0] rounded-lg bg-white/80 "
                placeholder={`Malo dijete ${i + 1} - ime i prezime`}
                

              />
              {toddlerNameErrors[i] && (
                <p className="text-sm text-red-600 mt-1">Molimo unesite ime gosta.</p>
              )}
            </div>
          ))}
        </div>

        {/* Gumb za potvrdu */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="inline-block px-8 py-4 bg-[#e5d5c0] text-white rounded-2xl text-lg font-semibold hover:bg-[#d8c0a5] shadow-lg transition"
          >
            Potvrdi dolazak
          </button>
        </div>
      </div>
    </section>
  );
}
