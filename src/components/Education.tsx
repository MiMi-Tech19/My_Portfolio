import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    period: "2020 – 2025",
    title: "Bachelor of Arts Education (BA.Ed)",
    focus: "English Language Education",
    institution: "University of Port Harcourt",
    description: "A foundation in communication, language, research, and presenting ideas clearly.",
  },
  {
    icon: Code2,
    period: "2025-2026",
    title: "Frontend Engineering",
    focus: "Web development training",
    institution: "AltSchool Africa",
    description: "Learned the foundations of frontend development and built practical skills in HTML, CSS, JavaScript, React, and modern web development workflows.",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-[#060B1A] px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">Education & learning</p>
          <h2 className="text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl">The learning behind <span className="text-[#3B82F6]">the work.</span></h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#94A3B8]">My academic background and the programme that helped me find my way into frontend development.</p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.institution} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-2xl border border-white/5 bg-[#0C1428] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-[#3B82F6]"><Icon size={23} /></div>
                  <span className="rounded-full border border-white/5 bg-[#060B1A] px-3 py-1.5 text-[10px] font-medium tracking-wider text-[#64748B]">{item.period}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#F8FAFC]">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#60A5FA]">{item.focus}</p>
                <p className="mt-1 text-sm text-[#94A3B8]">{item.institution}</p>
                <p className="mt-4 text-sm leading-6 text-[#64748B]">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
