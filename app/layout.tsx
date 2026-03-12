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
    default: "Diana Wallace — Poet, Author, Essayist",
    template: "%s · Diana Wallace",
  },
  description:
    "Diana Wallace is the author of The Forgetting trilogy and host of the Expect Nothing podcast. Essays, poetry books, and audio on human agency, memory, and meaning in an automated world.",
  keywords: [
    "Diana Wallace",
    "Diana Wallace poet",
    "Diana Wallace author",
    "Diana Wallace books",
    "The Forgetting trilogy",
    "Expect Nothing podcast",
    "human agency",
    "poetry",
    "poems about forgetting",
    "poems about returning",
  ],
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    site: "@DianaWallace888",
    creator: "@DianaWallace888",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Diana Wallace",
    title: "Diana Wallace — Poet, Author, Essayist",
    description:
      "Author of The Forgetting trilogy. Essays, poetry books, and audio on human agency, memory, and meaning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Diana Wallace",
              url: "https://dianawallace.org",
              sameAs: [
                "https://x.com/DianaWallace888",
                "https://www.amazon.com/stores/Diana-Wallace/author/B0DQ1LGG1K",
              ],
              jobTitle: "Author",
              description:
                "Poet and author of The Forgetting trilogy. Host of the Expect Nothing podcast.",
              knowsAbout: [
                "Poetry",
                "Human Agency",
                "Philosophy",
                "Creative Writing",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Diana Wallace",
              url: "https://dianawallace.org",
              description:
                "Essays, books, and audio by Diana Wallace on human agency, memory, and meaning in an automated world.",
              author: {
                "@type": "Person",
                name: "Diana Wallace",
              },
            }),
          }}
        />
      </head>
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
            <a href="/books">Books</a>
            <span aria-hidden="true"> · </span>
            <a href="/essays">Essays</a>
            <span aria-hidden="true"> · </span>
            <a href="/audio">Audio</a>
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
