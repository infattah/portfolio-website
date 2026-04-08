import { contact } from "@/content/site";

type SiteCtaProps = {
  title: string;
  copy: string;
  primaryLabel?: string;
};

export default function SiteCta({
  title,
  copy,
  primaryLabel = "Start a conversation",
}: SiteCtaProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content animate-in">
          <span className="eyebrow">Let&apos;s Talk</span>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-copy">{copy}</p>
          <div className="button-row" style={{ justifyContent: "center" }}>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              {primaryLabel}
            </a>
            <a href={contact.email} className="button button--secondary">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}