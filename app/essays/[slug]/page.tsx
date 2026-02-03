import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEssayBySlug, getWrittenEssays } from "@/app/lib/essays";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getWrittenEssays().map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const essay = getEssayBySlug(params.slug);

  if (!essay || essay.status !== "Written") {
    return {
      title: "Essay",
      robots: { index: false, follow: false },
    };
  }

  const canonical = `https://dianawallace.org/essays/${essay.slug}`;

  return {
    title: essay.title,
    alternates: {
      canonical,
    },
    description: essay.abstract,
  };
}

export default function EssayPage({ params }: Props) {
  const essay = getEssayBySlug(params.slug);

  if (!essay) notFound();
  if (essay.status !== "Written") notFound();

  return (
    <main>
      <h1>{essay.title}</h1>

      <p>
        {essay.date} · {essay.readingTime} · {essay.category}
      </p>

      <p>{essay.abstract}</p>

      {essay.body.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </main>
  );
}
