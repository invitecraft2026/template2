import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import scenicBackground from "@/assets/Animated_scenic_landscape.mp4";

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
      {/* =========================================
          GLOBAL VIDEO BACKGROUND
          ========================================= */}
      {introDone && (
        <div className="pointer-events-none fixed inset-0 z-0 h-[100svh] w-full overflow-hidden">
          <video
            src={scenicBackground}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="h-full w-full object-cover object-center"
          />

          {/* Global cinematic overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Burgundy tint so every section matches the theme */}
          <div className="absolute inset-0 bg-[#541f2e]/10" />

          {/* Slight soft gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>
      )}

      {/* =========================================
          ENVELOPE INTRO
          ========================================= */}
      {!introDone && (
        <EnvelopeIntro onComplete={() => setIntroDone(true)} />
      )}

      {/* =========================================
          WEBSITE CONTENT
          ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: introDone ? 1 : 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="relative z-10"
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
      </motion.div>

      {introDone && <MusicControl />}
    </main>
  );
}