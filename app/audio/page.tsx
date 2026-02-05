// app/audio/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio — Diana Wallace",
  description: "Expect Nothing — spoken pieces meant to be listened to, not skimmed.",
  alternates: { canonical: "/audio" },
};

export default function AudioPage() {
  return (
    <main className="page audio">
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
          <br />
          but they can be entered without context.
        </p>
  
        <p>
          You only need to be here long enough
          <br />
         for something to wake up—or go deeper.
        </p>
      </section>
    </main>
  );
}
