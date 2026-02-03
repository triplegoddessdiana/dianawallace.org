import Link from "next/link";
import { getEssayBySlug, ESSAYS } from "../../lib/essays";

/**
 * This pre-builds all essay pages at build time
 * so they are fast, stable, and fully indexable.
 */
export function generateStaticParams() {
  return ESSAYS.map((essay) => ({
    slug: essay.slug,
  }));
}

/**
 * Per-essay SEO + canonical URL
 */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const essay = getEssayBySlug(params.slug);

  if (!essay) return {};

  return {
    title: essay.title,
    description: essay.abstract,
    alternates: {
      canonical: `/essays/${essay.slug}`,
    },
  };
}

export default function EssayPage({
  params,
}: {
  params: { slug: string };
}) {
  const essay = getEssayBySlug(params.slug);

  if (!essay) {
    return (
      <>
        <h1>Not found</h1>
        <p>This essay does not exist.</p>
        <p>
          <Link href="/essays">Back to Essays</Link>
        </p>
      </>
    );
  }

  return (
    <>
      <h1>{essay.title}</h1>

      <p style={{ color: "var(--muted)" }}>
        {essay.date} · {essay.readingTime} · {essay.category}
      </p>

      <p>
        <strong>{essay.abstract}</strong>
      </p>

      {essay.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <hr />

      <p>
        If this moved you, begin here →{" "}
        <Link href="/start">Start Here</Link>
      </p>
    </>
  );
}
