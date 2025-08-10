import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Page() {
  return (
    <main className="min-h-screen">
      <Introduction />
      <Projects />
      <Contact />
    </main>
  );
}
