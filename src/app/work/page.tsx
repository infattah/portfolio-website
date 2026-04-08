import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { workItems, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Work | Abdul Fathah",
  description:
    "Selected work from Abdul Fathah across real estate, agency operations, lead qualification, CRM workflows, paid media, and growth systems.",
};

export default function WorkPage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPath="/work" />
      <main className="site-main">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow animate-in">Selected Work</span>
            <h1 className="page-title animate-in delay-1">
              Case studies built around business problems, not just channels.
            </h1>
            <div className="page-intro">
              <div className="page-intro__main">
                <p className="page-intro__lead animate-in delay-2">
                  These projects show how I approach growth when the real issue is not only acquisition, but the system around acquisition.
                </p>
              </div>
              <div className="page-intro__side animate-in delay-3">
                <div className="hero__meta" style={{ background: 'var(--surface)' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--foreground-muted)', lineHeight: 1.7 }}>
                    Each project answers four questions clearly:
                  </p>
                  <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem', color: 'var(--foreground-muted)', fontSize: '0.9rem', lineHeight: 2 }}>
                    <li>What was broken?</li>
                    <li>What changed?</li>
                    <li>What improved?</li>
                    <li>What does that reveal about how I work?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="work-page-grid">
              {workItems.map((project, i) => (
                <article key={project.slug} className={`work-row animate-in`} style={{ animationDelay: `${0.1 * i}s` }}>
                  <div className="work-row__meta">{project.industry}</div>
                  <div className="work-row__content">
                    <h2 className="work-row__title">{project.title}</h2>
                    <p className="work-row__summary">{project.challenge}</p>
                    <p className="work-row__summary mt-1" style={{ color: 'var(--foreground)' }}>{project.result}</p>
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    className="button button--secondary work-row__cta"
                  >
                    View case study
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-in">
              <span className="eyebrow">Let&apos;s Talk</span>
              <h2 className="cta-title">Want to talk through a similar growth problem?</h2>
              <p className="cta-copy">
                If your business has lead flow but weak systems behind it, I can help diagnose where the breakdown is.
              </p>
              <div className="button-row" style={{ justifyContent: "center" }}>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--primary"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
