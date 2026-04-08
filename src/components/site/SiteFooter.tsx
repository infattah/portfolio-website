import { contact } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">
          © {new Date().getFullYear()} Abdul Fathah. Growth marketing, paid
          media, CRM, and automation.
        </p>
        <div className="footer__links">
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={contact.email}>Email</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
