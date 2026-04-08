import type { Metadata } from "next";
import SiteCta from "@/components/site/SiteCta";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { expertise, timeline, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "About | Abdul Fathah",
  description:
    "Learn how Abdul Fathah combines performance marketing, CRM, automation, attribution, and cross-functional execution into one practical growth approach.",
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPath="/about" />
      <main className="site-main">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow animate-in">About</span>
            <h1 className="page-title animate-in delay-1">
              Marketer first. Built through cross-functional experience.
            </h1>
            <div className="page-intro">
              <div className="page-intro__main">
                <p className="page-intro__lead animate-in delay-2">
                  I became more effective at marketing by learning how the rest of the business actually works. Sales, operations, automation, reporting, and execution all shape whether growth performs in the real world.
                </p>
                <p className="page-intro__lead mt-2 animate-in delay-3">
                  That perspective is what made me a more practical operator.
                </p>
              </div>
              <div className="page-intro__side animate-in delay-4">
                <div className="hero__meta" style={{ background: 'var(--surface)' }}>
                  <div className="meta-row" style={{ border: 'none', paddingTop: 0 }}>
                    <div className="meta-item">
                      <span className="meta-label">Base</span>
                      <span className="meta-value">UAE</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Focus</span>
                      <span className="meta-value">Systems, not just campaigns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">How I Think</span>
              <h2 className="section-title">I think in revenue, not just reach.</h2>
            </div>
            <div className="about-section">
              <p className="about-section__copy animate-in delay-1">
                When I look at a growth problem, I start with the business outcome. Are the right leads coming in? Can the team respond fast enough? Is the handoff clean? Can the numbers be trusted?
              </p>
              <p className="about-section__copy mt-2 animate-in delay-2">
                That mindset keeps the work commercially grounded and makes it easier to spot where performance is actually breaking.
              </p>
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">What Shaped My Perspective</span>
              <h2 className="section-title">What working across functions taught me</h2>
            </div>
            <div className="kicker-grid">
              <div className="kicker animate-in delay-1">
                <h3 className="kicker__title">Sales and business development</h3>
                <p className="kicker__copy">
                  Lead volume means very little if qualification, response speed, and handoff are weak. Working close to sales changed how I define marketing success.
                </p>
              </div>
              <div className="kicker animate-in delay-2">
                <h3 className="kicker__title">Tech and development</h3>
                <p className="kicker__copy">
                  Hands-on experience with technical tools helps me build what I design, reduce dependency, and communicate clearly with technical teams.
                </p>
              </div>
              <div className="kicker animate-in delay-3">
                <h3 className="kicker__title">Creative and execution</h3>
                <p className="kicker__copy">
                  Understanding creative production, campaign assets, and storefront execution helps work move faster and with fewer bottlenecks.
                </p>
              </div>
              <div className="kicker animate-in delay-4">
                <h3 className="kicker__title">Operations and management</h3>
                <p className="kicker__copy">
                  Scaling delivery taught me how to create leverage, improve repeatability, and keep quality high while the workload grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">Core Expertise</span>
              <h2 className="section-title">The areas I work across most</h2>
            </div>
            <div className="services-grid">
              {expertise.map((item, i) => (
                <div key={item.title} className="service-block animate-in" style={{ animationDelay: `${0.1 * i}s` }}>
                  <span className="service-block__number">0{i + 1}</span>
                  <h3 className="service-block__title">{item.title}</h3>
                  <p className="service-block__copy">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">Experience Timeline</span>
              <h2 className="section-title">Career timeline</h2>
            </div>
            <div className="timeline">
              {timeline.map((item, i) => (
                <article key={item.company} className="timeline-item animate-in" style={{ animationDelay: `${0.1 * i}s` }}>
                  <div className="timeline-year">{item.period}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-content__role">{item.role}</h3>
                    <p className="timeline-content__company">{item.company}</p>
                    <p className="timeline-content__detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-in">
              <span className="eyebrow">Let&apos;s Talk</span>
              <h2 className="cta-title">Need someone who can connect strategy, systems, and execution?</h2>
              <p className="cta-copy">
                If that is the gap in your team or your business, the best next step is a direct conversation.
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