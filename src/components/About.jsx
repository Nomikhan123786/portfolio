import FadeUp from "./FadeUp.jsx";
import noman from "../assets/images/noman.jpeg";
const FACTS = [
  { num: "1.5+", label: "Years building with MERN", color: "text-cyan" },
  { num: "10+", label: "REST APIs designed", color: "text-amber" },
  { num: "100%", label: "Responsive, always", color: "text-violet" },
];

export default function About() {
  return (
    <section id="about" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7 grid grid-cols-1 nav:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
        <FadeUp className="relative">
          <div className="aspect-square rounded-[20px] relative overflow-hidden bg-linear-to-br from-panel to-panel-2 border border-border flex items-center justify-center">
            <span className="font-display text-[5rem] font-bold code-icon-gradient opacity-90">
              <img src={noman} alt="" />
            </span>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-bg border border-border px-4 py-[10px] rounded-[10px] font-mono text-[0.78rem] text-cyan shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
            status: shipping 🚀
          </div>
        </FadeUp>

        <FadeUp>
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            About me
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)] mb-[22px]">
            Turning ideas into working products, one commit at a time.
          </h2>
          <p className="text-ink-muted mb-4 text-[1.02rem]">
            I&apos;m a{" "}
            <strong className="text-ink font-semibold">
              MERN stack developer
            </strong>{" "}
            who enjoys the full journey of building software — sketching a data
            model, wiring up a REST API, and polishing the last pixel of a React
            interface. I like projects that solve a real, everyday problem for
            real people.
          </p>
          <p className="text-ink-muted mb-4 text-[1.02rem]">
            My recent work includes a{" "}
            <strong className="text-ink font-semibold">
              Hospital Appointment System
            </strong>{" "}
            that cut manual booking errors for a small clinic, and a{" "}
            <strong className="text-ink font-semibold">Job Portal</strong>{" "}
            connecting applicants with recruiters through role-based dashboards.
            I care about code that&apos;s easy to read six months later, not
            just code that works today.
          </p>
          <p className="text-ink-muted mb-4 text-[1.02rem]">
            Outside of client work, I contribute to open-source utilities, write
            about JavaScript patterns, and I&apos;m always mid-way through
            breaking (and fixing) a side project.
          </p>
          <div className="grid grid-cols-2 nav:grid-cols-3 gap-4 mt-8">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border border-border rounded-xl p-[18px] bg-panel"
              >
                <div
                  className={`font-display font-bold text-[1.5rem] ${fact.color}`}
                >
                  {fact.num}
                </div>
                <div className="text-[0.8rem] text-ink-muted mt-1">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
