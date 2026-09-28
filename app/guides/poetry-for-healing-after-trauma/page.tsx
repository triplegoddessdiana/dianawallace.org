import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Poetry for Healing After Trauma — A Reading Guide",
  description:
    "A grounded guide to poetry for trauma survivors: what healing poetry can offer, how to read safely, and why The Poet Who Forgot Her Name speaks to identity, silence, and return.",
  keywords: [
    "poetry for healing after trauma",
    "trauma healing poetry books",
    "poems for trauma survivors",
    "books for emotional healing",
    "poetry about recovery",
    "The Poet Who Forgot Her Name",
  ],
  alternates: { canonical: "/guides/poetry-for-healing-after-trauma" },
  openGraph: {
    title: "Poetry for Healing After Trauma",
    description:
      "A reading guide for trauma survivors seeking poetry about survival, identity, voice, and return.",
    type: "article",
    images: ["/covers/the-poet-who-forgot-her-name.jpg"],
  },
};

export default function TraumaPoetryGuide() {
  const url = "https://dianawallace.org/guides/poetry-for-healing-after-trauma";
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Poetry for Healing After Trauma: A Reading Guide",
        description: "A grounded reading guide for trauma survivors seeking poetry about survival, identity, voice, and return.",
        author: { "@type": "Person", name: "Diana Wallace", url: "https://dianawallace.org" },
        datePublished: "2026-09-28",
        dateModified: "2026-09-28",
        mainEntityOfPage: url,
        about: ["Trauma recovery", "Healing poetry", "Identity", "Emotional survival"],
        mentions: { "@type": "Book", name: "The Poet Who Forgot Her Name", isbn: "9798241723536", url: "https://dianawallace.org/books/the-poet-who-forgot-her-name" },
      }) }} />
      <h1>Poetry for Healing After Trauma</h1>
      <div className="prose">
        <p>
          Trauma can make ordinary language feel unusable. A person may know
          what happened and still be unable to say what it did to her sense of
          time, body, safety, or name. Poetry matters here because it does not
          demand a clean account. It can hold fragments, contradictions,
          silence, memory, and the truth that survival rarely moves in a
          straight line.
        </p>

        <p><strong>What healing poetry can offer</strong></p>
        <p>
          A poem cannot diagnose or treat trauma. It can do something
          different: witness experience without trying to correct it. The
          right poem can give a reader language for dissociation, grief,
          self-abandonment, anger, boundaries, or the slow return of a voice.
          Recognition is not the whole of healing, but it can interrupt the
          belief that you are alone or impossible to understand.
        </p>

        <p><strong>What to look for in a trauma-healing poetry book</strong></p>
        <ul>
          <li>Language that recognizes survival without romanticizing pain.</li>
          <li>Room for anger, uncertainty, and nonlinear recovery.</li>
          <li>A voice that offers companionship rather than instructions.</li>
          <li>Attention to identity, boundaries, the body, and self-trust.</li>
          <li>An ending that does not require pretending the wound never existed.</li>
        </ul>

        <p><strong>A poetry book about forgetting and return</strong></p>
        <p>
          Diana Wallace&apos;s <Link href="/books/the-poet-who-forgot-her-name"><em>The Poet Who Forgot Her Name: Poems for the Returning Self</em></Link>{" "}
          follows four movements: forgetting, searching, remembering, and
          returning. The central wound is not simply pain. It is disappearance:
          the way a woman can survive by becoming quieter, smaller, and less
          visible to herself.
        </p>
        <p>
          The collection is especially resonant for readers recovering from
          emotional abuse, controlling relationships, chronic self-silencing,
          identity loss, or years spent managing other people&apos;s needs. Its
          promise is not that poetry fixes trauma. Its promise is that the self
          who disappeared can still be addressed—and may still answer.
        </p>

        <p><strong>How to read without forcing yourself</strong></p>
        <p>
          Read slowly. Stop when your body asks you to stop. Skip any poem that
          feels too close. Return only if and when you choose. A book should not
          become another authority you must obey. The reader remains in charge
          of the pace, the meaning, and the distance.
        </p>

        <p><strong>Who this guide is for</strong></p>
        <p>
          This guide is for adults seeking poetry about trauma recovery,
          emotional healing, finding yourself again, reclaiming a voice, or
          rebuilding self-worth. It is also for therapists, friends, and loved
          ones looking for literary work that can sit beside—not replace—the
          work of care.
        </p>

        <p>
          <Link href="/books/the-poet-who-forgot-her-name">Explore <em>The Poet Who Forgot Her Name</em> →</Link>
        </p>
        <p><small>This page is literary information, not medical advice. If you are in immediate danger or crisis, contact local emergency services or a qualified crisis resource in your country.</small></p>
      </div>
    </article>
  );
}
