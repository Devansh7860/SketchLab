import type { Metadata } from "next";
import { Syne, Instrument_Serif } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "SketchLab — Collaborative Whiteboard",
  description:
    "The anti-SaaS whiteboard for raw ideas. Sketch, collaborate, and think together in real time.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${syne.variable} ${instrumentSerif.variable}`}
      style={{ fontFamily: "var(--font-syne), sans-serif" }}
    >
      {children}
    </div>
  );
}
