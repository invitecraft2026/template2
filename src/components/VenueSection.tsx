import venueImg from "@/assets/venue.jpg";
import { wedding } from "@/config/wedding";
import { mapsDirectionsUrl } from "@/utils/calendar";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function VenueSection() {
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
      <div className="relative mx-auto max-w-md">
        <Reveal>
          <SectionHeading
            eyebrow="Where we celebrate"
            title="The Venue"
            script
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="
              mt-10
              overflow-hidden
              rounded-xl
              border
              border-white/25
              bg-transparent
              p-2
              shadow-[0_10px_30px_rgba(0,0,0,0.20)]
            "
          >
            <img
              src={venueImg}
              alt="Wedding venue"
              loading="lazy"
              width={1024}
              height={768}
              className="h-52 w-full rounded-lg object-cover sm:h-60"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 text-center">
            <h3
              className="
                text-lg
                uppercase
                tracking-[0.2em]
                text-[#fff7ed]
                drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]
              "
            >
              {wedding.venue.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-relaxed
                text-[#fff3e6]/85
                drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]
              "
            >
              {wedding.venue.address}
            </p>

            <a
              href={mapsDirectionsUrl(wedding.venue.mapsQuery)}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-block
                rounded-md
                border
                border-champagne/70
                bg-[#6b2b38]/35
                px-6
                py-3
                text-[0.62rem]
                uppercase
                tracking-[0.24em]
                text-[#fff7ed]
                shadow-[0_6px_20px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:bg-[#6b2b38]/55
              "
            >
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}