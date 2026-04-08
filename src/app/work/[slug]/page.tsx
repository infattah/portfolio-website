import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteCta from "@/components/site/SiteCta";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { workDetails, workItems, contact } from "@/content/site";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = workItems.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Abdul Fathah`,
    description: project.result,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = workItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details = workDetails[project.slug as keyof typeof workDetails];

  return (
    <div className="site-shell">
      <SiteHeader currentPath="/work" />
      <main className="site-main">
        <section className="page-hero">
          <div className="container">
            <Link 
              href="/work" 
              className="animate-in"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--foreground-muted)',
                marginBottom: '2rem',
                transition: 'color 0.3s ease'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>&#8592;</span> Back to Work
            </Link>
            <span className="eyebrow animate-in">{project.industry}</span>
            <h1 className="page-title animate-in delay-1">{project.title}</h1>
            <div className="page-intro">
              <div className="page-intro__main">
                <p className="page-intro__lead animate-in delay-2">
                  {details.context}
                </p>
              </div>
              <div className="page-intro__side animate-in delay-3">
                <div className="hero__meta" style={{ background: 'var(--surface)' }}>
                  <div className="meta-row" style={{ border: 'none', paddingTop: 0 }}>
                    <div className="meta-item">
                      <span className="meta-label">Industry</span>
                      <span className="meta-value">{project.industry}</span>
                    </div>
                    <div className="meta-item" style={{ marginTop: '1rem' }}>
                      <span className="meta-label">Focus</span>
                      <span className="meta-value" style={{ fontSize: '0.85rem' }}>{project.takeaway}</span>
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
              <span className="eyebrow">The Challenge</span>
              <h2 className="section-title">{project.challenge}</h2>
            </div>
            <div className="about-section">
              <p className="about-section__copy animate-in delay-1">
                {details.problem}
              </p>
              <div className="quote-panel animate-in delay-2" style={{ marginTop: '2rem', maxWidth: '600px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--foreground)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                  "{project.takeaway}"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">What I Built</span>
              <h2 className="section-title">The operating layer behind the result</h2>
            </div>
            <div className="services-grid">
              {details.built.map((item, i) => (
                <div key={i} className="service-block animate-in" style={{ animationDelay: `${0.1 * i}s` }}>
                  <span className="service-block__number">0{i + 1}</span>
                  <p className="service-block__copy" style={{ color: 'var(--foreground)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header animate-in">
              <span className="eyebrow">The Outcome</span>
              <h2 className="section-title">{project.result}</h2>
            </div>
            <div className="about-section">
              <p className="about-section__copy animate-in delay-1">
                {details.outcome}
              </p>
            </div>
            <div className="quote-panel animate-in delay-2" style={{ marginTop: '3rem', maxWidth: '600px' }}>
              <p style={{ fontSize: '1.25rem', color: 'var(--foreground)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                "This project shows how I improve growth by fixing the system around the lead, not only the campaign generating it."
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content animate-in">
              <span className="eyebrow">Let&apos;s Talk</span>
              <h2 className="cta-title">Want to discuss a similar problem?</h2>
              <p className="cta-copy">
                If you have lead flow but weak systems behind it, I can help diagnose where the breakdown is.
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