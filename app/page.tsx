import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* soft background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-transparent to-neutral-900/60" />

      {/* content sits above the overlay */}
      <div className="relative z-10">
        <Introduction />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
