import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", category: "CORE", description: "Building semantic and accessible web structures.", type: "Frontend Development", color: "#E34F26" },
  { name: "CSS3", category: "CORE", description: "Creating responsive layouts and polished interfaces.", type: "Frontend Development", color: "#1572B6" },
  { name: "JavaScript", category: "CORE", description: "Adding logic, interactivity, and dynamic functionality.", type: "Frontend Development", color: "#F7DF1E" },
  { name: "React", category: "FRONTEND", description: "Building reusable components and interactive UIs.", type: "Frontend Development", color: "#61DAFB" },
  { name: "TypeScript", category: "FRONTEND", description: "Writing safer and more maintainable JavaScript code.", type: "Frontend Development", color: "#3178C6" },
  { name: "Git", category: "TOOLS", description: "Managing code, tracking changes, and collaborating.", type: "Development Tools", color: "#F05032" },
];

function BrandMark({ name, color }: { name: string; color: string }) {
  if (name === "HTML5" || name === "CSS3") {
    return <svg viewBox="0 0 48 48" className="h-7 w-7" role="img" aria-label={`${name} logo`}><path fill={color} d="M8 4h32l-3 35-13 5-13-5L8 4Z"/><text x="24" y="35" textAnchor="middle" fontSize="25" fontWeight="700" fill="#fff">{name === "HTML5" ? "5" : "3"}</text></svg>;
  }
  if (name === "JavaScript") return <svg viewBox="0 0 48 48" className="h-7 w-7" role="img" aria-label="JavaScript logo"><rect width="48" height="48" rx="5" fill={color}/><text x="24" y="35" textAnchor="middle" fontSize="25" fontWeight="700" fill="#111827">JS</text></svg>;
  if (name === "TypeScript") return <svg viewBox="0 0 48 48" className="h-7 w-7" role="img" aria-label="TypeScript logo"><rect width="48" height="48" rx="5" fill={color}/><text x="24" y="33" textAnchor="middle" fontSize="21" fontWeight="700" fill="#fff">TS</text></svg>;
  if (name === "React") return <svg viewBox="0 0 48 48" className="h-7 w-7" role="img" aria-label="React logo" fill="none" stroke={color} strokeWidth="2.3"><circle cx="24" cy="24" r="3.5" fill={color}/><ellipse cx="24" cy="24" rx="20" ry="8"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)"/></svg>;
  return <svg viewBox="0 0 48 48" className="h-7 w-7" role="img" aria-label="Git logo"><path fill={color} d="M45 22 26 3a4 4 0 0 0-6 0L3 20a4 4 0 0 0 0 6l19 19a4 4 0 0 0 6 0l17-17a4 4 0 0 0 0-6Z"/><path fill="#fff" d="M17 13a3 3 0 1 0 2.5 4.7v11.6a3 3 0 1 0 3 0V19h7a3 3 0 1 0 0-3H22a3 3 0 0 0-5-3Z"/></svg>;
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">My Skills</p><h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl">Technologies I use to <span className="text-[#3B82F6]">build for the web.</span></h2></div>
          <p className="max-w-md leading-7 text-[#94A3B8] lg:pb-1">I've developed practical skills across modern frontend technologies and use them to create responsive, functional, and user-friendly experiences.</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.article key={skill.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0C1428] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 transition duration-300 group-hover:bg-blue-500/15"><BrandMark name={skill.name} color={skill.color} /></div>
                <span className="rounded-full border border-white/5 bg-[#060B1A] px-3 py-1 text-[10px] font-medium tracking-wider text-[#64748B]">{skill.category}</span>
              </div>
              <div className="relative mt-6"><h3 className="text-xl font-semibold text-[#F8FAFC]">{skill.name}</h3><p className="mt-3 min-h-[48px] text-sm leading-6 text-[#64748B]">{skill.description}</p></div>
              <div className="relative mt-6 flex items-center justify-between border-t border-white/5 pt-4"><span className="text-xs text-[#475569]">{skill.type}</span><span className="text-[#475569] transition duration-300 group-hover:translate-x-1 group-hover:text-[#3B82F6]">↗</span></div>
            </motion.article>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#64748B]">Practical skills. Real projects. Continuous growth.</p>
          <a href="#projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] transition hover:text-[#3B82F6]">See what I've built<span className="transition-transform group-hover:translate-x-1">↗</span></a>
        </motion.div>
      </div>
    </section>
  );
}
