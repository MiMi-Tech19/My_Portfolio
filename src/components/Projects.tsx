import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

type ProjectId = "ecommerce" | "huddle";

type Project = {
  id: ProjectId;
  number: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "ecommerce",
    number: "01",
    title: "E-commerce Admin Dashboard",
    category: "Ongoing full-stack web application",
    summary:
      "A growing administration workspace for managing an online store, its team, products, orders, sessions, and visitor activity.",
    image: `${import.meta.env.BASE_URL}ecommerce-dashboard.png`,
    alt: "E-commerce administration dashboard showing visitor analytics, traffic metrics, and engagement charts",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Neon",
    ],
    live: "https://ecommerce-admin-dashboard-sigma-pearl.vercel.app/",
    github: "https://github.com/MiMi-Tech19/ecommerce-admin-dashboard",
  },
  {
    id: "huddle",
    number: "02",
    title: "Huddle",
    category: "Team messaging web application",
    summary:
      "A team messaging space built around channels, direct messages, and everyday conversations.",
    image: `${import.meta.env.BASE_URL}huddle-preview.png`,
    alt: "Huddle team messaging application workspace showing channels and conversations",
    tags: ["React", "TypeScript", "JavaScript", "CSS", "Node.js"],
    github: "https://github.com/uluchukwu/huddle",
    live: "https://huddle-group1-frontend.onrender.com/channels",
  },
];

const stories: Record<
  ProjectId,
  {
    intro: string;
    startingPoint: string;
    role: string;
    approach: string[];
    features: string[];
    challenge: string[];
    persistence: string;
    takeaway: string;
    ongoing?: string;
  }
