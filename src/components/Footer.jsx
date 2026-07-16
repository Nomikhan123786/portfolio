const resume = "Noman_Nawaz_Khan_CV-2";
export default function Footer() {
  return (
    <footer className="border-t border-border py-9 text-center">
      <div className="font-mono flex justify-center gap-[22px] mb-4">
        <a
          href="https://github.com/Nomikhan123786"
          className="text-ink-muted transition-colors duration-200 hover:text-cyan"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/noman-nawaz-khan"
          className="text-ink-muted transition-colors duration-200 hover:text-cyan"
        >
          LinkedIn
        </a>
        <a
          href={resume}
          className="text-ink-muted transition-colors duration-200 hover:text-cyan"
        >
          Résumé
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKZjmQpVgWMnjknbcFPkVzvwqBfQSmqnqWxwkBsBnlWLSlBFtDMSzhnBqXgSSKpNPCqTlZ"
          className="text-ink-muted transition-colors duration-200 hover:text-cyan"
        >
          Email
        </a>
      </div>
      <p className="text-[0.85rem] text-ink-muted font-mono">
        // built with React + Tailwind mindset — coded in HTML/CSS/JS · © 2026
        Noman Nawaz Khan
      </p>
    </footer>
  );
}
