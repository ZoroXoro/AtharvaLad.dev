// app/contact/page.jsx


import { Footer } from "@/components/Fotter";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Main content container (form area only) */}
      <main className="flex-1">
        <section className="relative px-6 pt-28 pb-16">
          <div className="mx-auto max-w-2xl">
            <header className="text-center mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
                Contact
              </h1>
              <p className="mt-3 text-gray-300">
                For opportunities, collaborations, or questions, reach out via email.
              </p>
            </header>

            {/* Card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur-md shadow-xl">
              <div className="p-6 sm:p-8">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-xl px-3 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-xl px-3 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-1 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full rounded-xl px-3 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      placeholder="How can I help?"
                    />
                  </div>

                  <button
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 font-medium
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-sky-500
                               transition"
                    type="submit"
                  >
                    Send
                  </button>
                </form>

                {/* Optional quick links / alt contact */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
                  <span className="opacity-80">Prefer email?</span>
                        <a href="mailto:atharvalad05@gmail.com" className="rounded-lg border border-white/10 px-3 py-1.5 bg-white/5 hover:bg-white/10 transition">
                          atharvalad05@gmail.com
                        </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
