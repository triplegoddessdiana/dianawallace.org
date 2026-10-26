export const AMAZON_AUTHOR =
  "https://www.amazon.com/stores/Diana-Wallace/author/B0DQ1LGG1K";

export const POET_EMAIL = "dianawallacepoet@gmail.com";
export const PRESS_EMAIL = "press@dianawallace.org";

export type Book = {
  roman: "I" | "II" | "III";
  title: string;
  subtitle: string;
  href: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  amazon: string | null;
  /** Visible price line, only when the site already states one. */
  price: string | null;
  proof: string | null;
  /** Shelf/catalog line taken from existing book copy. */
  blurb: string;
  status: "published" | "coming";
};

export const books: Book[] = [
  {
    roman: "I",
    title: "The Poet Who Forgot Her Name",
    subtitle: "Poems for the Returning Self",
    href: "/books/the-poet-who-forgot-her-name",
    cover: "/covers/the-poet-who-forgot-her-name.jpg",
    coverWidth: 755,
    coverHeight: 1024,
    amazon: "https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC",
    price: null,
    proof: "5.0★ on Amazon · #1 New Release in Women's Poetry",
    blurb:
      "A poetry collection in four movements: forgetting, searching, remembering, returning.",
    status: "published",
  },
  {
    roman: "II",
    title: "The Girl Who Grew Fangs",
    subtitle: "A Book of Remembering After the Fall Into Shadow",
    href: "/books/the-girl-who-grew-fangs",
    cover: "/covers/the-girl-who-grew-fangs.jpg",
    coverWidth: 1024,
    coverHeight: 1536,
    amazon: "https://www.amazon.com/gp/product/B0GP1N2ZCF",
    price: "Paperback $16.99 · eBook $9.99",
    proof: null,
    blurb: "53 poems tracing the feral arc from shadow to selfhood.",
    status: "published",
  },
  {
    roman: "III",
    title: "Year of the Fire Horse",
    subtitle: "A Book of Crossing Into Open Country",
    href: "/books/year-of-the-fire-horse",
    cover: "/covers/year-of-the-fire-horse.jpg",
    coverWidth: 1024,
    coverHeight: 1536,
    amazon: null,
    price: null,
    proof: null,
    blurb: "Coming. Not yet on Amazon.",
    status: "coming",
  },
];

export function bookByRoman(roman: Book["roman"]) {
  const book = books.find((item) => item.roman === roman);
  if (!book) throw new Error(`Missing book ${roman}`);
  return book;
}
