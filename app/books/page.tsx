export const metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <>
      <h1>Books</h1>

      <hr className="hr" />

      {/* Published */}
      <section className="book-row">
        <img
          className="book-cover"
          src="/covers/the-poet-who-forgot-her-name.jpg"
          alt="Cover of The Poet Who Forgot Her Name by Diana Wallace"
        />

        <div>
          <h2 className="book-title">The Poet Who Forgot Her Name</h2>
          <p className="book-meta">Published</p>

          <p>
            A poetry collection in the Expect Nothing canon—memory, return, and
            the conditions of becoming.
          </p>

          <p className="book-link">
            <a
              href="https://www.amazon.com/Poet-Who-Forgot-Her-Name/dp/B0GDVZ1WMC/ref=sr_1_1?crid=1XNKV09VRAOVG&dib=eyJ2IjoiMSJ9.y8SMf2QN6boht7Ul0gxkIQ.g5cjPCAKYmR03T-pupj1xGTMHa6TmAhMhJMpm5NCxSw&dib_tag=se&keywords=the+poet+who+forgot+her+name&qid=1770585074&sprefix=%2Caps%2C194&sr=8-1"
              target="_blank"
              rel="noreferrer"
            >
              View on Amazon →
            </a>
          </p>
        </div>
      </section>

      <hr className="hr" />

      {/* Forthcoming */}
      <section className="book-row">
        <img
          className="book-cover"
          src="/covers/the-girl-who-grew-fangs.jpg"
          alt="Cover of The Girl Who Grew Fangs by Diana Wallace"
        />

        <div>
          <h2 className="book-title">The Girl Who Grew Fangs</h2>
          <p className="book-meta">Forthcoming</p>

          <p>
            A long-form poetic work—mythic, feral, and oriented toward
            transformation.
          </p>
        </div>
      </section>
    </>
  );
}