> = {
  ecommerce: {
    intro:
      "This project started with a clear goal: build an admin space that could do more than display numbers. I wanted to create a place where the people running an online store could manage products and orders, oversee their team, and understand what visitors were doing on the storefront. As the idea grew, so did the application, and so did my responsibilities as a developer.",
    startingPoint:
      "I began on the frontend, shaping the dashboard into a usable experience. I worked through the layout, navigation, data cards, tables, forms, and the different views an administrator or staff member would need. At first, most of my attention was on making the interface feel consistent and making each part of the dashboard useful. But I soon reached a point where a polished screen was not enough: the actions needed to save real data, users needed to sign in securely, and different people needed different levels of access.",
    role: "I took responsibility for building the frontend and then pushed myself into backend development so I could connect the interface to real application data. I had not worked on a backend at this level before, so this project became both a product build and a steep learning experience. I worked with React and TypeScript on the client, and Node.js, Express, Prisma, and PostgreSQL on the server, with Neon hosting the database.",
    approach: [
      "Built the dashboard experience with React, TypeScript, Vite, and Tailwind CSS, organising the interface into reusable components and clear management areas.",
      "Added product and inventory workflows, order management, bulk operations, and dashboard analytics so store activity could be reviewed from one place.",
      "Introduced role-based access control. When someone signs up, the system assigns the STAFF role by default. An existing administrator can then review the account and promote that user to ADMIN when appropriate. This keeps administrative privileges from being granted automatically at registration.",
      "Built authentication and database-backed session management, including visibility into active devices, login and logout history, individual session termination, and logging out of all devices.",
      "Connected the dashboard to backend APIs and a PostgreSQL database through Prisma. I also worked through deployment configuration and environment variables so the application could run outside my local machine.",
      "Added visitor analytics with total visitors, unique visitors, and page views, alongside reporting views for traffic and engagement. The architecture is intended to support storefront tracking as the project develops.",
      "Used Vitest, React Testing Library, and MSW as part of the testing setup, and worked through linting and production-build checks as features were added.",
    ],
    features: [
      "Product and inventory management",
      "Order management and bulk actions",
      "Admin and staff user management",
      "Default STAFF role on signup, with admin-controlled promotion to ADMIN",
      "Protected areas and role-based permissions",
      "Active session and device monitoring",
      "Login/logout history, session termination, and logout-all-devices controls",
      "Visitor analytics for total visitors, unique visitors, and page views",
    ],
    challenge: [
      "The biggest leap was moving beyond frontend work into a backend I had never built before. I had to learn how routes, controllers, authentication, database models, and API responses fit together. It was a different way of thinking: the interface was only one part of a system that also needed to protect data and enforce permissions.",
      "Integration brought its own debugging work. A screen could look correct but still fail if the request shape, authentication token, database relation, or server response did not match what the frontend expected. I learned to trace a feature through the whole path, from the user action, to the API request, to the server and database, and back to the UI, instead of treating each layer separately.",
      "I also had to work through deployment details such as environment variables, database connectivity, CORS, and keeping the frontend and backend configuration aligned. Those issues taught me that getting an application working locally is not the same as preparing it to run reliably in a hosted environment.",
    ],
    persistence:
      "There were long evenings of reading documentation, testing an idea, finding an error, and going back through the flow until it made sense. Some problems took several attempts because I was learning the backend concepts while trying to apply them to a real project. I kept breaking the work into smaller pieces, checking one layer at a time, writing tests around important behaviour, and returning to the feature until the pieces worked together. The photo here is a small glimpse of the learning and hands-on work behind the build, not just the finished dashboard.",
    takeaway:
      "This project changed how I see myself as a developer. I started with a frontend goal and gradually learned to think about the server, database, authentication, permissions, testing, and deployment too. It taught me to stay patient with unfamiliar problems, read carefully, test assumptions, and keep going when the first solution does not work.",
    ongoing:
      "This is still an ongoing project. I am continuing to improve the existing workflows, refine the analytics experience, and add more features as the application develops.",
  },
  huddle: {
    intro:
      "Huddle is a team messaging application built to give everyday team conversations a clear place to happen. It brings channels and direct messages into one workspace, making it easier for people to follow discussions and communicate with their team.",
    startingPoint:
      "Huddle was a group project, so the work involved more than building screens independently. We were contributing to one shared product, which meant keeping track of how our parts fitted together, communicating about implementation, and checking that the frontend and backend could work as one application. My focus was the frontend, while staying aligned with the wider team as the project took shape.",
    role: "My main contribution was frontend development and connecting the frontend to the backend. I worked with React and TypeScript, integrated the available APIs, and handled the client-side experience around authentication and messaging workflows. Because this was collaborative work, I also had to communicate progress, coordinate changes with the team, and make sure my frontend work remained compatible with the shared application.",
    approach: [
      "Built and refined the React interface using reusable components and responsive styling.",
      "Worked as part of a team on a shared codebase, keeping implementation decisions and integration work aligned with the wider project.",
      "Used the team GitHub workflow to work with shared project code and coordinate changes across the application.",
      "Connected frontend screens to backend endpoints so the application could work with server-provided data.",
      "Worked with the authentication flow and token-based requests, paying attention to how protected views respond to a user's session.",
      "Helped bring the channels and conversation experience together so users could move through the application more naturally.",
    ],
    features: [
      "Team channels and conversations",
      "Direct messaging experience",
      "Authentication-connected frontend flows",
      "Responsive interface for everyday team communication",
      "Frontend integration with backend APIs",
    ],
    challenge: [
      "One of the main challenges was making the frontend and backend agree. It was not enough to build a screen; I needed to understand what the API expected, what it returned, and how the interface should respond when a request succeeded or failed. In a team project, changes also had to fit with work happening elsewhere in the codebase, so communication and checking integration points mattered.",
      "Working through that integration helped me become more deliberate about request handling, application state, and the way a user moves from one part of the app to another. When something did not behave as expected, I had to trace the interaction rather than only adjust the visual component.",
    ],
    persistence:
      "The work involved plenty of small adjustments: checking a flow, testing it again, discussing integration details with the team, and refining the interface when the real API behaviour exposed something I had not accounted for. The team communication was important because one change could affect how another part of the application behaved. Working through those iterations helped me become more deliberate about explaining my progress, checking assumptions, and resolving integration issues together.",
    takeaway:
      "Huddle gave me valuable experience contributing to a team-built application, building a frontend that depends on a real backend, and communicating around shared implementation work. It strengthened my understanding of API integration, Git-based collaboration, and the importance of thinking about the complete user journey rather than only the individual components I write.",
  },
};

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
        >
          View Live Project <ExternalLink size={15} />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition hover:border-blue-500/30 hover:bg-blue-500/10"
        >
          View Repository <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}

