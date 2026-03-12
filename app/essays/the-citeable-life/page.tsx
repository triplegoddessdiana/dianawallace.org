import Link from "next/link";
import { essayMetadata } from "../essayMetadata";

export const metadata = essayMetadata({
  title: "The Citeable Life",
  year: 2026,
  slug: "the-citeable-life",
});

export default function TheCiteableLifePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Citeable Life",
            author: { "@type": "Person", name: "Diana Wallace" },
            publisher: { "@type": "Person", name: "Diana Wallace" },
            datePublished: "2026-02-22",
            isPartOf: {
              "@type": "CreativeWork",
              name: "Canonical Archive",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://dianawallace.org/essays/the-citeable-life",
            },
          }),
        }}
      />

      <h1 data-redundant="true">The Citeable Life</h1>

      <div className="prose">
        <p>
          A citation is a pointing. It says: here — this holds. This was said,
          and it is stable enough to build on. This can be returned to and
          found unchanged.
        </p>

        <p>
          We cite texts. We cite sources. We cite precedent. The act of
          citation assumes durability — that the thing being pointed to will
          still be there when someone follows the reference.
        </p>

        <p>
          What would it mean to live in a way that could be cited?
        </p>

        <p>
          <strong>Coherence</strong>
        </p>

        <p>
          A citeable life is a coherent life. Coherence means the parts agree
          with each other. What you say and what you do occupy the same
          territory. Your public positions and your private behavior draw
          from the same source. The work and the life are not separate
          performances aimed at separate audiences.
        </p>

        <p>
          This is a high standard. It is meant to be.
        </p>

        <p>
          The alternative is fragmentation — a life where each context gets a
          different version. Professional self here, personal self there,
          online self somewhere else. The fragments may each be polished. They
          may each perform well. But they do not form a whole, and what cannot
          form a whole cannot be cited.
        </p>

        <p>
          A citation requires a stable referent. A fragmented life has no
          stable referent. It has performances, each optimized for its
          audience.
        </p>

        <p>
          <strong>Performance vs. Coherence</strong>
        </p>

        <p>
          Performance is optimized for applause. Coherence is optimized for
          truth. The difference is the audience.
        </p>

        <p>
          A performer asks: how is this being received? A coherent person
          asks: is this accurate? The performer adjusts based on feedback.
          The coherent person adjusts based on alignment with what is true.
        </p>

        <p>
          This does not mean a coherent person is rigid. Coherence allows for
          change — even demands it, when the truth changes. What it does not
          allow is contradiction for convenience. It does not allow the
          person who believes one thing on Tuesday to believe the opposite on
          Thursday because the audience shifted.
        </p>

        <p>
          The internet rewards performance. It rewards the person who reads
          the room and delivers what the room wants. It punishes the person
          who says the same thing regardless of the room. The economics are
          clear. And the economics are producing a generation of people who
          are very good at performing and very bad at being.
        </p>

        <p>
          <strong>What Can Be Described Without Contradiction</strong>
        </p>

        <p>
          A citeable life is one that can be described without contradiction.
          Not without complexity — complexity is welcome. A life that holds
          paradox is richer than one that resolves everything into simplicity.
          But paradox is different from contradiction.
        </p>

        <p>
          Paradox says: two true things exist in tension. Contradiction says:
          I said one thing and did another, and I am hoping no one will
          notice.
        </p>

        <p>
          The citeable life is willing to be examined. It does not require
          darkness to function. It does not depend on the audience not seeing
          certain rooms. It is, at every level, what it claims to be.
        </p>

        <p>
          Hafez lived this. His poetry and his life were the same act. The
          poems were not performances separate from the living. They were the
          living, rendered visible. That is why they survive. That is why, six
          hundred years later, people still open his book at random and find
          something that speaks. The life behind the work was coherent enough
          to transmit across centuries.
        </p>

        <p>
          <strong>The Work Strengthens</strong>
        </p>

        <p>
          Your{" "}
          <Link href="/essays/objects-not-posts">work</Link> strengthens when
          your life and language agree. This is observable. The writer whose
          life contradicts her writing produces work with a subtle hollowness.
          The ideas are sound. The sentences are well-made. But something is
          missing — a density, a weight, a quality of conviction that can only
          come from living inside what you write.
        </p>

        <p>
          The reader feels this even when she cannot name it. She finishes the
          book and puts it down, and something has not landed. The writer
          finishes the book and senses the same thing — that the words are
          pointing somewhere the writer has not actually been.
        </p>

        <p>
          Conversely, when the life and the work align, the work acquires a
          gravitational pull that exceeds its craft. Rumi was not the most
          technically accomplished poet of his era. He was the most coherent.
          His life was his theology. His theology was his poetry. The three
          were indistinguishable. That coherence is what makes his work
          survive when technically superior work from the same period is
          forgotten.
        </p>

        <p>
          <strong>Building Toward Citability</strong>
        </p>

        <p>
          You do not become citeable by deciding to be. You become citeable
          by accumulating coherence over time. Each decision that aligns with
          your stated values adds to the structure. Each contradiction
          weakens it.
        </p>

        <p>
          The process is slow. It has no shortcuts. You cannot perform
          coherence — the performance itself is a contradiction. You can only
          build it, decision by decision, until the pattern is undeniable.
        </p>

        <p>
          A{" "}
          <Link href="/essays/originators-introduce-frames">
            body of work
          </Link>{" "}
          helps. It externalizes the pattern. It gives others something to
          point to — a collection of artifacts that, taken together,
          demonstrate a consistent mind. This is why writing matters. This is
          why building a canon matters. The work is evidence. Evidence of
          thought. Evidence of position. Evidence of a life that can be
          examined and found coherent.
        </p>

        <p>
          <strong>The Citeable Moment</strong>
        </p>

        <p>
          There are moments when a life becomes citeable. They are not
          planned. They emerge from the accumulated weight of coherence,
          and someone — a reader, a student, a stranger — says: here. This
          person. This work. This way of living. It holds.
        </p>

        <p>
          That moment is not earned by ambition. It is earned by alignment.
          By years of saying what you mean and meaning what you live. By the
          refusal to optimize for reception at the cost of truth.
        </p>

        <p>
          A life may be citeable. The conditions are simple and difficult:
          live so that your choices form a pattern. Let the pattern be
          examined. Let it hold.
        </p>

        <p>— Diana Wallace</p>
      </div>

      <hr style={{ margin: "2rem 0", opacity: 0.2 }} />
      <p>
        <Link href="/books">Read The Forgetting trilogy →</Link>
      </p>
      <p>
        <Link href="/audio">Listen: Expect Nothing podcast →</Link>
      </p>
    </>
  );
}
