import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { contact, featuredWins } from "@/content/site";

export const metadata: Metadata = {
  title: "Abdul Fathah | Growth Marketing Portfolio",
  description:
    "Growth marketer in the UAE focused on paid media, CRM, automation, attribution, and lead generation systems that improve pipeline quality and conversion.",
};

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPath="/" />
      <main className="site-main">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content animate-in">
              <span className="eyebrow">Growth Marketing Portfolio</span>
              <h1 className="display">
                Growth marketing with stronger systems behind it.
              </h1>
              <p className="lede">
                I help businesses improve lead generation, follow-up, tracking, and conversion by connecting paid media, CRM, automation, and attribution into one working system.
              </p>
              <div className="button-row">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--primary"
                >
                  Chat on WhatsApp
                </a>
                <Link href="/work" className="button button--secondary">
                  View Work
                </Link>
              </div>
            </div>
            <div className="hero__proof animate-in delay-2">
              <div className="hero__media">
                <Image
                  src="/profile.png"
                  alt="Abdul Fathah"
                  width={900}
                  height={1100}
                  priority
                />
              </div>
              <div className="hero__meta">
                <p className="hero__statement">
                  &quot;I build the system behind growth, not just the campaign in front of it.&quot;
                </p>
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label">Base</span>
                    <span className="meta-value">UAE</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Focus</span>
                    <span className="meta-value">Lead generation, CRM, automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">Why This Work Matters</span>
              <h2 className="section-title">Most growth problems start after the click.</h2>
              <p className="section-copy">
                Many businesses do not have an ads problem. They have a systems problem. Leads come in, but tracking is unclear, follow-up is slow, qualification is weak, and sales handoff depends on manual work.
              </p>
              <p className="section-copy mt-2">
                That is where revenue leaks. I work on that layer so acquisition performs better and the pipeline becomes easier to trust.
              </p>
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">What I Do</span>
              <h2 className="section-title">What I help businesses improve</h2>
            </div>
            <div className="kicker-grid">
              <div className="kicker animate-in delay-1">
                <div className="kicker__icon">&#8599;</div>
                <h3 className="kicker__title">Paid Media</h3>
                <p className="kicker__copy">
                  Build and optimize lead generation campaigns with a focus on conversion quality, not just low-cost volume.
                </p>
              </div>
              <div className="kicker animate-in delay-2">
                <div className="kicker__icon">&#9673;</div>
                <h3 className="kicker__title">Tracking and Attribution</h3>
                <p className="kicker__copy">
                  Improve the signal behind decision-making through cleaner event tracking, conversion flow, and reporting logic.
                </p>
              </div>
              <div className="kicker animate-in delay-3">
                <div className="kicker__icon">&#8635;</div>
                <h3 className="kicker__title">CRM and Automation</h3>
                <p className="kicker__copy">
                  Route, score, qualify, and follow up on leads with less delay and less manual work.
                </p>
              </div>
              <div className="kicker animate-in delay-4">
                <div className="kicker__icon">&#9733;</div>
                <h3 className="kicker__title">AI-Enabled Workflows</h3>
                <p className="kicker__copy">
                  Use AI where it improves response speed, qualification quality, and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">Selected Work</span>
              <h2 className="section-title">Proof, not placeholder claims.</h2>
              <p className="section-copy">
                These case studies show how I approach growth problems where performance depends on better systems, not just better campaigns.
              </p>
            </div>
            <div className="work-grid">
              {featuredWins.map((item, i) => (
                <article key={item.name} className={`work-card animate-in delay-${i + 1}`}>
                  <span className="work-card__industry">{item.metric}</span>
                  <h3 className="work-card__title">{item.name}</h3>
                  <p className="work-card__summary">{item.context}</p>
                  <p className="work-card__summary">{item.summary}</p>
                  <div className="work-card__outcome">
                    <strong>{item.outcome}</strong>
                  </div>
                </article>
              ))}
            </div>
            <div className="button-row mt-3">
              <Link href="/work" className="button button--secondary">
                Explore Case Studies
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">Operating Advantage</span>
              <h2 className="section-title">I do not treat growth as just ads.</h2>
              <p className="section-copy">
                My advantage is not only campaign management. It is the ability to connect acquisition, tracking, qualification, automation, and follow-up into one operating layer.
              </p>
              <p className="section-copy mt-2">
                That creates faster response, better signal, fewer blind spots, and stronger commercial decision-making.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-in">
              <span className="eyebrow">Let&apos;s Talk</span>
              <h2 className="cta-title">Need a marketer who can build the system as well as run the growth work?</h2>
              <p className="cta-copy">
                If you need stronger lead generation, cleaner attribution, or a better conversion flow, start with a short message on WhatsApp or email.
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
