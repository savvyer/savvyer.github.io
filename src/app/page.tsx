import Education from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="max-w-4xl print:max-w-full p-6 mx-auto">
      <Header />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
