import Link from "next/link";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export default function NotFound() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <section className="hero">
          <div className="container empty-state stack">
            <span className="eyebrow">404</span>
            <h1 className="page-title">Page not found.</h1>
            <p className="lede">
              The page you are looking for does not exist or has moved.
            </p>
            <div className="button-row">
              <Link href="/" className="button button--primary">
                Back Home
              </Link>
              <Link href="/work" className="button button--secondary">
                View Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
