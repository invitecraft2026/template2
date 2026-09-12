import { motion } from "framer-motion";

import { wedding } from "@/config/wedding";

export function HeroSection({ start }: { start: boolean }) {
  return (
    <section className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-transparent">
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-between px-6 py-14 text-center">
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
          <p className="tracking-luxe text-[0.62rem] font-light uppercase text-cream/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)] sm:text-xs">
            {wedding.welcomeLine}
          </p>

          <h1 className="font-script mt-3 text-[2.75rem] leading-[1.05] text-champagne drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-[3.5rem]">
            {wedding.welcomeTitle}
          </h1>

          <p className="mt-2 text-xs italic tracking-wide text-cream/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)]">
            {wedding.welcomeJoin}
          </p>

          <div className="mt-3 flex flex-col items-center">
            <h2 className="font-script text-5xl leading-none text-soft-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-6xl">
              {wedding.bride.firstName}
            </h2>

            <span className="font-script -my-1 text-xl text-champagne drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-2xl">
              &amp;
            </span>

            <h2 className="font-script text-5xl leading-none text-soft-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] sm:text-6xl">
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
          <p className="mt-10 text-[0.6rem] tracking-[0.28em] uppercase text-cream/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]">
            Scroll to discover
          </p>

          <motion.svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden
            className="mx-auto mt-2 text-champagne drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]"
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