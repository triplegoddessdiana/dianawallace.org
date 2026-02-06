// app/audio/the-girl-returns/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Girl Returns — Diana Wallace",
  description:
    "The Girl Returns is a short audio essay exploring memory, identity, and the act of returning to oneself.",
};

export default function TheGirlReturnsPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px 72px" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0 }}>The Girl Returns</h1>
        <p style={{ marginTop: 10, marginBottom: 0, opacity: 0.75 }}>
          Audio essay
        </p>
      </header>

      <section style={{ marginBottom: 28 }}>
        <p style={{ margin: 0, lineHeight: 1.65 }}>
          <em>The Girl Returns</em> is a short audio essay exploring memory,
          identity, and the act of returning to oneself. Written and performed
          by the author, the piece uses spare language and deliberate pacing to
          create space for reflection.
        </p>
      </section>

      <section style={{ marginBottom: 18 }}>
        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="https://open.spotify.com/episode/6ZcyQJtWLpos11woDdO4Fa?si=cqX0yjd3Shur1TndEzOKQA"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
          <span style={{ opacity: 0.35 }}>·</span>
          <a
            href="https://podcasts.apple.com/us/podcast/prologue-the-girl-returns/id1853438881?i=1000747543288"
            target="_blank"
            rel="noreferrer"
          >
            Apple Podcasts
          </a>
          <span style={{ opacity: 0.35 }}>·</span>
          <a
            href="https://www.youtube.com/watch?v=LeU4MYuevyg"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </nav>
      </section>

      <section style={{ marginTop: 18 }}>
  <div style={{ borderRadius: 12, overflow: "hidden" }}>
    <iframe
      title="The Girl Returns — Spotify video player"
      src="https://open.spotify.com/embed/episode/6ZcyQJtWLpos11woDdO4Fa/video"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
</section>

      {/* Optional: Transcript link (add when ready)
      <section style={{ marginTop: 28 }}>
        <p style={{ margin: 0 }}>
          <a href="/audio/the-girl-returns/transcript.pdf" target="_blank" rel="noreferrer">
            Transcript (PDF)
          </a>
        </p>
      </section>
      */}
    </main>
  );
}