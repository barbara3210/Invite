"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Envelope() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/backgrounds/silk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ rotate: -5 }}
        animate={{ rotate: opened ? 0 : -5 }}
        transition={{ duration: 0.8 }}
        className="relative w-[300px] h-[200px] cursor-pointer"
        onClick={() => setOpened(!opened)}
      >
        {/* Envelope back panel */}
        <div className="absolute inset-0 rounded-md overflow-hidden shadow-lg border border-[#c8b8a4]">
          <Image
            src="/textures/paper.jpg"
            alt="Envelope texture"
            fill
            className="object-cover"
          />
        </div>

        {/* Flap */}
        <motion.div
          animate={{ rotateX: opened ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-1/2 origin-top overflow-hidden"
        >
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <pattern
                id="flap-texture"
                patternUnits="userSpaceOnUse"
                width="200"
                height="100"
              >
                <image
                  href="/textures/paper.jpg"
                  x="0"
                  y="0"
                  width="200"
                  height="100"
                />
              </pattern>
            </defs>
            <polygon
              points="0,0 100,100 200,0"
              fill="url(#flap-texture)"
              stroke="#bfae9e"
              strokeWidth="0.5"
            
            />
          </svg>
        </motion.div>

        {/* Wax stamp */}
        {!opened && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <Image
              src="/letter/stamp.png"
              alt="Wax Stamp"
              width={100}
              height={100}
            />
          </motion.div>
        )}

        {/* Letter inside */}
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute inset-[10%] bg-white/90 backdrop-blur-md rounded-md p-4 text-center shadow-lg"
          >
            <h2 className="font-serif text-xl text-[#5a4b3a] mb-2">
              Dragi naši,
            </h2>
            <p className="text-sm text-gray-700">
              Sa velikim zadovoljstvom vas pozivamo da budete dio najvažnijeg
              dana u našim životima.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
