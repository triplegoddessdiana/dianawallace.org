import Link from "next/link";
import { essayMetadata } from "../essayMetadata";

export const metadata = essayMetadata({
  title: "Remembrance Is Orientation",
  year: 2026,
  slug: "remembrance-is-orientation",
});

export default function RemembranceIsOrientationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Remembrance Is Orientation",
            author: { "@type": "Person", name: "Diana Wallace" },
            publisher: { "@type": "Person", name: "Diana Wallace" },
            datePublished: "2026-02-12",
            isPartOf: {
              "@type": "CreativeWork",
              name: "Canonical Archive",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://dianawallace.org/essays/remembrance-is-orientation",
            },
          }),
        }}
      />

      <h1 data-redundant="true">Remembrance Is Orientation</h1>

      <div className="prose">
        <p>
          Forgetting is the signature illness of this century. We forget what
          we read by afternoon. We forget what we watched by morning. We
          forget what we believed last year with such certainty that when
          someone reminds us, it sounds like someone else&rsquo;s conviction.
        </p>

        <p>
          The volume of information is so great that nothing stays. Everything
          passes through. The mind becomes a corridor rather than a room.
        </p>

        <p>
          Remembrance is how you stop passing through your own life.
        </p>

        <p>
          <strong>Remembrance Is Not Nostalgia</strong>
        </p>

        <p>
          Nostalgia looks backward for comfort. It softens the past into
          something warmer than it was, something safe, and then it aches for
          that softened version. Nostalgia is a kind of lying that feels like
          love.
        </p>

        <p>
          Remembrance is different. Remembrance looks inward for truth. It
          does not ask: wasn&rsquo;t that beautiful? It asks: what did I know
          then that I have since abandoned? What was I oriented toward before
          I got lost?
        </p>

        <p>
          Remembrance is directional. Nostalgia is atmospheric. One returns
          you to yourself. The other returns you to a feeling that was never
          quite real.
        </p>

        <p>
          <strong>The Forgetting</strong>
        </p>

        <p>
          In <em>The Poet Who Forgot Her Name</em>, the poet does not lose her
          memory. She loses her name — the organizing principle of identity.
          Everything else remains: the images, the impulses, the hunger to
          speak. What disappears is the frame that held them together.
        </p>

        <p>
          This is a specific kind of forgetting. You do not forget the facts
          of your life. You forget the meaning of the facts. You can recite
          your history but you cannot feel its direction. You know where you
          have been but you do not know where you are going, because the
          thread that connected the events has dissolved.
        </p>

        <p>
          This forgetting is everywhere now. People surrounded by their own
          recorded history — photos, messages, posts, archives — and still
          disoriented. The data is all there. The meaning is gone.
        </p>

        <p>
          <strong>Memory as Medicine</strong>
        </p>

        <p>
          There is a form of memory that restores direction. Hafez called it
          remembrance of the Beloved — the return to what the soul has always
          known, beneath the accumulated noise of living. It is not a
          recollection of events. It is a recollection of orientation.
        </p>

        <p>
          You remember what matters. You remember what you were before the
          world told you what to be. You remember the original hunger — the
          one that existed before it was given a career title or a market
          value or a five-year plan.
        </p>

        <p>
          This kind of remembrance is medicinal. It does not fix anything. It
          restores the capacity to see where you are, which is the precondition
          for knowing where to go.
        </p>

        <p>
          A remembered life is not a perfect life. It is a conscious one. A
          life with direction, even when the direction is painful.
        </p>

        <p>
          <strong>What We Forget First</strong>
        </p>

        <p>
          We forget our own voice first. Before we forget facts or skills or
          people, we forget the sound of our own unmediated thought. We begin
          to think in the language of whatever we last consumed. Our opinions
          start to sound like the consensus. Our instincts start to echo the
          feed.
        </p>

        <p>
          This is{" "}
          <Link href="/essays/the-automation-of-speech">
            the automation of speech
          </Link>{" "}
          at the level of interior life. The words are still yours, technically.
          But the patterns belong to something else.
        </p>

        <p>
          Remembrance, then, begins with voice. Can you hear your own
          thought, unassisted? Can you sit in silence long enough for your own
          language to surface? Or has the noise become so constant that
          silence itself feels like absence?
        </p>

        <p>
          <strong>Orientation</strong>
        </p>

        <p>
          Orientation is the knowledge of where you stand in relation to what
          matters. A compass does not move. It points. Orientation is the
          interior compass — the part of you that knows, beneath all the
          confusion, which direction is true.
        </p>

        <p>
          Forgetting disorients. It removes the compass. You still move, but
          the movement has no direction. Activity replaces purpose. Busyness
          replaces meaning. Output replaces{" "}
          <Link href="/essays/objects-not-posts">work</Link>.
        </p>

        <p>
          Remembrance restores the compass. It says: this is what you knew.
          This is what you sensed. This is what you came here to do, before
          you were distracted by everything you did not come here to do.
        </p>

        <p>
          The return is not dramatic. It is quiet. It happens in the moment
          you stop consuming and start recognizing. Something surfaces — a
          conviction, an image, a hunger — and you know it. You know it the
          way you know your own face. It was never gone. It was just buried.
        </p>

        <p>
          <strong>The Practice</strong>
        </p>

        <p>
          Remembrance is a practice. It is the deliberate return to what is
          true, repeated daily, against the tide of everything designed to
          make you forget.
        </p>

        <p>
          It does not require a retreat or a ritual, though those can help. It
          requires only the willingness to pause and ask: do I remember what
          I am doing and why?
        </p>

        <p>
          If the answer is yes, continue.
        </p>

        <p>
          If the answer is no, stop. Sit with the forgetting. Let it teach
          you what it obscured. The remembrance will come. It always does.
        </p>

        <p>
          Memory becomes medicine when it restores direction. And direction,
          once restored, makes everything else possible.
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
