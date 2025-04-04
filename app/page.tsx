import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import ClientOnly from "@/components/client-only";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowDownIcon,
  FileIcon,
} from "lucide-react";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ExperienceCard from "@/components/experience-card";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Rachit Katyal - Software Developer & MERN Stack Specialist",
  description:
    "Personal portfolio of Rachit Katyal, a software developer specializing in MERN stack development.",
};

const projectData = [
  {
    title: "Book Store App",
    description:
      "A full-stack web application for managing and displaying books, using the MERN stack. Features secure user authentication, CRUD operations, and responsive design with light/dark mode support.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "Mongoose",
      "MongoDB",
    ],
    highlights: [
      "Secure user authentication with sign-up, login, and logout",
      "Book management system with CRUD operations",
      "Responsive design with light/dark mode support",
      "80% reduction in security breach incidents",
    ],
    githubUrl: "https://github.com/rachitkatyal04",
  },
  {
    title: "MediLink",
    description:
      "A comprehensive MERN stack healthcare application enabling seamless patient-doctor interactions with real-time appointment scheduling and medical records management.",
    technologies: [
      "React",
      "Redux",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    highlights: [
      "Real-time appointment scheduling",
      "Medical records management",
      "60% reduction in appointment scheduling time",
      "Real-time notifications system",
    ],
    githubUrl: "https://github.com/rachitkatyal04",
  },
  {
    title: "MoodTune",
    description:
      "An AI-driven music generator that creates music based on user's mood input. Features NLP for mood analysis and integration with Spotify for recommendations.",
    technologies: ["Python", "TensorFlow", "Keras", "Flask"],
    highlights: [
      "Intuitive user interface for mood input",
      "NLP system for mood analysis",
      "Real-time music playback",
      "Spotify integration for recommendations",
    ],
    githubUrl: "https://github.com/rachitkatyal04",
  },
];

function LoadingCard() {
  return <div className="h-64 rounded-lg animate-pulse bg-muted"></div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Rachit Katyal</div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ClientOnly fallback={<div className="w-9 h-9" />}>
              <ModeToggle />
            </ClientOnly>
            <Button variant="outline" size="sm" asChild>
              <a
                href="/RachitKatyal_UpdatedResume.pdf"
                download
                className="flex items-center gap-2"
              >
                <FileIcon size={16} />
                Resume
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm Rachit Katyal
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Software Developer & MERN Stack Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              I build modern web applications with React, Node.js, and other
              cutting-edge technologies. Currently pursuing B.Tech in Computer
              Science at Bennett University.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <ArrowDownIcon size={16} />
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/rachitkatyal04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="mailto:rachitkatyal7561@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MailIcon size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/rachit_pic.png"
                alt="Rachit Katyal"
                width={320}
                height={320}
                sizes="(max-width: 768px) 256px, 320px"
                quality={60}
                className="object-cover w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHR4eIR0jIysdIiQkHSkkIh4mJy4eKCgrKyspIzQ0KjU6OjpAQD9ARkZGQEH/2wBDABUXFx4bHt0dHt4eHiMlHx8lMyUnJyU8LzQzLzRAOj1AQD9AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <Suspense
          fallback={
            <div className="animate-pulse bg-muted h-64 rounded-lg"></div>
          }
        >
          <section id="about" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">About Me</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold text-lg">
                      Bennett University, Greater Noida, U.P.
                    </h4>
                    <p className="text-muted-foreground">
                      Bachelor of Technology in Computer Science and Engineering
                    </p>
                    <p className="text-muted-foreground">2022 - 2026</p>
                    <p className="mt-2">CGPA: 8.1</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate software developer specializing in full-stack
                  web development with the MERN stack. Currently pursuing my
                  B.Tech in Computer Science, I focus on building responsive,
                  user-friendly applications with modern technologies.
                </p>
                <p className="text-muted-foreground">
                  With experience in various projects ranging from e-commerce
                  platforms to healthcare management systems, I enjoy solving
                  complex problems and creating intuitive user experiences.
                </p>
              </div>
            </div>
          </section>
        </Suspense>

        {/* Skills Section */}
        <Suspense
          fallback={
            <div className="animate-pulse bg-muted h-64 rounded-lg"></div>
          }
        >
          <section id="skills" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="C++" />
                  <SkillBadge name="Python" />
                  <SkillBadge name="JavaScript" />
                  <SkillBadge name="TypeScript" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="HTML" />
                  <SkillBadge name="CSS" />
                  <SkillBadge name="Tailwind" />
                  <SkillBadge name="React.js" />
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express.js" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="Redux" />
                  <SkillBadge name="Shadcn" />
                  <SkillBadge name="RESTful APIs" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Database Systems</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="MySQL" />
                  <SkillBadge name="PostgreSQL" />
                  <SkillBadge name="MongoDB" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Other Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="AWS" />
                  <SkillBadge name="Docker" />
                  <SkillBadge name="Kubernetes" />
                  <SkillBadge name="GitOps" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="GitHub" />
                </div>
              </div>
            </div>
          </section>
        </Suspense>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 border-b pb-2">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<LoadingCard />}>
              {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Suspense>
          </div>
        </section>

        {/* Experience Section */}
        <Suspense
          fallback={
            <div className="animate-pulse bg-muted h-64 rounded-lg"></div>
          }
        >
          <section id="experience" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">
              Leadership Experience
            </h2>
            <div className="space-y-6">
              <ExperienceCard
                title="Design Co-Head"
                organization="IEEE BU (Student Chapter of Bennett University)"
                period="Aug 2023 - Aug 2024"
                responsibilities={[
                  "Led the design team in creating visual content for events, promotions, and social media, ensuring brand consistency and high-quality output.",
                  "Managed and coordinated design tasks across multiple events, working closely with the event and marketing teams to ensure timely delivery during my tenure.",
                  "Spearheaded the creative direction for all chapter events and campaigns, delivering innovative design solutions that aligned with IEEE's global branding.",
                ]}
              />
            </div>
          </section>
        </Suspense>

        {/* Contact Section */}
        <Suspense
          fallback={
            <div className="animate-pulse bg-muted h-64 rounded-lg"></div>
          }
        >
          <section id="contact" className="py-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 border-b pb-2">
              Contact Me
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get In Touch</h3>
                <p className="text-muted-foreground">
                  I'm currently looking for new opportunities. Whether you have
                  a question or just want to say hi, I'll try my best to get
                  back to you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MailIcon className="text-primary" />
                    <a
                      href="mailto:rachitkatyal7561@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      rachitkatyal7561@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="text-primary" />
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GithubIcon className="text-primary" />
                    <a
                      href="https://github.com/rachitkatyal04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold mb-4">
                  Send Me a Message
                </h3>
                <ClientOnly
                  fallback={
                    <div className="animate-pulse space-y-4">
                      <div className="h-10 bg-muted rounded" />
                      <div className="h-10 bg-muted rounded" />
                      <div className="h-20 bg-muted rounded" />
                    </div>
                  }
                >
                  <ContactForm />
                </ClientOnly>
              </div>
            </div>
          </section>
        </Suspense>
      </main>

      <ClientOnly fallback={<div className="h-16 bg-background border-t" />}>
        <Footer />
      </ClientOnly>
    </div>
  );
}
