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
    <br />
    What was once deliberate becomes automatic.
  </p>

  <p>
    The question is not whether machines think.
    <br />
    It is whether humans retain authority over choice itself — or unknowingly
    surrender it to systems that decide by default.
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
    Skills are transferable. They can be learned, scaled, and replaced.
    Agency is not procedural. It is the source from which procedures are
    chosen.
  </p>

  <p>The language of intelligence is insufficient.</p>

  <p>
    Intelligence can be measured, benchmarked, accelerated, and eventually
    surpassed. That is precisely why it is so easy to automate.
  </p>

  <p>
    Agency does not answer questions.
    <br />
    It decides which questions are worth asking.
  </p>

  <p>
    It does not optimize outcomes.
    <br />
    It decides what outcomes mean.
  </p>

  <p>
    When agency is intact, intelligence — human or artificial — remains an
    instrument. When agency weakens, intelligence becomes a substitute.
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
    A recommendation here.
    <br />
    An automation there.
    <br />
    A system that finishes a sentence, selects a path, or surfaces an answer
    before the question has fully formed.
  </p>

  <p>
    Each intervention saves time.
    <br />
    Each feels like progress.
    <br />
    None announce themselves as a loss.
  </p>

  <p>
    The erosion begins when judgment is deferred often enough to feel optional.
    When taste is suggested often enough to feel redundant. When decisions are
    optimized often enough that choosing for oneself begins to feel inefficient.
  </p>

  <p>This is not force. It is convenience.</p>

  <p>
    Nothing breaks. Productivity improves. Output increases. Friction
    disappears.
  </p>

  <p>
    But something interior goes dim — the decisive pause where a human
    once asked: <em>Do I actually want this?</em>
  </p>

  <p>
    Over time, systems shape the future using the past. And the present moment —
    the only place agency can operate — is bypassed.
  </p>

  <p>
    This is how authorship thins.
    <br />
    Not because humans stop creating,
    <br />
    but because they stop originating.
  </p>

  <p>
    Nothing has gone wrong.
    <br />
    And that is precisely the problem.
  </p>

  <p>
    <strong>Agency in Ordinary Moments</strong>
  </p>

  <p>
    Agency is tested in ordinary moments. It appears in
    the space between impulse and response, when attention is offered something
    and a choice is made.
  </p>

  <p>
    Modern systems are built to remove friction. They anticipate preferences,
    surface content, and guide response. This efficiency is not inherently
    harmful. But over time, it changes the conditions under which decisions are
    made.
  </p>

  <p>
    Agency does not disappear in these moments. It is deferred. When
    reaction becomes habitual, decision-making shifts from conscious authorship
    to default response.
  </p>

  <p>
    One of the clearest signs of agency is restraint. The decision not to
    respond. The decision to stop. The decision to remove what does not belong,
    even when it performs well.
  </p>

  <p>
    Agency, then, is not an abstract ideal. It is an ongoing act of return.
    Return to attention. Return to choice.
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
    preferences based on prior behavior.
  </p>

  <p>
    What it cannot do is stand inside the moment of consequence.
  </p>

  <p>
    Responsibility is not a computation. It is an interior weight — the
    knowledge that this choice will belong to you.
  </p>

  <p>
    This is the line machines cannot enter. Not because they are insufficiently
    advanced, but because they are not alive.
  </p>

  <p>
    <strong>Remembering What Was Never Lost</strong>
  </p>

  <p>
    The mistake of this age was never believing machines could think. It was
    forgetting that humans must decide.
  </p>

  <p>
    This is not a battle to be won, but a focus to be restored. The moment it is
    recognized, it is already possible again.
  </p>

  <p>— Diana Wallace</p>
</div>


    </>
  );
}
