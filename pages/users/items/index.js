import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JokeBlock from "@components/JokeBlock";

export default function Items() {
  
  return (
    <div className="container">
      <Head>
        <title>Items</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Items" />
        <hr />
        <p className="description">
          All items.
        </p>
        <Link href={{
          pathname: '/users/matt',
          query: { slug: 'matt' }
        }}>
          <p>user: matt</p>
        </Link>
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
