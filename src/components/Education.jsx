import FadeUp from './FadeUp.jsx'

const EDU = [
  {
    title: 'BS Computer Science',
    meta: 'University of Engineering & Technology · 2021 – 2025',
    badge: 'CGPA 3.6 / 4.0',
  },
  {
    title: 'Full-Stack Web Development Certification',
    meta: 'Self-paced · MongoDB, Express, React, Node.js',
    badge: 'Completed 2024',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7">
        <FadeUp className="mb-14 max-w-[640px]">
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            Education
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Academic background.
          </h2>
        </FadeUp>

        <FadeUp>
          {EDU.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-2xl bg-panel px-7 py-[26px] flex justify-between items-center gap-5 flex-wrap mb-[18px]"
            >
              <div>
                <h3 className="text-[1.1rem] font-semibold">{item.title}</h3>
                <span className="text-[0.9rem] text-ink-muted">{item.meta}</span>
              </div>
              <div className="font-mono text-[0.85rem] text-amber border border-amber/30 bg-amber/12 px-[14px] py-2 rounded-lg">
                {item.badge}
              </div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
