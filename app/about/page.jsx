// app/about/page.jsx
import { Footer } from "@/components/Fotter";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

 // If your file is actually Fotter.jsx and a named export, adjust the import accordingly.

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-12 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <main className="flex-1 px-6 pt-28 pb-20">
        {/* Heading */}
        <header className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="mt-4 text-gray-300">
            Technical Artist & Game Developer crafting immersive, playful experiences.
          </p>
        </header>

        {/* Hero grid */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/Me.jpg"           // place a file at /public/me.jpg
              alt="Atharva Lad portrait"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Right: bio */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Hi, I&apos;m Atharva 👋</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              I&apos;m a Technical Artist with 2+ years of experience building games and interactive
              experiences. I love prototyping gameplay systems, procedural animation, and
              visual polish that makes worlds feel alive. I mostly work in Unity and enjoy
              bridging art and engineering to ship smooth, performant builds.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              When I&apos;m not shipping features, I&apos;m experimenting with shaders, tinkering with
              tools for faster pipelines, or testing quirky game feel ideas.
            </p>

            {/* Skill chips */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Unity", "C# Gameplay", "Shader Graph", "Cinemachine", "VFX Graph", "Blender", "Photoshop"].map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-sky-500 hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-sky-500"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-600"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-5xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "2+ yrs", v: "Experience" },
            { k: "10+", v: "Playable Prototypes" },
            { k: "4", v: "Game Jams" },
            { k: "∞", v: "Ideas in Notion" },
          ].map(({ k, v }) => (
            <div
              key={v}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-center"
            >
              <div className="text-2xl font-bold">{k}</div>
              <div className="text-sm text-gray-400 mt-1">{v}</div>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="max-w-5xl mx-auto mt-14">
          <h3 className="text-xl font-semibold">Journey</h3>
          <div className="mt-6 space-y-6">
            {[
              {
                t: "2024–Now",
                h: "Technical Artist / Unity Dev",
                d: "Building gameplay systems, tools, and content pipelines. Focus on performance and feel.",
              },
              {
                t: "2023",
                h: "Game Jam Sprints",
                d: "Rapid prototyping under constraints; learned fast decision-making and scope control.",
              },
              {
                t: "Earlier",
                h: "Modding & Experiments",
                d: "Shader playgrounds, controller feel tests, and lots of discarded but useful prototypes.",
              },
            ].map((item, i) => (
              <div key={i} className="relative pl-5">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-purple-400" />
                <p className="text-sm text-gray-400">{item.t}</p>
                <p className="font-semibold mt-0.5">{item.h}</p>
                <p className="text-gray-300 mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer stays full-width and visually separated */}
      <Footer />
    </div>
  );
}
