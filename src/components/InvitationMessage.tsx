import { wedding } from "@/config/wedding";

import { Divider } from "./Ornament";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
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
          <p className="text-[0.6rem] leading-relaxed tracking-[0.2em] uppercase text-[#fff3e6]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            You are invited to the
            <br />
            {wedding.welcomeTitle} of
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="font-script mt-6 text-4xl text-champagne drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-5xl">
            {wedding.bride.firstName}
          </h3>

          <p className="mt-2 text-[0.58rem] leading-relaxed tracking-[0.15em] uppercase text-[#fff3e6]/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {wedding.bride.parents}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="font-script mt-4 block text-xl text-champagne drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
            with
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="font-script mt-3 text-4xl text-champagne drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-5xl">
            {wedding.groom.firstName}
          </h3>

          <p className="mt-2 text-[0.58rem] leading-relaxed tracking-[0.15em] uppercase text-[#fff3e6]/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {wedding.groom.parents}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <Divider className="mt-8" />

          <p className="mt-6 text-sm leading-relaxed text-[#fff3e6]/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {wedding.invitationMessage}
          </p>

          <p className="mt-6 text-xs italic leading-relaxed text-[#fff3e6]/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            {wedding.quote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}