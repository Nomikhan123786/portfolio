import FadeUp from "./FadeUp.jsx";

const JOBS = [
  {
    hash: " Jun 2026 – Present",
    title: "MERN Stack Developer Intern — Kiwi Logics Labs",
    meta: "Onsite",
    points: [
      "First working on the frontend developing",
      "Figma design into the real project frontend",
      "After this working on the MERN stack project using React , TailwindCSS, Node.js and Express.js",
    ],
  },
  {
    hash: " Jul 2026 – Present",
    title: "web Developer Intern — GAO TEK",
    meta: "remote",
    points: [
      "Developing the frontend web Application using HTML , CSS and javaScript",
      "Working with the teams to help hands-on experience",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7">
        <FadeUp className="mb-14 max-w-[640px]">
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            Experience
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Where I&apos;ve worked.
          </h2>
        </FadeUp>

        <FadeUp className="relative pl-8 before:content-[''] before:absolute before:left-[5px] before:top-[6px] before:bottom-[6px] before:w-[2px] before:bg-linear-to-b before:from-cyan before:to-violet">
          {JOBS.map((job, idx) => (
            <div
              key={job.title}
              className={`relative ${idx === JOBS.length - 1 ? "pb-0" : "pb-11"}`}
            >
              <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-bg border-2 border-cyan shadow-[0_0_0_4px_var(--color-bg)]"></div>
              <span className="font-mono text-[0.78rem] text-cyan mb-[6px] block">
                {job.hash}
              </span>
              <h3 className="text-[1.15rem] font-semibold">{job.title}</h3>
              <div className="text-[0.88rem] text-ink-muted my-1 mb-3">
                {job.meta}
              </div>
              <ul className="text-ink-muted text-[0.94rem] pl-[18px] list-disc space-y-[6px]">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
