import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Monitor, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and well-structured code.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Building interfaces that work beautifully across devices.",
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    description:
      "Turning ideas into practical solutions through thoughtful development.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#3B82F6]">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="text-[#3B82F6]">digital experiences.</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Code visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#3B82F6]/20 bg-[#0C1428] sm:aspect-square sm:min-h-0">
              {" "}
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]/10 blur-[80px]" />
              {/* Personal portrait */}
              <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/5 bg-[#060B1A] shadow-2xl sm:inset-8">
                <img
                  src={`${import.meta.env.BASE_URL}about-workspace.jpg`}
                  alt="Miracle working at her laptop"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#060B1A]/95 via-[#060B1A]/55 to-transparent px-5 pb-5 pt-20 sm:px-6 sm:pb-6">
                  <p className="text-lg font-semibold text-[#F8FAFC]">Miracle Nwachukwu</p>
                  <p className="mt-1 text-sm text-[#93C5FD]">Frontend Developer</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-8 text-[#94A3B8] sm:text-lg">
              My path into tech has been shaped by curiosity and a love for learning. After earning my Bachelor's degree in English Language Education, I began learning frontend development through the AltSchool Africa programme. That experience introduced me to the craft of building for the web and gave me the confidence to keep learning by making real projects.
            </p>

            <p className="mt-5 text-base leading-8 text-[#64748B] sm:text-lg">
              Since then, I've been building with HTML, CSS, JavaScript, React, TypeScript, and Git. I especially enjoy the process of taking an idea, working through the details, and turning it into an interface that feels clear and easy to use. I'm always looking for ways to improve, try something new, and become a better developer.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-white/5 bg-[#0C1428]/60 p-5 transition-colors duration-300 hover:border-[#3B82F6]/30"
                  >
                    <Icon size={22} className="mb-4 text-[#3B82F6]" />

                    <h3 className="text-sm font-semibold text-[#F8FAFC]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#64748B]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA]"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
