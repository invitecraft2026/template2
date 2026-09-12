import { wedding, type WeddingEvent } from "@/config/wedding";

import archIllustration from "@/assets/timeline-arch.png";
import mehndiIllustration from "@/assets/timeline-mehndi.png";
import ringsIllustration from "@/assets/timeline-rings.png";
import dinnerIllustration from "@/assets/timeline-dinner.png";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const illustrationByIcon: Record<WeddingEvent["icon"], string> = {
  crescent: archIllustration,
  rings: ringsIllustration,
  lantern: mehndiIllustration,
  dinner: dinnerIllustration,
};

export function EventTimeline() {
  return (
    <section
      className="relative bg-transparent px-6 py-20"
      style={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
      }}
    >
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading
            eyebrow="The celebrations"
            title="Wedding Timeline"
            script
          />
        </Reveal>

        <div className="relative mt-14">
          {/* Center vertical line */}
          <span className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-champagne to-transparent" />

          <div className="flex flex-col gap-14">
            {wedding.events.map((event, i) => {
              const imageLeft = i % 2 === 0;

              return (
                <Reveal key={event.id} delay={i * 0.08}>
                  <div className="relative grid grid-cols-2 items-center gap-6">
                    {/* Center diamond marker */}
                    <span
                      className="
                        absolute
                        top-1/2
                        left-1/2
                        h-2.5
                        w-2.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        border
                        border-champagne
                        bg-[#6b2b38]
                        shadow-[0_0_8px_rgba(217,192,156,0.45)]
                      "
                    />

                    {imageLeft ? (
                      <>
                        {/* Illustration */}
                        <div className="flex justify-end pr-4">
                          <img
                            src={illustrationByIcon[event.icon]}
                            alt=""
                            className="
                              h-24
                              w-24
                              object-contain
                              drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                              sm:h-28
                              sm:w-28
                            "
                          />
                        </div>

                        {/* Event info */}
                        <div className="pl-4 text-left">
                          <p className="font-script wedding-title text-xl sm:text-2xl">
  {event.time}
</p>

                          <h3 className="wedding-light mt-1 text-sm tracking-[0.15em] uppercase">
  {event.title}
</h3>

                          <p className="wedding-muted mt-1 text-xs leading-relaxed">
  {event.venue}
</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Event info */}
                        <div className="pr-4 text-right">
                          <p
                            className="
                              font-script
                              text-xl
                              text-champagne
                              drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]
                              sm:text-2xl
                            "
                          >
                            {event.time}
                          </p>

                          <h3
                            className="
                              mt-1
                              text-sm
                              tracking-[0.15em]
                              text-[#fff7ed]
                              uppercase
                              drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]
                            "
                          >
                            {event.title}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-relaxed
                              text-[#f8e9dc]/90
                              drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
                            "
                          >
                            {event.venue}
                          </p>
                        </div>

                        {/* Illustration */}
                        <div className="flex justify-start pl-4">
                          <img
                            src={illustrationByIcon[event.icon]}
                            alt=""
                            className="
                              h-24
                              w-24
                              object-contain
                              drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                              sm:h-28
                              sm:w-28
                            "
                          />
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}