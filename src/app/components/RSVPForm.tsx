"use client";
import { useState } from "react";

export default function RSVPForm() {
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [toddlers, setToddlers] = useState(0);
  const [names, setNames] = useState([""]);
  const [submitted, setSubmitted] = useState(false);
  const [showNameError, setShowNameError] = useState(false);


  const handleCountChange = (count: number) => {
    const newNames = [...names];
    while (newNames.length < count) newNames.push("");
    while (newNames.length > count) newNames.pop();
    setNames(newNames);
  };

  const updateName = (index: number, value: string) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

const handleSubmit = async () => {
  const validNames = names.filter(name => name.trim() !== "");

 
  if (validNames.length === 0) {
    setShowNameError(true);
    return;
  }
 setShowNameError(false);
   setSubmitted(true);
    try {
    await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ names: validNames, adults, kids, toddlers }),
    });
  } catch (error) {
    console.error("Greška pri slanju u pozadini:", error);
  }
};



  if (submitted) {
    return (
      <section className="relative py-20 px-4 bg-[#fdf6f0]">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center border border-[#e5d5c0]">
          <h2 className="text-3xl font-serif text-[#6b4c3b] mb-4">Hvala vam! 🎉</h2>
          <p className="text-lg text-gray-700">Vaša potvrda dolaska je zaprimljena. Veselimo se druženju! ❤️</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-4 bg-[#fdf6f0]">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-[#e5d5c0]">
        <h2 className="text-3xl font-serif text-[#6b4c3b] mb-6 text-center">Potvrda dolaska</h2>

        {/* Brojači */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
          {[
            { label: "Odrasli (od 15 god.)", value: adults, setValue: setAdults },
            { label: "Djeca 5–14 god.", value: kids, setValue: setKids },
            { label: "Djeca do 5 god.", value: toddlers, setValue: setToddlers },
          ].map(({ label, value, setValue }) => (
            <div key={label}>
              <p className="text-sm text-gray-700">{label}</p>
              <div className="flex justify-center items-center gap-2 mt-1">
                <button
                  onClick={() => {
                    const newVal = Math.max(0, value - 1);
                    setValue(newVal);
                    const newTotal =
                      (label === "Odrasli (od 15 god.)" ? newVal : adults) +
                      (label === "Djeca 5–14 god." ? newVal : kids) +
                      (label === "Djeca do 5 god." ? newVal : toddlers);
                    handleCountChange(newTotal);
                  }}
                  className="w-8 h-8 bg-[#e5d5c0] rounded-full text-white text-xl font-semibold"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{value}</span>
                <button
                  onClick={() => {
                    const newVal = value + 1;
                    setValue(newVal);
                    const newTotal =
                      (label === "Odrasli (od 15 god.)" ? newVal : adults) +
                      (label === "Djeca 5–14 god." ? newVal : kids) +
                      (label === "Djeca do 5 god." ? newVal : toddlers);
                    handleCountChange(newTotal);
                  }}
                  className="w-8 h-8 bg-[#e5d5c0] rounded-full text-white text-xl font-semibold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Unos imena */}
        <div className="space-y-4 mb-8">
          {names.map((name, index) => (
            <div key={index}>
              <label className="block text-sm text-gray-700 mb-1">Gost {index + 1} - Ime i prezime</label>
              <input
                type="text"
                value={name}
                onChange={(e) => updateName(index, e.target.value)}
                className="w-full p-2 border border-[#e5d5c0] rounded-lg bg-white/80"
              />
              {showNameError && name.trim() === "" && (
  <p className="text-sm text-red-600 mt-1">Molimo unesite ime gosta.</p>
)}
            </div>
          ))}
        </div>

        {/* Gumb za potvrdu */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-[#e5d5c0] text-white rounded-xl text-lg hover:bg-[#d8c0a5] transition"
          >
            Potvrdi dolazak
          </button>
        </div>
      </div>
    </section>
  );
}
