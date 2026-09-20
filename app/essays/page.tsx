import Link from "next/link";
import { getPublicEssays, ESSAY_CATEGORIES } from "@/app/lib/essays";

export const metadata = {
  title: "Essays",
  description:
    "Essays by Diana Wallace on memory and meaning. Frames for seeing.",
  alternates: { canonical: "/essays" },
};

export default function EssaysPage() {
  const essays = getPublicEssays();

  return (
    <main>
      <h1 data-redundant="true">Essays</h1>

      <p>
        Essays here introduce frames — ways of seeing — through which questions
        become visible.
      </p>

      {ESSAY_CATEGORIES.map((category) => {
        const categoryEssays = essays.filter((e) => e.category === category);
        if (categoryEssays.length === 0) return null;
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul>
              {categoryEssays.map((e) => (
                <li key={e.slug}>
                  <Link href={`/essays/${e.slug}`}>{e.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
