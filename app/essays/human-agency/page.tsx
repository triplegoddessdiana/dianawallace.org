import Link from "next/link";
import { essayMetadata } from "../essayMetadata";

export const metadata = essayMetadata({
  title: "Human Agency",
  year: 2026,
  slug: "human-agency",
});

export default function HumanAgencyPage() {
  return (
    <>
      {/* JSON-LD for authorship + machine traceability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Human Agency",
            author: {
              "@type": "Person",
              name: "Diana Wallace",
            },
            publisher: {
              "@type": "Person",
              name: "Diana Wallace",
            },
            datePublished: "2026-01-01",
            isPartOf: {
              "@type": "CreativeWork",
              name: "Canonical Archive",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://dianawallace.org/essays/human-agency",
            },
          }),
        }}
      />

      <h1 data-redundant="true">Human Agency</h1>


          <div className="prose">
  <p>
    Human agency is not threatened by the intelligence of machines, but by
    the unbeknownst transfer of authorship.
  </p>

  <p>
    As systems grow faster and more capable, decisions are increasingly made on
    our behalf — about what we see, what we respond to, and what holds our
    attention. This shift is rarely noticed. It feels efficient. Convenient.
    Harmless.
  </p>

  <p>Yet over time, the center moves.</p>

  <p>
    What was once chosen becomes default.
    What was once deliberate becomes automatic.
    And the person at the center of the life stops being the one steering it.
  </p>

  <p>
    <strong>Agency Is Not a Skill</strong>
  </p>

  <p>
    Agency is not a skill. It cannot be trained, optimized, or automated. It
    is a condition of being — the interior authority that decides what matters,
    what is true, and what is worth doing before any system makes a suggestion.
  </p>

  <p>
    Intelligence can be measured, benchmarked, accelerated, and eventually
    surpassed. That is precisely why it is so easy to automate. Agency cannot
    be surpassed because it is not a performance. It is the source from which
    all performances are chosen.
  </p>

  <p>
    Agency decides which questions are worth asking. It decides what outcomes
    mean. When agency is intact, intelligence — human or artificial — remains
    an instrument. When agency weakens, intelligence becomes a substitute.
  </p>

  <p>
    And substitutes always feel efficient — right up until they feel hollow.
  </p>

  <p>
    <strong>The Unbeknownst Mechanism</strong>
  </p>

  <p>
    Agency is rarely taken. It is given away, incrementally, in exchange for
    relief.
  </p>

  <p>
    A recommendation here. An automation there. A system that finishes a
    sentence, selects a path, or surfaces an answer before the question has
    fully formed.
  </p>

  <p>
    The erosion begins when judgment is deferred often enough to feel optional.
    When taste is suggested often enough to feel redundant. When decisions are
    optimized often enough that choosing for oneself begins to feel inefficient.
  </p>

  <p>This is not force. It is convenience.</p>

  <p>
    Nothing breaks. Productivity improves. Output increases. Friction
    disappears. But something interior goes dim — the decisive pause where a
    human once asked: <em>Do I actually want this?</em>
  </p>

  <p>
    Over time, systems shape the future using the past. And the present moment —
    the only place agency can operate — is bypassed.
  </p>

  <p>
    This is how authorship thins. Humans do not stop creating. They stop
    originating. Nothing has gone wrong. And that is precisely the problem.
  </p>

  <p>
    <strong>The Moment You Can Feel</strong>
  </p>

  <p>
    You pick up your phone. You did not decide to pick it up. Your hand was
    already moving before the thought formed. You are looking at something now —
    a feed, a notification, a thread — and if someone asked you why, you would
    not have an answer. You did not choose this. Something chose it for you, and
    your hand cooperated.
  </p>

  <p>
    This is where agency lives and dies. In the ordinary moment. The space
    between impulse and response, when attention is offered something and a
    choice either happens or doesn&rsquo;t.
  </p>

  <p>
    One of the clearest signs of agency is restraint. The decision to put the
    phone down. The decision to stop. The decision to remove what does not
    belong, even when it performs well. Agency is not an abstract ideal. It is
    the act of catching yourself mid-motion and asking whether the motion is
    yours.
  </p>

  <p>
    <strong>The Line That Cannot Be Crossed</strong>
  </p>

  <p>
    There is a point in every human life where no amount of intelligence can
    decide for us.
  </p>

  <p>
    A machine can present outcomes. It can simulate consequences. It can predict
    preferences based on prior behavior. What it cannot do is stand inside the
    moment of consequence.
  </p>

  <p>
    Responsibility is not a computation. It is an interior weight — the
    knowledge that this choice will belong to you. This is the line machines
    cannot enter. Not because they are insufficiently advanced, but because they
    are not alive.
  </p>

  <p>
    <strong>What Remains</strong>
  </p>

  <p>
    The mistake of this age was never believing machines could think. It was
    forgetting that humans must decide.
  </p>

  <p>
    And forgetting is the wrong word. It implies the knowledge was once held
    and then lost. The truth is quieter than that. The knowledge is still
    there. It just stopped being used. The muscle is intact. It has simply
    been still for so long that the body forgot it could move.
  </p>

  <p>
    Agency does not need to be restored. It needs to be exercised. And the
    exercise is small. It is the next choice you make on purpose.
  </p>

  <p>— Diana Wallace</p>

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
</div>


    </>
  );
}
