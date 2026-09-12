import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { wedding } from "@/config/wedding";

import { SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

const THRESHOLD = 0.55;

function ScratchBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const drawing = useRef(false);

  const last = useRef<{
    x: number;
    y: number;
  } | null>(null);

  const [revealed, setRevealed] = useState(false);

  const paintCoating = useCallback(
    (canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const { width, height } = canvas;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#EFE3CE");
      gradient.addColorStop(0.45, "#D9C09C");
      gradient.addColorStop(1, "#E7D8BE");

      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      /*
       * Subtle diagonal texture
       */
      ctx.strokeStyle =
        "rgba(255,255,255,0.22)";

      ctx.lineWidth = 1;

      for (
        let i = -height;
        i < width;
        i += 10
      ) {
        ctx.beginPath();

        ctx.moveTo(i, 0);

        ctx.lineTo(
          i + height,
          height
        );

        ctx.stroke();
      }
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;

    if (!canvas || !wrap) return;

    const dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    const rect =
      wrap.getBoundingClientRect();

    canvas.width = Math.round(
      rect.width * dpr
    );

    canvas.height = Math.round(
      rect.height * dpr
    );

    canvas.style.width =
      `${rect.width}px`;

    canvas.style.height =
      `${rect.height}px`;

    paintCoating(canvas);
  }, [paintCoating]);

  const scratchedRatio = () => {
    const canvas =
      canvasRef.current;

    const ctx =
      canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return 0;
    }

    const step = 8;

    const data = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    let clear = 0;
    let total = 0;

    for (
      let i = 3;
      i < data.length;
      i += 4 * step
    ) {
      total += 1;

      if (data[i] === 0) {
        clear += 1;
      }
    }

    return total === 0
      ? 0
      : clear / total;
  };

  const erase = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas =
      canvasRef.current;

    const ctx =
      canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    const rect =
      canvas.getBoundingClientRect();

    const dpr =
      canvas.width / rect.width;

    const x =
      (e.clientX - rect.left) *
      dpr;

    const y =
      (e.clientY - rect.top) *
      dpr;

    const radius =
      (window.innerWidth < 420
        ? 18
        : 22) * dpr;

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineWidth =
      radius * 2;

    if (last.current) {
      ctx.beginPath();

      ctx.moveTo(
        last.current.x,
        last.current.y
      );

      ctx.lineTo(x, y);

      ctx.stroke();
    }

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      radius,
      0,
      Math.PI * 2
    );

    ctx.fill();

    last.current = {
      x,
      y,
    };
  };

  const onDown = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    drawing.current = true;

    last.current = null;

    e.currentTarget.setPointerCapture(
      e.pointerId
    );

    erase(e);
  };

  const onMove = (
    e: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!drawing.current) {
      return;
    }

    erase(e);
  };

  const onUp = () => {
    drawing.current = false;

    last.current = null;

    if (
      !revealed &&
      scratchedRatio() >= THRESHOLD
    ) {
      setRevealed(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={wrapRef}
        className="
          relative
          aspect-square
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-white/40
          shadow-[0_8px_25px_rgba(54,16,28,0.20)]
          select-none
        "
      >
        {/* Revealed value */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[#fffaf2]
            px-2
            text-center
          "
        >
          <p
            className="
              font-script
              text-2xl
              font-medium
              text-gold-gradient
              sm:text-3xl
            "
          >
            {value}
          </p>
        </div>

        {/* Scratch coating */}
        <motion.canvas
          ref={canvasRef}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerLeave={onUp}
          onPointerCancel={onUp}
          animate={{
            opacity:
              revealed ? 0 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-0
            touch-none
            rounded-2xl
          "
          style={{
            pointerEvents:
              revealed
                ? "none"
                : "auto",
          }}
        />
      </div>

      {/* Label */}
      <p
        className="
          text-[0.6rem]
          font-medium
          uppercase
          tracking-[0.25em]
          text-[#f8e9dc]/85
          drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]
        "
      >
        {label}
      </p>
    </div>
  );
}

export function ScratchReveal() {
  return (
    <section
      className="
        relative
        !bg-transparent
        px-6
        py-20
      "
      style={{
        backgroundColor:
          "transparent",
        backgroundImage:
          "none",
        backdropFilter:
          "none",
        WebkitBackdropFilter:
          "none",
        boxShadow: "none",
      }}
    >
      <div
        className="
          relative
          mx-auto
          max-w-md
          text-center
        "
      >
        <Reveal>
          <SectionHeading
            title="The Date"
            script
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="
              mt-3
              text-[0.65rem]
              uppercase
              tracking-[0.25em]
              text-champagne
              drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]
            "
          >
            ✦ Scratch to reveal
            the date ✦
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-3
            "
          >
            <ScratchBox
              label="Day"
              value={
                wedding.dayNumber
              }
            />

            <ScratchBox
              label="Month"
              value={
                wedding.monthName
              }
            />

            <ScratchBox
              label="Year"
              value={wedding.year}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}