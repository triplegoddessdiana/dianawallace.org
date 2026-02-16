import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import BodyClass from "./BodyClass";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dianawallace.org"),
  title: {
    default: "Diana Wallace",
    template: "%s · Diana Wallace",
  },
  description:
    "Essays, books, and audio by Diana Wallace on human agency, memory, and meaning in an automated world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BodyClass />

        <header className="site-header">
          <nav className="site-nav" aria-label="Primary">
            <Link className="brand" href="/">
              Diana Wallace
            </Link>

            <div className="nav-links">
              <Link href="/work">The Work</Link>
              <Link href="/books">Books</Link>
              <Link href="/audio">Audio</Link>
              <Link href="/essays">Essays</Link>
              <Link href="/philosophy">Philosophy</Link>
              <Link href="/about">About</Link>
              <Link className="start-button" href="/start">
                Start Here
              </Link>
            </div>
          </nav>
        </header>

        <main className="page">{children}</main>

        <footer className="site-footer">
          <p className="footer-links">
            <span>© {new Date().getFullYear()} Diana Wallace</span>
            <span aria-hidden="true"> · </span>
            <a href="/privacy">Privacy</a>
            <span aria-hidden="true"> · </span>
            <a href="/press">Press</a>
            <span aria-hidden="true"> · </span>
            <a href="/contact">Contact</a>
          </p>

          <figure className="footer-signature">
            <img
              src="/about/diana-wallace-signature.png"
              alt="Diana Wallace signature"
            />
          </figure>
        </footer>
      </body>
    </html>
  );
}
