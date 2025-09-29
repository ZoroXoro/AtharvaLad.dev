
import { ProjectCard } from "@/components/ProjectCard";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Fotter";
import TwoDCard from "@/components/TwoDCards";
import ThreeDCard from "@/components/ThreeDCard";

const projects = [
  {
    title: "Biscotee",
    description:
      "Step into the crunchy world of Biscotee World, where legends are baked, and heroes are born! Dodge trains, cross roads, leap over lava—ascend to become the Biscuit God.",
    tags: ["Unity", "C#", "VR"],
    href: "https://foxape123.itch.io/biscotee",
    image: "/biscotte.png", // file at public/biscotte.png
  },
  {
    title: "Spectator's Carnival",
    description:
      "Single-player carnival experience—predict, earn tickets, and unlock games. Built for a one-month jam on the theme 'Spectator'.",
    tags: ["Next.js", "TypeScript"],
    href: "https://viditm.itch.io/spectators-carnival",
    image: "/carnival.png", // file at public/carnival.png
  },
];

const works2D = [
  {
    title: "Main Menu",
    description:
      "A 2D concept sheet exploring mood, silhouettes, and prop language for a cozy village level.",
    tags: ["Photoshop", "Concept Art"],
    href: "#",
    image: "/MainMenu.png", // public/works/2d/env-sheet.jpg
  },
  {
    title: "Dargon card",
    description:
      "Clean turnarounds prepared for modeling & rigging handoff—focus on proportional guides.",
    tags: ["Illustrator", "Line Art"],
    href: "#",
    image: "/Dragon_Card.png",
  },
];

const works3D = [
  {
    title: "Stylized Props Pack",
    description:
      "Low-poly props with hand-painted textures, authored for real-time mobile scenes.",
    tags: ["Blender", "PBR", "Game-Ready"],
    href: "#",
    image: "/Close_Front.jpg",
  },
  {
    title: "Man Front",
    description:
      "Low-poly props with hand-painted textures, authored for real-time mobile scenes.",
    tags: ["Blender", "PBR", "Game-Ready"],
    href: "#",
    image: "/Front.jpg",
  },
  {
    title: "Human Sculpt",
    description:
      "High-res ZBrush sculpt, baked to game-res and textured for cinematic lighting tests.",
    tags: ["Sculpt", "Baking", "Texturing"],
    href: "#",
    image: "/Ortho_Close.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 space-y-14">
        {/* Projects */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* 2D Work */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-bold">2D Work</h2>
            <span className="text-sm text-gray-400">Concepts • Illustrations • Turnarounds</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works2D.map((item) => (
              <TwoDCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* 3D Work */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-bold">3D Work</h2>
            <span className="text-sm text-gray-400">Props • Sculpts • Game-Ready Assets</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works3D.map((item) => (
              <ThreeDCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
