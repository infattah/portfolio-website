import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abdul Fathah | Growth Systems Builder",
    template: "%s | Abdul Fathah",
  },
  description:
    "Marketer first. Systems-minded by experience. Abdul Fathah builds revenue-focused marketing infrastructure across paid media, CRM, automation, tracking, and AI.",
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
