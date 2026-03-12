import Link from "next/link";
import { essayMetadata } from "../essayMetadata";

export const metadata = essayMetadata({
  title: "Objects, Not Posts",
  year: 2026,
  slug: "objects-not-posts",
});

export default function ObjectsNotPostsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Objects, Not Posts",
            author: { "@type": "Person", name: "Diana Wallace" },
            publisher: { "@type": "Person", name: "Diana Wallace" },
            datePublished: "2026-02-08",
            isPartOf: {
              "@type": "CreativeWork",
              name: "Canonical Archive",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://dianawallace.org/essays/objects-not-posts",
            },
          }),
        }}
      />

      <h1 data-redundant="true">Objects, Not Posts</h1>

      <div className="prose">
        <p>
          A post is born into a stream. It lives for hours, sometimes minutes.
          It is carried along by the current, displayed alongside other posts,
          measured by its performance in the first few moments of its
          existence, and then buried under the next wave of content. Its
          natural state is passage.
        </p>

        <p>
          An object is different. An object is built to remain.
        </p>

        <p>
          <strong>The Logic of the Stream</strong>
        </p>

        <p>
          Every platform is a stream. The architecture is temporal —
          designed so that what was posted an hour ago is already old. This is
          deliberate. The stream must keep moving to keep you scrolling. If
          content remained, you would stop. If things stayed visible, the feed
          would die.
        </p>

        <p>
          Writers who build inside the stream inherit its logic. They learn to
          write for the current moment. They learn to optimize for immediate
          reaction. They learn to produce at a pace that matches the feed,
          which means they learn to produce at a pace that makes depth
          impossible.
        </p>

        <p>
          The stream rewards frequency, brevity, and emotional immediacy. It
          punishes patience, complexity, and anything that requires a second
          reading.
        </p>

        <p>
          This is the environment in which most writing now occurs. And the
          environment shapes the writing, whether the writer intends it or not.
        </p>

        <p>
          <strong>What Makes an Object</strong>
        </p>

        <p>
          An object has edges. You can hold it. You can return to it. You can
          give it to someone else and they receive the same thing you did.
        </p>

        <p>
          A book is an object. An essay with a clear argument, a beginning and
          an end, a title that names what it contains — that is an object. A
          poem that can be quoted in full and still mean what it meant the
          first time — that is an object.
        </p>

        <p>
          A post is not an object. A post is a gesture. It points at something,
          reacts to something, positions itself relative to the conversation of
          the moment. Remove the moment and the post often loses its meaning
          entirely.
        </p>

        <p>
          The test is simple: will this make sense to someone encountering it
          in five years, with no context? If the answer is no, it is a post.
          If the answer is yes, it may be an object.
        </p>

        <p>
          <strong>Citability</strong>
        </p>

        <p>
          An object can be cited. This matters more than it appears to.
        </p>

        <p>
          To cite something is to point to it and say: this holds. This
          articulated something I needed language for. This is stable enough
          to build on.
        </p>

        <p>
          Work that cannot be cited cannot be built upon. It can be liked,
          shared, reacted to — but it cannot become a foundation. It exists in
          the moment of its consumption and then it is gone.
        </p>

        <p>
          The{" "}
          <Link href="/essays/the-citeable-life">citeable life</Link> requires
          citeable work. And citeable work requires the discipline to build
          objects instead of producing content.
        </p>

        <p>
          <strong>The Discipline of Finishing</strong>
        </p>

        <p>
          A post can be published in any state. A fragment, a reaction, a
          half-thought — the stream accepts everything. This is presented as
          democratization. In practice, it trains writers to stop before the
          work is done.
        </p>

        <p>
          An object demands finishing. It demands that you stay with the idea
          until it stands on its own. Until it does not need the moment. Until
          it does not need you standing next to it, explaining what you meant.
        </p>

        <p>
          If it cannot stand alone, it is not yet finished.
        </p>

        <p>
          This is a high standard. The stream has made it feel unreasonable.
          Why labor over a single piece when you could publish five posts in
          the same time? Because the five posts will be gone by Friday. The
          object will still be there in a decade.
        </p>

        <p>
          Poe understood this. Every word in his work earns its position. Every
          sentence is load-bearing. He wrote as if each piece would be the only
          thing a reader ever encountered. That compression, that refusal to
          waste — that is object-making.
        </p>

        <p>
          <strong>The Body of Work</strong>
        </p>

        <p>
          A body of work is made of objects. Placed together, they form
          something larger — a{" "}
          <Link href="/essays/originators-introduce-frames">frame</Link>, a
          philosophy, a world. Each piece is complete in itself. Together, they
          create a structure that no single piece could achieve alone.
        </p>

        <p>
          A body of posts is not a body of work. It is an archive of
          reactions. Scroll through it and you see a person responding to a
          series of moments. You do not see a mind building something.
        </p>

        <p>
          The difference is architectural. A body of work has internal
          coherence. The pieces reference each other, deepen each other,
          sometimes contradict each other in productive ways. A body of posts
          has chronological order. That is all.
        </p>

        <p>
          <strong>Writing for the Future Reader</strong>
        </p>

        <p>
          The future reader has no context for your moment. She does not know
          what was trending, what the discourse was, who you were responding
          to. She arrives at your work with nothing but the work itself.
        </p>

        <p>
          If the work depends on context to make sense, it will not survive the
          death of that context. If the work is self-contained — if it carries
          its own meaning — it can travel through time without decay.
        </p>

        <p>
          Write for that reader. The one who finds your work in a place you
          never imagined, at a time you will not see. Give her something she
          can hold. Something with weight. Something finished.
        </p>

        <p>
          The stream will always be there, pulling things downstream. The
          objects are what remain when the water recedes.
        </p>

        <p>— Diana Wallace</p>
      </div>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

      <p style={{ marginTop: "2rem", fontStyle: "italic", opacity: 0.85 }}>
        Aliholly is the author's answer to this question — a streaming platform where AI serves human creators, not the reverse.{" "}
        <a href="https://aliholly.com" target="_blank" rel="noopener noreferrer">aliholly.com</a>
      </p>

      <p>
        <Link href="/books">Read The Forgetting trilogy →</Link>
      </p>
      <p>
        <Link href="/audio">Listen: Expect Nothing podcast →</Link>
      </p>
    </>
  );
}