export function ProjectStory({
  id,
  onBack,
}: {
  id: ProjectId;
  onBack: () => void;
}) {
  const project = projects.find((item) => item.id === id)!;
  const story = stories[id];

  return (
    <motion.section
      key={id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#060B1A] px-6 pb-24 pt-32 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] transition hover:text-[#60A5FA]"
        >
          <ArrowLeft size={17} /> Back to projects
        </button>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
          Project {project.number} · {project.category}
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#94A3B8]">
          {story.intro}
        </p>

        <div className="mt-7 rounded-2xl border border-[#3B82F6]/20 bg-[#0C1428] p-5 sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
            Explore the project
          </p>
          <ProjectActions project={project} />
          {project.id === "ecommerce" && (
            <p className="mt-3 text-xs leading-5 text-[#64748B]">
              The live link opens the deployed dashboard. Some features may
              still be evolving as development continues.
            </p>
          )}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0C1428] p-2 sm:p-3">
          <img
            src={project.image}
            alt={project.alt}
            className="max-h-[620px] w-full rounded-2xl object-contain object-top"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-[#60A5FA]"
            >
              {tag}
            </span>
          ))}
        </div>

        <StorySection eyebrow="The beginning" title="Where it started">
          <p>{story.startingPoint}</p>
        </StorySection>

        <StorySection eyebrow="My contribution" title="What I worked on">
          <p>{story.role}</p>
        </StorySection>

        {project.id === "huddle" && (
          <section className="mt-14 border-t border-white/10 pt-10">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">
                Working as a team
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                The importance of communication and collaboration
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#94A3B8]">
                <p>
                  Building Huddle was a collaborative experience that taught me
                  that successful software development involves more than
                  writing code. It also requires communication, coordination,
                  and a willingness to learn from one another.
                </p>

                <p>
                  Working with other team members meant sharing progress,
                  discussing implementation decisions, asking questions when
                  something was unclear, and working through challenges
                  together. Since I focused mainly on the frontend and its
                  connection to the backend, communication was particularly
                  important in making sure both sides worked together as
                  expected.
                </p>

                <p>
                  This experience helped me appreciate the value of keeping
                  teammates informed, listening to different perspectives, and
                  addressing issues together rather than working in isolation.
                </p>
              </div>
            </div>

            <figure className="mt-8 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0C1428] p-2 sm:p-3">
              <img
                src={`${import.meta.env.BASE_URL}huddle-team-meeting.png`}
                alt="Team members collaborating during the Huddle project"
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
              <figcaption className="px-3 py-4 text-sm leading-6 text-[#64748B] sm:px-4">
                Team collaboration and communication during the Huddle project.
              </figcaption>
            </figure>
          </section>
        )}

        <StorySection eyebrow="Behind the build" title="How I approached it">
          <ul className="space-y-4">
            {story.approach.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </StorySection>

        {project.id === "ecommerce" && (
          <StorySection eyebrow="Inside the application" title="Key features">
            <ul className="grid gap-3 sm:grid-cols-2">
              {story.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/5 bg-[#0C1428] p-4 text-sm leading-6 text-[#94A3B8]"
                >
                  <span className="mr-2 text-[#60A5FA]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </StorySection>
        )}

        <StorySection eyebrow="The difficult parts" title="What challenged me">
          <div className="space-y-5">
            {story.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </StorySection>

        {project.id === "ecommerce" && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0C1428]">
            <img
              src={`${import.meta.env.BASE_URL}build-journey.jpg`}
              alt="Miracle working at her laptop and taking notes during her development learning journey"
              loading="lazy"
              className="max-h-[560px] w-full object-cover object-center"
            />
            <p className="px-5 py-4 text-sm leading-6 text-[#64748B] sm:px-6">
              A glimpse of the learning, research, and hands-on effort behind
              the project.
            </p>
          </div>
        )}

        <StorySection
          eyebrow="The persistence"
          title="The work behind the work"
        >
          <p>{story.persistence}</p>
        </StorySection>
        <StorySection eyebrow="Looking back" title="What I learned">
          <p>{story.takeaway}</p>
        </StorySection>

        {story.ongoing && (
          <div className="mt-12 rounded-2xl border border-[#3B82F6]/20 bg-[#0C1428] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
              Still in progress
            </p>
            <p className="mt-3 text-base leading-7 text-[#94A3B8]">
              {story.ongoing}
            </p>
          </div>
        )}

        <div className="mt-12 border-t border-white/10 pt-8">
          <ProjectActions project={project} />
          <button
            onClick={onBack}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#94A3B8] transition hover:text-[#60A5FA]"
          >
            <ArrowLeft size={16} /> Back to all projects
          </button>
        </div>
      </div>
    </motion.section>
  );
}

function StorySection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#F8FAFC]">{title}</h2>
      </div>
      <div className="space-y-4 text-base leading-8 text-[#94A3B8]">
        {children}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">
            A few things I've{" "}
            <span className="text-[#3B82F6]">been building.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">
            These projects reflect how I learn: by taking on real problems,
            exploring unfamiliar tools, and staying with the work until the
            pieces come together.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-[#1E3A6E] bg-[#0C1428] shadow-2xl shadow-blue-950/20"
            >
              <a
                href={`#project-${project.id}`}
                className="grid w-full text-left lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div className="relative overflow-hidden bg-[#060B1A] p-4 sm:p-6">
                  <div className="absolute left-8 top-8 z-10 rounded-full border border-blue-400/30 bg-[#060B1A]/90 px-4 py-2 text-xs font-semibold text-[#60A5FA] backdrop-blur">
                    {project.number === "01" ? "Featured" : "Project"}
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#060B1A]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
className="h-[280px] w-full object-contain object-center transition duration-700 group-hover:scale-[1.02] sm:h-[360px]"                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <p className="mb-3 text-sm font-medium text-[#3B82F6]">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 leading-7 text-[#94A3B8]">
                    {project.summary}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-[#60A5FA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA]">
                    Read the project story{" "}
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
