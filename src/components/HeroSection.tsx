import { motion } from "framer-motion";

import { wedding } from "@/config/wedding";

export function HeroSection({ start }: { start: boolean }) {
  return (
    <section
      className="
        relative
        w-full
        min-h-[100svh]
        bg-transparent
      "
    >
      <div
        className="
          relative
          flex
          min-h-[100svh]
          flex-col
          items-center
          justify-between
          px-6
          py-14
          text-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: start ? 1 : 0,
            y: start ? 0 : 16,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-sm"
        >
          <p className="tracking-luxe wedding-light text-[0.62rem] font-light uppercase sm:text-xs">
  {wedding.welcomeLine}
</p>

          <h1 className="font-script mt-3 text-[2.75rem] leading-[1.05] wedding-title sm:text-[3.5rem]">
  {wedding.welcomeTitle}
</h1>

          <p className="mt-2 text-xs italic tracking-wide text-cream/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)]">
            {wedding.welcomeJoin}
          </p>

          <div className="mt-3 flex flex-col items-center">
            <h2 className="font-script text-5xl leading-none wedding-light sm:text-6xl">
  {wedding.bride.firstName}
</h2>

            <span className="font-script -my-1 text-xl text-champagne sm:text-2xl">
              &amp;
            </span>

            <h2 className="font-script text-5xl leading-none wedding-light sm:text-6xl">
  {wedding.groom.firstName}
</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: start ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="mx-auto max-w-sm"
        >
          <p className="mt-10 wedding-light text-[0.6rem] tracking-[0.28em] uppercase">
  Scroll to discover
</p>

          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-champagne"
            animate={
              start
                ? {
                    y: [0, 6, 0],
                  }
                : {
                    y: 0,
                  }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}