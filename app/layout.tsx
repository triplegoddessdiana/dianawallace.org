import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import BodyClass from "./BodyClass";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const description =
  "Diana Wallace is a poet. The books are The Poet Who Forgot Her Name, The Girl Who Grew Fangs, and Year of the Fire Horse, which is still on its way.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dianawallace.org"),
  title: {
    default: "Diana Wallace — Poet",
    template: "%s · Diana Wallace",
  },
  description,
  keywords: [
    "Diana Wallace",
    "Diana Wallace poet",
    "Diana Wallace books",
    "The Poet Who Forgot Her Name",
    "The Girl Who Grew Fangs",
    "Year of the Fire Horse",
    "poetry",
    "poems about forgetting",
    "poems about returning",
  ],
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    site: "@DianaWallace888",
    creator: "@DianaWallace888",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Diana Wallace",
    title: "Diana Wallace — Poet",
    description,
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
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
              jobTitle: "Poet",
              description,
              knowsAbout: ["Poetry"],
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
              description,
              author: {
                "@type": "Person",
                name: "Diana Wallace",
              },
            }),
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${sans.variable}`}>
        <BodyClass />

        <header className="site-header">
          <nav className="site-nav" aria-label="Primary">
            <Link className="brand" href="/">
              Diana Wallace
            </Link>

            <div className="nav-links">
              <Link href="/books">Books</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="page">{children}</main>

        <footer className="site-footer">
          <p className="footer-links">
            <Link href="/books">Books</Link>
            <Link href="/about">About</Link>
            <Link href="/essays">Essays</Link>
            <Link href="/audio">Audio</Link>
            <Link href="/press">Press</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </p>
          <p className="footer-note">© {new Date().getFullYear()} Diana Wallace</p>

          <figure className="footer-signature">
            <Image
              src="/about/diana-wallace-signature.png"
              alt="Signature of Diana Wallace"
              width={492}
              height={240}
            />
          </figure>
        </footer>
      </body>
    </html>
  );
}
