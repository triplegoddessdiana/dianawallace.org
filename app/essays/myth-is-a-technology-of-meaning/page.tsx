import Link from "next/link";
import { essayMetadata } from "../essayMetadata";

export const metadata = essayMetadata({
  title: "Myth Is a Technology of Meaning",
  year: 2026,
  slug: "myth-is-a-technology-of-meaning",
});

export default function MythIsATechnologyOfMeaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Myth Is a Technology of Meaning",
            author: { "@type": "Person", name: "Diana Wallace" },
            publisher: { "@type": "Person", name: "Diana Wallace" },
            datePublished: "2026-02-18",
            isPartOf: {
              "@type": "CreativeWork",
              name: "Canonical Archive",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://dianawallace.org/essays/myth-is-a-technology-of-meaning",
            },
          }),
        }}
      />

      <h1 data-redundant="true">Myth Is a Technology of Meaning</h1>

      <div className="prose">
        <p>
          We use the word &ldquo;myth&rdquo; to mean something false. A
          misconception. A primitive explanation superseded by data. This
          usage has done enormous damage — to the word, and to the human
          capacity it names.
        </p>

        <p>
          Myth is a technology. It is the oldest technology humans have for
          carrying meaning across time. And unlike digital technologies, it
          does not degrade. A myth told three thousand years ago can arrive in
          the present with its meaning intact, because myth does not depend on
          infrastructure. It depends on recognition.
        </p>

        <p>
          <strong>Compression</strong>
        </p>

        <p>
          Myth compresses truth into image.
        </p>

        <p>
          A philosophical argument about the relationship between knowledge
          and suffering takes pages. The image of a man chained to a rock,
          his liver eaten daily by an eagle, regenerating each night —
          Prometheus — carries the same truth in a single picture. You do not
          need to understand the argument. You need to see the image. The
          understanding follows.
        </p>

        <p>
          This compression is not simplification. It is density. A myth
          contains more meaning per unit than any discursive text, because it
          operates on multiple levels simultaneously — literal, symbolic,
          psychological, spiritual. You can enter it at any level and find
          something true.
        </p>

        <p>
          Data transmits information. Myth transmits meaning. The difference
          is the difference between a map and a landscape. The map tells you
          where things are. The landscape lets you stand inside them.
        </p>

        <p>
          <strong>When Language Fails</strong>
        </p>

        <p>
          There are experiences that ordinary language cannot hold. Grief that
          exceeds its vocabulary. Joy that makes sentences absurd. Terror that
          turns prose into a lie. In these moments, myth returns.
        </p>

        <p>
          The woman who loses everything and walks into the underworld to
          retrieve it — that is Inanna. That is also every person who has
          descended into a loss so total that the only way out was through the
          bottom. Ordinary language says: &ldquo;I went through a difficult
          time.&rdquo; Myth says: she was hung on a hook in the dark and left
          there for three days. Which one is more true?
        </p>

        <p>
          <em>The Poet Who Forgot Her Name</em> lives in this territory. The
          poet&rsquo;s forgetting is not a medical condition. It is a mythic
          event — the dissolution of an identity that was never fully hers, so
          that the real one can emerge. You cannot say this in clinical
          language without killing it. Myth keeps it alive.
        </p>

        <p>
          <strong>Personal Canon</strong>
        </p>

        <p>
          A personal canon is a{" "}
          <Link href="/essays/remembrance-is-orientation">myth</Link> you can
          live inside.
        </p>

        <p>
          Every person carries fragments of myth, whether they know it or not.
          The stories that shaped you — the ones you return to, the images that
          recur in dreams, the metaphors you reach for when you need to
          explain yourself to yourself — these are your personal mythology.
        </p>

        <p>
          Most people have never examined this mythology. It operates
          unconsciously, shaping decisions, attractions, fears, and longings
          without announcement. The person who is drawn to fire does not
          always know why. The person who keeps returning to the threshold
          does not always see the pattern.
        </p>

        <p>
          To build a personal canon deliberately is to take this unconscious
          mythology and make it conscious. To name your myths. To choose
          which ones serve you and which ones were inherited from systems that
          do not have your interests at heart.
        </p>

        <p>
          <strong>Myth vs. Narrative</strong>
        </p>

        <p>
          Narrative is sequential. It moves from beginning to middle to end.
          It is temporal. It depends on what happens next.
        </p>

        <p>
          Myth is spatial. It does not depend on sequence. It depends on
          structure. The details can change — the setting, the names, the
          specific events — and the myth remains intact because the structure
          is the meaning.
        </p>

        <p>
          This is why the same myths appear across cultures that had no
          contact with each other. The flood. The descent. The return. The
          sacrifice. These are not stories that were transmitted. They are
          structures that were recognized. Independently. Repeatedly. Across
          millennia.
        </p>

        <p>
          A narrative can be debunked. A myth can only be outgrown — and even
          then, it waits. It waits for the moment when ordinary language fails
          again and the human needs a shape large enough to hold what is
          happening.
        </p>

        <p>
          <strong>The Modern Void</strong>
        </p>

        <p>
          We are living in a myth-depleted age. The old myths have been
          dismissed as superstition. The new ones have not yet been recognized
          as myths. The result is a meaning vacuum — a world rich in data
          and poor in significance.
        </p>

        <p>
          Into this vacuum rush substitutes. Brand narratives. Political
          mythologies. Celebrity arcs. Content that borrows mythic structure
          without mythic depth. These substitutes feel meaningful in the
          moment of consumption. They do not survive the night. By morning,
          they need to be replaced by the next one.
        </p>

        <p>
          This is why the feed is infinite. It must be. A myth-depleted
          culture requires constant supply because nothing holds. Nothing
          carries meaning across more than a single cycle of{" "}
          <Link href="/essays/attention-is-a-moral-act">attention</Link>.
        </p>

        <p>
          The correction is not to return to old myths uncritically. It is to
          recognize myth as a technology — a tool for carrying meaning — and
          to build new myths with the same structural integrity as the old
          ones. Myths that compress truth into image. Myths that operate on
          multiple levels. Myths that survive their context.
        </p>

        <p>
          This is what the work is for. The poem, the story, the image that
          carries more than it says. The fire that glows after the context is
          gone.
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
