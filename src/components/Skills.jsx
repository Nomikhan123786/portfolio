import FadeUp from './FadeUp.jsx'

const LAYERS = [
  { tag: 'M', name: 'MongoDB', desc: 'Schema design, aggregation pipelines, Mongoose modeling for flexible, document-based data.', color: 'cyan' },
  { tag: 'E', name: 'Express.js', desc: 'Route architecture, middleware, authentication (JWT), and RESTful API design.', color: 'amber' },
  { tag: 'R', name: 'React', desc: 'Component-driven UIs, hooks, context/state management, and performance-conscious rendering.', color: 'violet' },
  { tag: 'N', name: 'Node.js', desc: 'Server-side JavaScript, async workflows, and integrating third-party services.', color: 'cyan' },
]

const TOOLS = [
  { label: 'Tailwind CSS', color: 'bg-cyan' },
  { label: 'Git & GitHub', color: 'bg-amber' },
  { label: 'REST API Design', color: 'bg-violet' },
  { label: 'JWT Authentication', color: 'bg-cyan' },
  { label: 'Postman', color: 'bg-amber' },
  { label: 'Redux Toolkit', color: 'bg-violet' },
  { label: 'Vercel / Render', color: 'bg-cyan' },
]

const colorClasses = {
  cyan: 'bg-cyan/12 text-cyan border-cyan/30',
  amber: 'bg-amber/12 text-amber border-amber/30',
  violet: 'bg-violet/12 text-violet border-violet/30',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7">
        <FadeUp className="mb-14 max-w-[640px]">
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            Skills
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            The stack, layer by layer.
          </h2>
          <p className="text-ink-muted mt-[14px] text-[1.02rem]">
            MERN isn&apos;t four separate tools — it&apos;s one pipeline from database to browser. Here&apos;s
            how each piece fits.
          </p>
        </FadeUp>

        <FadeUp className="flex flex-col gap-[14px] mb-12">
          {LAYERS.map((layer) => (
            <div
              key={layer.name}
              className="border border-border rounded-xl px-6 py-5 bg-panel flex items-center gap-5 transition-transform duration-250 hover:translate-x-[6px]"
            >
              <div
                className={`font-mono font-bold text-[0.95rem] w-[52px] h-[52px] rounded-[10px] flex items-center justify-center shrink-0 border ${colorClasses[layer.color]}`}
              >
                {layer.tag}
              </div>
              <div>
                <h4 className="text-[1.05rem] font-semibold mb-[3px]">{layer.name}</h4>
                <span className="text-[0.88rem] text-ink-muted">{layer.desc}</span>
              </div>
            </div>
          ))}
        </FadeUp>

        <FadeUp className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.label}
              className="flex items-center gap-[10px] px-4 py-[10px] rounded-[9px] border border-border bg-panel text-[0.92rem] font-medium transition-colors duration-200 hover:border-ink-muted"
            >
              <span className={`w-2 h-2 rounded-full ${tool.color}`}></span>
              {tool.label}
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
