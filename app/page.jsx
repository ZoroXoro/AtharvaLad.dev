// app/page.jsx
import Image from "next/image";
import Link from "next/link";

import AboutSection from "@/components/AboutSection";
import {ResumeButton} from "@/components/ResumeButton";     // fix path/name
import SkillsSection from "@/components/SkillsSection";
import { Footer } from "@/components/Fotter";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] w-full">
        {/* Background image (local file at /public/hero.png) */}
        <Image
          src="/hero.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        {/* Centered hero content */}
        <div className="relative z-10 h-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
            Hi, I&apos;m Atharva Lad
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            A Technical Artist and Game Developer from India. I create fun and immersive
            games using Unity. I love experimenting with gameplay systems, procedural
            animation, and cool visual effects to make every project feel alive.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-sky-500 hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-sky-400"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Skills (reduced top padding) */}
      <section className="pt-8 pb-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-2">
            <SkillsSection />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-12 px-6 md:px-12 mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image left */}
          <Link href="/about" className="block">
            <Image
              src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="About Atharva"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </Link>

          {/* About text right */}
          <div className="mb-20">
            <AboutSection />
          </div>
        </div>
      </section>

      <Footer />
      <ResumeButton />
    </div>
  );
}
