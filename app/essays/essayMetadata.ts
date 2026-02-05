import type { Metadata } from "next";

export function essayMetadata({
  title,
  year,
  slug,
}: {
  title: string;
  year: number;
  slug: string;
}): Metadata {
  return {
    title,
    authors: [{ name: "Diana Wallace" }],
    creator: "Diana Wallace",
    publisher: "Diana Wallace",
    alternates: {
      canonical: `/essays/${slug}`,
    },
    openGraph: {
      title,
      type: "article",
      authors: ["Diana Wallace"],
      publishedTime: `${year}-01-01`,
    },
    other: {
      "citation_author": "Diana Wallace",
      "citation_publication_date": String(year),
      "citation_title": title,
      "citation_section": "Essays",
      "isPartOf": "Canonical Archive",
    },
  };
}
