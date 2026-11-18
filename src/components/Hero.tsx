import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#3B82F6]" />
            <span className="text-xs font-medium text-[#60A5FA]">
              Open to frontend opportunities
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#94A3B8]">
            Hello, I'm
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#F8FAFC] sm:text-6xl lg:text-8xl">
            Miracle
            <br />
            <span className="text-[#3B82F6]">Nwachukwu.</span>
          </h1>
          <h2 className="mt-6 text-xl font-medium text-[#94A3B8] sm:text-2xl">
            Frontend Developer
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#64748B] sm:text-lg">
            Hi, welcome! I'm Miracle. I enjoy bringing ideas to life on the web,
            from shaping a page's layout to making sure the little details work
            just right. I build responsive interfaces with React and TypeScript,
            and I love learning something new with every project.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-[#060B1A] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Miracle_Nwachukwu_Frontend_Developer_CV.pdf`}
              download="Miracle_Nwachukwu_Frontend_Developer_CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 text-base font-semibold text-[#F8FAFC] transition duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-[#60A5FA]"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-[#475569]">
              Find me
            </span>
            <a
              href="https://github.com/MiMi-Tech19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Miracle's GitHub profile"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/miracle-nwachukwu-99653b2b6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Miracle's LinkedIn profile"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.22 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.4c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.87 1.72 1.87 3.05V20h3.44l.25-6.6Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/2348060666999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Miracle on WhatsApp"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.2-4.1A8.5 8.5 0 1 1 21 11.5Z" />
                <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.2.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-1.1-.3-2.2-.9-3.1-1.8-.9-.9-1.5-2-1.8-3.1-.1-.5 0-1 .2-1.4Z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@mimi_techgirlie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Miracle's TikTok profile"
              className="text-[#64748B] transition-colors hover:text-[#60A5FA]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.5 3c.3 1.7 1.3 2.9 3 3.5.5.2 1 .3 1.5.3v3.1a8.7 8.7 0 0 1-4.5-1.4v6.2a6.1 6.1 0 1 1-5.3-6v3.2a2.9 2.9 0 1 0 2.1 2.8V3h3.2Z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-[430px] items-center justify-center py-4"
        >
          <div className="absolute h-[340px] w-[340px] rounded-full border border-[#3B82F6]/20 sm:h-[390px] sm:w-[390px]" />
          <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-[#3B82F6]/10 sm:h-[440px] sm:w-[440px]" />
          <div className="absolute h-64 w-64 rounded-full bg-[#3B82F6]/15 blur-[80px]" />
          <div className="relative w-[min(82vw,360px)] overflow-hidden rounded-[2rem] border border-[#3B82F6]/30 bg-[#0C1428] p-3 shadow-2xl shadow-blue-950/40 sm:p-4">
            <div className="overflow-hidden rounded-[1.4rem] border border-white/5 bg-[#060B1A]">
              <img
                src={`${import.meta.env.BASE_URL}miracle-profile.jpg`}
                alt="Portrait of Miracle Nwachukwu"
                className="h-[420px] w-full object-cover object-top sm:h-[480px]"
              />{" "}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#475569] transition-colors hover:text-[#60A5FA] sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
