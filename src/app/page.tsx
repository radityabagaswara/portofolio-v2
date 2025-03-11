import { Button } from "@/components/Button";
import { Contact } from "@/components/Contact";
import Header from "@/components/Header";
import { ProjectHome } from "@/components/ProjectHome";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-4">
        <Header />
        <div className="mt-12">
          <h2>About Me</h2>
          <p className="text-justify mt-5 mb-3">
            Full-stack developer with a strong foundation in Business
            Information Systems and diverse experience in delivering scalable
            web applications. Proficient in multiple programming languages and
            frameworks, specializing in web development, system integration, and
            cross-functional collaboration. Passionate at solving complex
            technical challenges and driving user-centered software development.
          </p>
          <Button
            link={
              "https://drive.google.com/drive/folders/1mjSDJyCJJJj-Cwrx8s51eEE3aZRxLcrL?usp=sharing"
            }
          >
            See My Resume
          </Button>
        </div>
        <div className="mt-10">
          <Skills />
        </div>
        <section id="works" className="mt-12">
          <h2>Works</h2>
          <div className="mt-8">
            <ProjectHome />
          </div>
        </section>
      </div>
      <section id="contact" className="mt-12 max-w-3xl mx-auto px-4">
        <div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
