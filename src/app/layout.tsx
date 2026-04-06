import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Fathah | Full Stack Growth Marketer",
  description: "Portfolio of Abdul Fathah, a Full Stack Growth Marketer with 6+ years of experience in real estate, automotive, and SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
