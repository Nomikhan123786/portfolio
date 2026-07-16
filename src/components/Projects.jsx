import FadeUp from "./FadeUp.jsx";

const PROJECTS = [
  {
    icon: "🏥",
    color: "cyan",
    title: "Hospital Appointment System",
    desc: "A booking platform where patients schedule visits by department and doctor availability, while admins manage schedules from a dedicated dashboard in real time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    icon: "💼",
    color: "amber",
    title: "SwiftMove Clone",
    desc: "Frontend clone of a professional moving & relocation service landing page, featuring a hero section, service highlights, pricing, testimonials, and a quote request form, built with responsive design and modern UI components. Focused on replicating real-world business UX — including navigation, dark mode toggle, and multi-section layout — using React and Tailwind CSS",

    tags: ["React", "Tailwind CSS"],
  },
  {
    icon: "📝",
    color: "violet",
    title: "Task Manager",
    desc: "A task manager web csn add Task ,filter the task , edit the task and delete the task",
    tags: ["React"],
  },
  {
    icon: "👨‍💼",
    color: "cyan",
    title: "Portfolio",
    desc: "A portfolio project  in which I introduced myself and discussed my project which I built and add to gthub and deploy on vercel.",
    tags: ["React", "Express", "PostgreeSQL"],
  },
];

const colorClasses = {
  cyan: "bg-cyan/12 border-cyan/30",
  amber: "bg-amber/12 border-amber/30",
  violet: "bg-violet/12 border-violet/30",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7">
        <FadeUp className="mb-14 max-w-[640px]">
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            Projects
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Things I&apos;ve built and shipped.
          </h2>
          <p className="text-ink-muted mt-[14px] text-[1.02rem]">
            A selection of full-stack applications — each one built solo, from
            database schema to deployed UI.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 nav:grid-cols-2 gap-[26px]">
          {PROJECTS.map((project) => (
            <FadeUp
              key={project.title}
              className="border border-border rounded-2xl bg-panel p-7 relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)]"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-[46px] h-[46px] rounded-[11px] flex items-center justify-center text-[1.3rem] border ${colorClasses[project.color]}`}
                >
                  {project.icon}
                </div>
                <div className="flex gap-[10px]">
                  <a
                    href="#"
                    aria-label="GitHub repo"
                    className="w-[34px] h-[34px] rounded-lg border border-border flex items-center justify-center transition-colors duration-200 hover:border-cyan"
                  >
                    ⌥
                  </a>
                  <a
                    href="#"
                    aria-label="Live demo"
                    className="w-[34px] h-[34px] rounded-lg border border-border flex items-center justify-center transition-colors duration-200 hover:border-cyan"
                  >
                    ↗
                  </a>
                </div>
              </div>
              <h3 className="text-[1.2rem] font-semibold mb-[10px]">
                {project.title}
              </h3>
              <p className="text-ink-muted text-[0.94rem] mb-[18px]">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.72rem] px-[10px] py-[5px] rounded-md bg-ink/4 text-ink-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
