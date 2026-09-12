import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import scenicBackground from "@/assets/Animated_scenic_landscape.mp4";
import scenicPoster from "@/assets/romatic_burgund_garden.png";

import { DressCode } from "@/components/DressCode";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { EventTimeline } from "@/components/EventTimeline";
import { Footer } from "@/components/Footer";
import { GuestInfo } from "@/components/GuestInfo";
import { HeroSection } from "@/components/HeroSection";
import { InvitationMessage } from "@/components/InvitationMessage";
import { MusicControl } from "@/components/MusicControl";
import { SaveTheDate } from "@/components/SaveTheDate";
import { ScratchReveal } from "@/components/ScratchReveal";
import { VenueSection } from "@/components/VenueSection";
import { wedding } from "@/config/wedding";

const title = `${wedding.bride.firstName} & ${wedding.groom.firstName} — Wedding Invitation`;

const description = `Join us to celebrate the ${wedding.welcomeTitle} of ${wedding.bride.firstName} and ${wedding.groom.firstName} on ${wedding.date}. Open the envelope for details, timings, venue and RSVP.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#4d1f29]">

      {/* =====================================================
          PERMANENT GLOBAL BACKGROUND
          Keep this mounted from the very beginning.
          ===================================================== */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#4d1f29]"
        style={{
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        {/* STATIC FALLBACK IMAGE

            This is extremely important on mobile.

            If Chrome temporarily stops drawing the video
            while scrolling, this exact scenery remains
            underneath instead of showing white.
        */}
        <img
          src={scenicPoster}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />

        {/* ANIMATED SCENERY */}
        <video
          src={scenicBackground}
          poster={scenicPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
        />

        {/* Keep only a very subtle overlay */}
        <div className="absolute inset-0 bg-black/[0.06]" />
      </div>

      {/* =====================================================
          ENVELOPE INTRO
          ===================================================== */}
      {!introDone && (
        <EnvelopeIntro
          onComplete={() => setIntroDone(true)}
        />
      )}

      {/* =====================================================
          WEBSITE
          
          IMPORTANT:
          No Framer Motion opacity animation around the
          entire scrolling page. Individual components
          already have their own animations.
          ===================================================== */}
      <div
        className="relative z-10 min-h-screen bg-transparent"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <HeroSection start={introDone} />

        <ScratchReveal />

        <InvitationMessage />

        <EventTimeline />

        <SaveTheDate />

        <VenueSection />

        <DressCode />

        <GuestInfo />

        <Footer />
      </div>

      {introDone && <MusicControl />}
    </main>
  );
}