import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Inhabitant Matrix — Domain, Alignment & Adversity",
  description:
    "A diagnostic framework for agency, moral architecture, and spiritual reality. Who occupies your space, and who holds the domain?",
  openGraph: {
    title: "The Inhabitant Matrix",
    description:
      "Domain, Alignment & Adversity — A Diagnostic Framework for Agency, Moral Architecture, and Spiritual Reality.",
    images: ["/images/core-split.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-obsidian font-sans antialiased selection:bg-gold/30">
        {children}
      </body>
    </html>
  );
}
