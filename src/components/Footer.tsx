import { wedding } from "@/config/wedding";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer
      className="relative bg-transparent px-6 pt-16 pb-14 text-center"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <Reveal>
        <Divider />

        <p className="mt-8 text-[0.62rem] tracking-[0.26em] uppercase text-champagne drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {wedding.footer.signOff}
        </p>

        <p className="font-script mt-3 text-4xl text-[#fff7ed] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-5xl">
          {wedding.initials}
        </p>

        <p className="mt-4 text-sm text-[#fff3e6]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
          {wedding.footer.thanks}
        </p>

        <p className="mt-8 text-[0.55rem] tracking-[0.2em] uppercase text-[#fff3e6]/75 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]">
          {wedding.date}
        </p>
      </Reveal>
    </footer>
  );
}