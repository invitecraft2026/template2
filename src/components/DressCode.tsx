import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function DressCode() {
  return (
    <section
      className="relative bg-transparent px-6 py-20"
      style={{
        background: "transparent",
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <SectionHeading
            eyebrow="What to wear"
            title="Dress Code"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm leading-relaxed text-[#fff3e6]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {wedding.dressCode.description}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap items-start justify-center gap-x-4 gap-y-5">
            {wedding.dressCode.colors.map((c) => (
              <li key={c.name} className="w-14">
                <span
                  className="
                    mx-auto
                    block
                    h-11
                    w-11
                    rounded-full
                    border
                    border-white/40
                    shadow-[0_3px_12px_rgba(0,0,0,0.18)]
                  "
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />

                <span
                  className="
                    mt-2
                    block
                    text-[0.55rem]
                    uppercase
                    tracking-[0.12em]
                    text-[#fff3e6]/85
                    drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]
                  "
                >
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}