import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";

type ProjectId = "huddle" | "ecommerce-admin-dashboard";

type CaseStudy = {
  number: string; name: string; subtitle: string; category: string; overview: string; role: string;
  implementation: string[]; challenges: string; lessons: string; technologies: string[]; live: string; github?: string;
};

const caseStudies: Record<ProjectId, CaseStudy> = {
  huddle: {
    number: "01",
    name: "Huddle",
    subtitle: "A shared space for team communication",
    category: "Team Communication Platform",
    overview: "Huddle is a team messaging application designed to bring conversations into one organised workspace. It supports channel-based communication and direct messages, helping teams keep discussions easier to follow.",
    role: "My main contribution was on the frontend. I worked on building the user-facing experience and connecting the frontend to the backend so that the interface could communicate with the application's data and services.",
    implementation: ["Built the interface with React and Vite, using TypeScript and CSS for structure, behaviour, and styling.", "Connected frontend screens to backend API endpoints and worked with the application's authentication flow.", "Worked with the existing messaging approach, which uses periodic polling to retrieve updates rather than a WebSocket connection.", "Focused on making the channel and conversation experience clear and usable across screen sizes."],
    challenges: "One of the meaningful parts of this work was getting the frontend and backend to work together. It meant understanding the API responses and authentication requirements, handling data in the interface, and tracing issues across the boundary between the two sides of the application.",
    lessons: "The project strengthened my understanding that frontend development is not only about what users see. A reliable interface also depends on how it communicates with services, handles application state, and responds when data changes.",
    technologies: ["React", "TypeScript", "JavaScript", "CSS", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://huddle-group1-frontend.onrender.com/channels",
    github: "https://github.com/uluchukwu/huddle",
  },
  "ecommerce-admin-dashboard": {
    number: "02",
    name: "E-commerce Admin Dashboard",
    subtitle: "Building the tools behind an online store",
    category: "Full-Stack Administration Platform",
    overview: "The E-commerce Admin Dashboard is an administration platform designed to help manage the operational side of an online store. The project grew from a frontend dashboard into a broader full-stack application, with a backend and database supporting its workflows.",
    role: "I worked across the frontend and backend. I built the dashboard experience and then took on backend development as a new challenge, connecting the interface to server-side routes, authentication, and a PostgreSQL database. This project pushed me to learn while building and to understand how the different parts of a web application fit together.",
    implementation: ["Built the frontend with React, TypeScript, Vite, and Tailwind CSS.", "Developed backend services with Node.js, Express, TypeScript, Prisma, and PostgreSQL, using Neon for hosted database infrastructure.", "Worked on administration workflows for products, orders, users, and staff management.", "Implemented database-backed session management, including active-device monitoring, login/logout history, individual session termination, and logout from all devices.", "Added an admin-facing visitor analytics foundation to track total visitors, unique visitors, and page views."],
    challenges: "The biggest learning curve was moving beyond the frontend and taking responsibility for backend concepts I had not worked with before. I had to understand server configuration, database connections, Prisma migrations, authentication cookies, CORS, and deployment considerations, then make sure the frontend and backend could communicate correctly.",
    lessons: "This project showed me how much I can learn by taking on unfamiliar parts of a problem. I became more comfortable thinking about the complete application: the interface, API, authentication, database, and deployment environment—not just the screen a user interacts with.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Prisma", "PostgreSQL", "Neon", "Vercel"],
    live: "https://ecommerce-admin-dashboard-sigma-pearl.vercel.app/",
  },
};

function ProjectDetails({ projectId }: { projectId: ProjectId }) {
  const project = caseStudies[projectId];
  const homeUrl = import.meta.env.BASE_URL;

  return (
    <main className="min-h-screen bg-[#060B1A] px-6 pb-24 pt-28 text-[#F8FAFC] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <a href={homeUrl} className="inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] transition hover:text-[#60A5FA]"><ArrowLeft size={16} /> Back to portfolio</a>

        <motion.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mt-12 border-b border-white/10 pb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">Project {project.number} · {project.category}</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{project.name}<span className="text-[#3B82F6]">.</span></h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#94A3B8]">{project.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]">View live project <ExternalLink size={16} /></a>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-blue-500/30 hover:bg-blue-500/10"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" /></svg> View repository <ArrowUpRight size={15} /></a>}
          </div>
        </motion.header>

        <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="space-y-12">
            <StorySection title="The idea" text={project.overview} />
            <StorySection title="My role" text={project.role} />
            <section>
              <SectionHeading>How I built it</SectionHeading>
              <ul className="mt-5 space-y-4">{project.implementation.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-[#94A3B8]"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3B82F6]" />{item}</li>)}</ul>
            </section>
            <StorySection title="A challenge I worked through" text={project.challenges} />
            <StorySection title="What I learned" text={project.lessons} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#0C1428] p-6">
              <div className="flex items-center gap-2 text-[#60A5FA]"><Layers3 size={18} /><h2 className="text-sm font-semibold">Tech stack</h2></div>
              <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-[#60A5FA]">{technology}</span>)}</div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-[#0C1428] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">A note on the process</p>
              <p className="mt-3 text-sm leading-6 text-[#94A3B8]">This case study focuses on my contribution and learning. The project details describe the work completed, not a claim that every feature is currently available in the public demo.</p>
            </div>
          </aside>
        </div>

        <div className="border-t border-white/10 pt-8"><a href={homeUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] transition hover:text-[#3B82F6]"><ArrowLeft size={16} /> Return to all projects</a></div>
      </div>
    </main>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl">{children}<span className="text-[#3B82F6]">.</span></h2>;
}

function StorySection({ title, text }: { title: string; text: string }) {
  return <section><SectionHeading>{title}</SectionHeading><p className="mt-5 text-base leading-8 text-[#94A3B8]">{text}</p></section>;
}

export default ProjectDetails;
