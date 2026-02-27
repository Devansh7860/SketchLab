import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import "./landing.css";

/* ——————————— SVG sub-components ——————————— */

function HeroCursorSvg() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1000 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Cyan path – Anya */}
      <path
        d="M100,600 C200,400 300,700 500,500 S800,200 900,400"
        fill="none"
        stroke="#00f5d4"
        strokeWidth={2}
        strokeOpacity={0.5}
        strokeDasharray={1000}
        strokeDashoffset={1000}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      <g>
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          rotate="auto"
          path="M100,600 C200,400 300,700 500,500 S800,200 900,400"
        />
        <circle r={4} fill="#00f5d4" />
        <text
          fill="#00f5d4"
          fontSize={14}
          x={10}
          y={5}
          className="font-serif-italic"
        >
          Anya ✦
        </text>
      </g>

      {/* Amber path – Ryo */}
      <path
        d="M800,700 C700,500 600,600 400,300 S100,100 200,500"
        fill="none"
        stroke="#ffbe0b"
        strokeWidth={2}
        strokeOpacity={0.5}
        strokeDasharray={1000}
        strokeDashoffset={1000}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="5s"
          begin="1s"
          repeatCount="indefinite"
        />
      </path>
      <g>
        <animateMotion
          dur="5s"
          begin="1s"
          repeatCount="indefinite"
          rotate="auto"
          path="M800,700 C700,500 600,600 400,300 S100,100 200,500"
        />
        <rect x={-4} y={-4} width={8} height={8} fill="#ffbe0b" />
        <text
          fill="#ffbe0b"
          fontSize={14}
          x={10}
          y={5}
          className="font-serif-italic"
        >
          Ryo ◈
        </text>
      </g>

      {/* Coral path – Dev */}
      <path
        d="M200,100 Q400,300 600,100 T900,300"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth={2}
        strokeOpacity={0.5}
        strokeDasharray={1000}
        strokeDashoffset={1000}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1000"
          to="0"
          dur="6s"
          begin="2s"
          repeatCount="indefinite"
        />
      </path>
      <g>
        <animateMotion
          dur="6s"
          begin="2s"
          repeatCount="indefinite"
          rotate="auto"
          path="M200,100 Q400,300 600,100 T900,300"
        />
        <polygon points="0,-6 5,4 -5,4" fill="#ff6b6b" />
        <text
          fill="#ff6b6b"
          fontSize={14}
          x={10}
          y={5}
          className="font-serif-italic"
        >
          Dev ▲
        </text>
      </g>
    </svg>
  );
}

function StickyNoteInfinite() {
  return (
    <svg
      className="w-full h-32"
      viewBox="0 0 100 100"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M25,50 C20,35 25,20 40,25 C45,15 60,10 70,25 C85,20 90,40 80,55 C90,65 85,85 65,80 C60,90 40,90 35,80 C20,85 10,65 25,50 Z M45,35 C45,45 55,45 55,35 M35,55 C45,55 45,65 35,65 M65,45 C75,45 75,55 65,55"
        style={{ strokeDasharray: 200, strokeDashoffset: 0 }}
      />
      <path d="M30,40 C35,30 50,30 55,40" opacity={0.5} />
      <path d="M60,60 C55,70 40,70 35,60" opacity={0.5} />
      <path d="M70,35 C65,45 65,55 70,65" opacity={0.5} />
    </svg>
  );
}

function StickyNoteScribble() {
  return (
    <svg
      className="w-32 h-32 animate-scribble"
      viewBox="0 0 100 100"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M10,50 Q25,10 50,50 T90,50" />
      <path d="M15,60 Q40,90 60,40 T85,30" />
      <path d="M20,30 Q30,70 70,60 T90,20" />
      <path d="M50,10 L50,90" opacity={0.6} />
      <path d="M10,50 L90,50" opacity={0.6} />
      <circle cx={50} cy={50} r={30} opacity={0.4} />
    </svg>
  );
}

function StickyNotePencil() {
  return (
    <svg
      className="w-32 h-32"
      viewBox="0 0 100 100"
      fill="none"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M70,20 L80,30 L40,70 L30,70 L30,60 Z" />
      <path d="M30,70 L25,75" />
      <path d="M75,25 L65,15 L75,5" />
      <path d="M85,35 L90,40" opacity={0.5} />
      <path d="M20,80 L15,85" opacity={0.5} />
      <path d="M60,10 L50,5" opacity={0.3} />
      <path d="M40,85 L45,90" opacity={0.3} />
    </svg>
  );
}

function LiveSessionSvg() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <path
        d="M50,150 Q150,50 250,150 T450,150"
        fill="none"
        stroke="#ffbe0b"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={600}
        strokeDashoffset={600}
      >
        <animate
          attributeName="stroke-dashoffset"
          from="600"
          to="0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

