import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Users() {
  
  return (
    <div className="container">
      <Head>
        <title>Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Users" />
        <hr />
        <p className="description">
          All users.
        </p>
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
