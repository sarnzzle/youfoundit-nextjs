import Head from "next/head";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <Link key="users" href="users">
          <p>users</p>
        </Link>
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
