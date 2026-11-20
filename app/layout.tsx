import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Kumar — Software Engineer",
  description: "Gaurav Kumar is a software engineer and full-stack developer who builds thoughtful software and practical applications.",
  openGraph: {
    title: "Gaurav Kumar — Software Engineer",
    description: "Thoughtful software. Practical applications.",
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
