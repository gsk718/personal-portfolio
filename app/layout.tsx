import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Kumar — Software Engineer",
  description: "Gaurav Kumar is a software engineer and full-stack developer building applications, backend systems, and software products.",
  openGraph: {
    title: "Gaurav Kumar — Software Engineer",
    description: "Full-stack applications, backend systems, and software products by Gaurav Kumar.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
