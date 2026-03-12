// app/audio/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expect Nothing Podcast — Audio by Diana Wallace",
  description:
    "Expect Nothing — spoken pieces by Diana Wallace meant to be listened to, not skimmed. The audio companion to The Forgetting trilogy.",
  alternates: { canonical: "/audio" },
  openGraph: {
    title: "Expect Nothing Podcast · Diana Wallace",
    description:
      "Spoken pieces meant to be listened to, not skimmed. The audio companion to The Forgetting trilogy.",
  },
};

export default function AudioPage() {
  return (
    <main className="page audio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastSeries",
            name: "Expect Nothing",
            description: "Spoken pieces meant to be listened to, not skimmed.",
            url: "https://dianawallace.org/audio",
            author: { "@type": "Person", name: "Diana Wallace" },
            webFeed: "https://open.spotify.com/show/22TxQiPHN1gAjE4ovhQjbk",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://dianawallace.org" },
              { "@type": "ListItem", position: 2, name: "Audio", item: "https://dianawallace.org/audio" },
            ],
          }),
        }}
      />
      <header className="pageHeader audioHeader">
        <h1 className="pageTitle">Expect Nothing</h1>

        <nav className="audioLinks" aria-label="Listen">
  <a
    href="https://open.spotify.com/show/22TxQiPHN1gAjE4ovhQjbk?si=60beb7a5f2b14ee7"
    target="_blank"
    rel="noopener noreferrer"
  >
    Spotify
  </a>

  <a
    href="https://podcasts.apple.com/us/podcast/expect-nothing/id1853438881"
    target="_blank"
    rel="noopener noreferrer"
  >
    Apple Podcasts
  </a>

  <a
    href="https://www.youtube.com/@DianaWallaceAuthor"
    target="_blank"
    rel="noopener noreferrer"
  >
    YouTube
  </a>
</nav>
      </header>

      <figure className="audioHero">
        <Image
          src="/audio/expect-nothing-altar.webp"
          alt="An open book with moon cards and a wax seal by candlelight, with a feather quill on a stone surface."
          width={1600}
          height={900}
          priority
        />
      </figure>

      <section className="audioIntro">
        <p>
          These are spoken pieces.
          <br />
          They take on a life of their own.
        
        </p>

      </section>

      <figure className="audioSecondary">
        <Image
          src="/audio/expect-nothing-winter.webp"
          alt="A winter collage with a lake, snow, moon, and an analog tape recorder with soundwave fragments."
          width={1400}
          height={900}
        />
      </figure>

      <section className="audioClosing">
        <p>
          These recordings are part of a larger body of work,
          but they can be entered without context.
        </p>
  
        <p>
          You only need to be here long enough
          <br />
         for something to wake up—or go deeper.
        </p>
      </section>

      <section className="audioClosing">
        <p>
          <Link href="/books">Explore The Forgetting trilogy →</Link>
        </p>
        <p>
          <Link href="/essays/human-agency">Read: Human Agency →</Link>
        </p>
      </section>
    </main>
  );
}
