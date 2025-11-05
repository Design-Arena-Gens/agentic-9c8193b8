import UtilityWidget from "./utility-widget";

export default function HomePage() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Agentic Starter</h1>
        <p>Fast, minimal Next.js app ready for Vercel.</p>
        <div className="cta-row">
          <a className="btn" href="/api/health">API Health</a>
          <a className="btn btn-secondary" href="https://nextjs.org" target="_blank" rel="noreferrer">Learn Next.js</a>
        </div>
      </div>

      <section className="card">
        <h2>Interactive Utility</h2>
        <UtilityWidget />
      </section>

      <footer>
        <span>Deployed to Vercel ? {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