/* ——————————— Page ——————————— */

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen selection:bg-[#00f5d4] selection:text-[#08080e]"
      style={{ backgroundColor: "#08080e", color: "#f0f0f0" }}
    >
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 grain-overlay animate-pulse-grain mix-blend-overlay" />

      {/* ——— Header ——— */}
      <header className="fixed top-0 w-full z-40 py-4 px-4 sm:px-8 mix-blend-difference">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="SketchLab" width={36} height={36} style={{ filter: "brightness(0) invert(1)" }} />
            <span className="text-2xl font-bold tracking-tighter">SketchLab</span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-6">
            {/* Auth buttons */}
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-sm font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm px-4 py-2 rounded-sm hover:bg-[#00f5d4] hover:text-[#08080e] transition-all duration-300"
              >
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-in"
                className="text-sm font-bold uppercase tracking-widest hover:text-[#00f5d4] transition-colors cursor-pointer"
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="text-sm font-bold uppercase tracking-widest bg-[#00f5d4] text-[#08080e] px-4 py-2 rounded-sm hover:bg-[#00f5d4]/80 transition-all duration-300 cursor-pointer"
              >
                Sign up
              </Link>
            </SignedOut>
          </nav>
        </div>
      </header>

      <main>
        {/* ——— Hero ——— */}
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
          {/* Animated cursor lines */}
          <div className="absolute inset-0 z-0 opacity-40 hidden md:block">
            <HeroCursorSvg />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center w-full">
            <h1
              className="leading-[0.85] tracking-tighter text-white mix-blend-exclusion"
              style={{
                fontSize: "clamp(4rem, 10vw, 12rem)",
                fontWeight: 800,
              }}
            >
              <span className="block hover:text-[#00f5d4] transition-colors duration-500 cursor-default">
                Sketch.
              </span>
              <span className="block hover:text-[#ffbe0b] transition-colors duration-500 cursor-default ml-[10%]">
                Together.
              </span>
              <span className="block hover:text-[#ff6b6b] transition-colors duration-500 cursor-default -ml-[5%]">
                Live.
              </span>
            </h1>

            <p className="mt-8 sm:mt-12 text-xl sm:text-2xl md:text-3xl font-serif-italic text-gray-400 max-w-xl mx-auto px-2">
              Where rough ideas become real — no templates, no fluff, just a canvas and your team.
            </p>

            <div className="mt-16">
              <Link
                href="/dashboard"
                className="group relative inline-flex px-12 py-6 text-xl font-bold text-white bg-transparent"
              >
                <span className="absolute inset-0 chalk-border" />
                <span className="relative flex items-center gap-3">
                  Open the canvas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ——— Sticky Notes / Manifesto ——— */}
        <section id="manifesto" className="py-16 sm:py-32 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl sm:text-5xl md:text-7xl text-center mb-12 sm:mb-24 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              Your team&apos;s brain,
              <br />
              <span className="text-[#00f5d4] font-serif-italic font-normal">
                externalized.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative min-h-[400px]">
              {/* Yellow note */}
              <div
                className="sticky-note p-8 w-full aspect-square flex flex-col origin-top-left"
                style={{
                  backgroundColor: "#fffc4d",
                  color: "black",
                  transform: "rotate(-2deg)",
                }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <StickyNoteInfinite />
                </div>
                <p className="font-serif-italic text-2xl leading-tight">
                  &ldquo;Infinite canvas means infinite mess (in a good
                  way).&rdquo;
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-widest border-t border-black/20 pt-2">
                  Zero Limits
                </div>
              </div>

              {/* Red note */}
              <div
                className="sticky-note p-8 w-full aspect-square flex flex-col origin-center md:translate-y-12"
                style={{
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  transform: "rotate(1.5deg)",
                }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <StickyNoteScribble />
                </div>
                <p className="font-serif-italic text-2xl leading-tight">
                  &ldquo;Collaborate without the corporate polish.&rdquo;
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-widest border-t border-white/20 pt-2">
                  Real-time Chaos
                </div>
              </div>

              {/* Cyan note */}
              <div
                className="sticky-note p-8 w-full aspect-square flex flex-col origin-bottom-right"
                style={{
                  backgroundColor: "#00f5d4",
                  color: "black",
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <StickyNotePencil />
                </div>
                <p className="font-serif-italic text-2xl leading-tight">
                  &ldquo;Tools that disappear when you start thinking.&rdquo;
                </p>
                <div className="mt-4 text-xs font-bold uppercase tracking-widest border-t border-black/20 pt-2">
                  Invisible UI
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— Live Session ——— */}
        <section
          id="canvas"
          className="py-24 border-y border-white/5 relative overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            {/* Canvas mockup */}
            <div
              className="w-full md:w-1/2 aspect-video rounded-lg border border-white/10 relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#08080e" }}
            >
              <LiveSessionSvg />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative animate-scribble">
                  <svg
                    className="w-6 h-6 fill-current"
                    style={{ color: "#ffbe0b", transform: "rotate(-12deg)" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z" />
                  </svg>
                  <div
                    className="absolute top-full left-4 text-xs font-bold px-2 py-0.5 rounded ml-1 mt-1"
                    style={{ backgroundColor: "#ffbe0b", color: "black" }}
                  >
                    Guest_99
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-mono text-gray-400 uppercase">
                  Live Session
                </span>
              </div>
              <h3
                className="text-4xl md:text-5xl leading-tight mb-6"
                style={{ fontWeight: 800 }}
              >
                This is what <br />
                <span className="text-[#ffbe0b] font-serif-italic font-normal">
                  thinking looks like.
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                No rigid templates. No forced workflows. Just a raw, digital
                surface that responds to the speed of your cursor.
              </p>
            </div>
          </div>
        </section>

        {/* ——— CTA / Footer ——— */}
        <section className="py-20 sm:py-40 px-4 sm:px-6 text-center relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: "rgba(0,245,212,0.05)" }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: "rgba(255,107,107,0.05)" }} />

          <div className="relative z-10 max-w-5xl mx-auto glow-hover cursor-default">
            <h2
              className="text-4xl sm:text-6xl md:text-8xl tracking-tighter mb-8 sm:mb-12 leading-[0.9]"
              style={{ fontWeight: 800 }}
            >
              <span className="main-text transition-colors duration-300">
                Your next idea is
              </span>
              <br />
              <span className="text-stroke-1 transition-all duration-300">
                already waiting.
              </span>
            </h2>

            <Link
              href="/dashboard"
              className="cta-button inline-block text-xl py-6 px-16 rounded-sm"
              style={{ fontWeight: 800 }}
            >
              Start Sketching
            </Link>

            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-600">
              <span>© SketchLab {new Date().getFullYear()}</span>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
