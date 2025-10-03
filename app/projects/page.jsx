
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
    title: "Art Bible of Tiny Titan",
    description:
      "Tiny Titan is a game based on Nostalgic exploration and Survival in a mysterious attic. As these are cutscenes in the Game which has gives a imagination power to the player while playing the game.",
    tags: ["Photoshop", "Concept Art", "DigitalStoryBoard"],
    href: "https://www.artstation.com/artwork/WXQX9Q",
    image: "/Logo.png", // public/works/2d/env-sheet.jpg
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
    title: "The Buccaneer’s Beat: Pirate Jam Spot",
    description:
      "Stylized Low-poly props with hand-painted textures, authored for real-time mobile scenes.",
    tags: ["Maya", "Stylized", "GameReadyAssets"],
    href: "https://www.artstation.com/artwork/nJNokr",
    image: "/atharva.jpg",
  },
  {
    title: "Hyper-Realistic 3D Character",
    description:
      "A Hyper-Realistic 3D Character crafted as my first dive into realism for games.",
    tags: ["Zbrush", "3DModeling", "Hyper-Realistic"],
    href: "https://www.artstation.com/artwork/6LyNmr",
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
