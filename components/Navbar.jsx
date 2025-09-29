import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">

      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold tracking-tight">
          <span className="gradient-text ml-12">AtharvaLad.Dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm mr-12">
          <Link className="hover:text-sky-400" href="/about">About</Link>
          <Link className="hover:text-sky-400" href="/projects">Projects</Link>
          <Link className="hover:text-sky-400" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
