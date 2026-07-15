import { useEffect, useState } from "react";
import FadeUp from "./FadeUp.jsx";
const resume = "/Noman_Nawaz_Khan_CV-2.pdf";
const SNIPPET = `const developer = {
  name: "Noman Nawaz",
  role: "MERN Stack Developer",
  stack: ["MongoDB","Express","React","Node"],
  hireable: true
};`;

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 2;
      setTyped(SNIPPET.slice(0, i));
      if (i >= SNIPPET.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="pt-[150px] nav:pt-[180px] pb-[60px] nav:pb-[100px] relative"
    >
      <div className="max-w-[1140px] mx-auto px-7 grid grid-cols-1 nav:grid-cols-[1.05fr_0.95fr] gap-[60px] items-center">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[0.8rem] text-cyan border border-cyan/30 bg-cyan/12 px-3 py-[6px] rounded-full mb-6">
            <span className="w-[6px] h-[6px] rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)] animate-pulse-dot"></span>
            Available for new opportunities
          </div>
          <h1 className="font-display font-bold leading-[1.06] tracking-[-0.02em] text-[clamp(2.6rem,5.5vw,4.2rem)]">
            Noman Nawaz
            <br />
            builds{" "}
            <span className="text-gradient-accent">full‑stack products</span> on
            the MERN stack.
          </h1>
          <p className="mt-[22px] text-[1.1rem] text-ink-muted max-w-[480px]">
            I design and ship web applications end to end — from MongoDB schemas
            to React interfaces — with a focus on clean architecture, fast APIs,
            and interfaces people actually enjoy using.
          </p>
          <div className="flex gap-[14px] mt-9 flex-wrap">
            <a
              href="#projects"
              className="px-[26px] py-[13px] rounded-[9px] font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all duration-200 bg-cyan text-[#04110f] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-8px_var(--color-cyan)]"
            >
              View my work →
            </a>
            <a
              href={resume}
              download="Noman-Nawaz-Resume.pdf"
              className="px-[26px] py-[13px] rounded-[9px] font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all duration-200 border border-border text-ink bg-transparent hover:border-amber hover:text-amber"
            >
              ↓ Download résumé
            </a>
          </div>
          <div className="flex gap-7 mt-12 flex-wrap">
            <div className="border-l-2 border-violet pl-[14px]">
              <div className="font-display font-bold text-[1.5rem]">4+</div>
              <div className="text-[0.8rem] text-ink-muted mt-[2px]">
                Shipped projects
              </div>
            </div>
            <div className="border-l-2 border-violet pl-[14px]">
              <div className="font-display font-bold text-[1.5rem]">1</div>
              <div className="text-[0.8rem] text-ink-muted mt-[2px]">
                Internship completed
              </div>
            </div>
            <div className="border-l-2 border-violet pl-[14px]">
              <div className="font-display font-bold text-[1.5rem]">7</div>
              <div className="text-[0.8rem] text-ink-muted mt-[2px]">
                Core technologies
              </div>
            </div>
          </div>
        </div>

        <FadeUp className="bg-panel border border-border rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-panel-2 border-b border-border">
            <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f56]"></span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]"></span>
            <span className="w-[11px] h-[11px] rounded-full bg-[#27c93f]"></span>
            <span className="ml-[10px] font-mono text-[0.78rem] text-ink-muted">
              developer.json
            </span>
          </div>
          <div className="p-[22px] px-5 font-mono text-[0.86rem] min-h-[280px]">
            <span className="whitespace-pre-wrap text-ink">{typed}</span>
            <span className="inline-block w-[7px] h-[16px] bg-cyan align-middle animate-blink-cursor"></span>
          </div>
          <div className="px-5 pb-5">
            <div className="flex gap-[10px] flex-wrap">
              {["MongoDB", "Express.js", "React", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.75rem] px-3 py-[7px] rounded-md border border-border text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
