import { useState } from "react";
import FadeUp from "./FadeUp.jsx";
import { Link } from "react-router-dom";

const resume = "/Noman_Nawaz_Khan_CV-2.pdf";
const LINKS = [
  {
    icon: "✉",
    label: "Email",
    value: "nomank7887682@gmail.com",
    to: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKZjmQpVgWMnjknbcFPkVzvwqBfQSmqnqWxwkBsBnlWLSlBFtDMSzhnBqXgSSKpNPCqTlZ",
    hover: "hover:border-cyan",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "https://github.com/Nomikhan123786",
    to: "https://github.com/Nomikhan123786",
    hover: "hover:border-violet",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "www.linkedin.com/in/noman-nawaz-khan-305557283",
    to: "https://www.linkedin.com/in/noman-nawaz-khan-305557283",
    hover: "hover:border-amber",
  },
  {
    icon: "↓",
    label: "Résumé",
    value: "Download PDF",
    to: "/api/resume",
    download: true,
    hover: "hover:border-cyan",
  },
];

// Vite proxies /api to the Express server in dev (see vite.config.js);
// in production the same server serves both the built app and the API,
// so a relative path works in both cases without any extra config.
const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 nav:py-[120px]">
      <div className="max-w-[1140px] mx-auto px-7 grid grid-cols-1 nav:grid-cols-2 gap-[50px] items-start">
        <FadeUp>
          <span className="font-mono text-[0.82rem] text-amber tracking-[0.06em] uppercase mb-[10px] block">
            Contact
          </span>
          <h2 className="font-display font-bold tracking-[-0.01em] text-[clamp(1.8rem,3.4vw,2.6rem)]">
            Let&apos;s build something together.
          </h2>
          <p className="text-ink-muted mt-[14px] text-[1.02rem]">
            Open to full-time roles, internships, and freelance MERN projects. I
            usually reply within a day.
          </p>
          <div className="flex flex-col gap-[14px] mt-7">
            {LINKS.map((link) =>
              link.download ? (
                <a
                  key={link.label}
                  href={resume}
                  download="Noman_Nawaz_Khan_CV.pdf"
                  className={`flex items-center gap-[14px] px-[18px] py-4 border border-border rounded-[11px] bg-panel transition-all duration-200 hover:translate-x-1 ${link.hover}`}
                >
                  <div className="w-[38px] h-[38px] rounded-[9px] bg-ink/5 flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.78rem] text-ink-muted">
                      {link.label}
                    </div>
                    <div className="font-semibold text-[0.95rem]">
                      {link.value}
                    </div>
                  </div>
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`flex items-center gap-[14px] px-[18px] py-4 border border-border rounded-[11px] bg-panel transition-all duration-200 hover:translate-x-1 ${link.hover}`}
                >
                  <div className="w-[38px] h-[38px] rounded-[9px] bg-ink/5 flex items-center justify-center shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[0.78rem] text-ink-muted">
                      {link.label}
                    </div>
                    <div className="font-semibold text-[0.95rem]">
                      {link.value}
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>
        </FadeUp>

        <FadeUp className="border border-border rounded-2xl bg-panel p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-[18px]">
              <label
                htmlFor="fname"
                className="block text-[0.85rem] text-ink-muted mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="fname"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-panel-2 border border-border rounded-[9px] px-[14px] py-3 text-ink font-sans text-[0.94rem] outline-none transition-colors duration-200 focus:border-cyan"
              />
            </div>
            <div className="mb-[18px]">
              <label
                htmlFor="femail"
                className="block text-[0.85rem] text-ink-muted mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="femail"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-panel-2 border border-border rounded-[9px] px-[14px] py-3 text-ink font-sans text-[0.94rem] outline-none transition-colors duration-200 focus:border-cyan"
              />
            </div>
            <div className="mb-[18px]">
              <label
                htmlFor="fmsg"
                className="block text-[0.85rem] text-ink-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="fmsg"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full bg-panel-2 border border-border rounded-[9px] px-[14px] py-3 text-ink font-sans text-[0.94rem] outline-none transition-colors duration-200 focus:border-cyan resize-y min-h-[100px]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full justify-center px-[26px] py-[13px] rounded-[9px] font-semibold text-[0.95rem] inline-flex items-center gap-2 transition-all duration-200 bg-cyan text-[#04110f] hover:-translate-y-[2px] hover:shadow-[0_10px_30px_-8px_var(--color-cyan)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" && "Sending…"}
              {status === "sent" && "Message sent ✓"}
              {status === "error" && "Something went wrong — try again"}
              {status === "idle" && "Send message →"}
            </button>
            <p className="text-[0.82rem] text-ink-muted mt-[14px]">
              Messages are saved to a PostgreSQL database via the built-in
              Express API (<code>server/</code>). See the project README for
              setup.
            </p>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
