import type { Metadata } from "next";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact | Abdul Fathah",
  description:
    "Contact Abdul Fathah for senior marketing roles, freelance growth work, CRM systems, paid media, and automation projects.",
};

const contactCards = [
  {
    label: "WhatsApp",
    href: contact.whatsapp,
    detail: "+971 54 567 6559",
    note: "Best for direct conversations and fast-moving opportunities.",
  },
  {
    label: "Email",
    href: contact.email,
    detail: contact.emailLabel,
    note: "Best for role discussions, formal inquiries, and project details.",
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    detail: "linkedin.com/in/abdulfathah",
    note: "Best for professional introductions and network-based outreach.",
  },
];

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader currentPath="/contact" />
      <main className="site-main">
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow animate-in">Contact</span>
            <h1 className="page-title animate-in delay-1">
              Start with a short message.
            </h1>
            <div className="page-intro">
              <div className="page-intro__main">
                <p className="page-intro__lead animate-in delay-2">
                  Open to senior marketing roles, selected freelance work, and growth conversations where paid media, CRM, automation, and conversion systems need to work better together.
                </p>
              </div>
              <div className="page-intro__side animate-in delay-3">
                <div className="hero__meta" style={{ background: 'var(--surface)' }}>
                  <div className="meta-row" style={{ border: 'none', paddingTop: 0 }}>
                    <div className="meta-item">
                      <span className="meta-label">Base</span>
                      <span className="meta-value">UAE</span>
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
              <span className="eyebrow">Contact Methods</span>
              <h2 className="section-title">Choose your preferred channel</h2>
            </div>
            <div className="contact-grid">
              {contactCards.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`contact-card animate-in`}
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className="contact-card__icon">
                    {item.label === "WhatsApp" && "💬"}
                    {item.label === "Email" && "✉️"}
                    {item.label === "LinkedIn" && "💼"}
                  </div>
                  <h3 className="contact-card__label">{item.label}</h3>
                  <p className="contact-card__value">{item.detail}</p>
                  <p className="contact-card__desc">{item.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="container">
            <div className="cta-content animate-in" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">You do not need a long brief.</span>
              <h2 className="cta-title" style={{ marginTop: '1rem' }}>Send a short note.</h2>
              <p className="cta-copy">
                Send a short note with context on the role, project, or growth problem. A few lines are enough to start the conversation.
              </p>
              <div className="button-row mt-3" style={{ justifyContent: 'center' }}>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--primary"
                >
                  Message on WhatsApp
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