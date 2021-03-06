import Head from 'next/head';
import ArticleList from '../components/Article/List';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>My Blabla news</title>
        <meta
          name="keywords"
          content="web dev, programming, development, front-end"
        />
      </Head>
      <ArticleList path="article" articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=6'
  );
  const articles = await response.json();

  return {
    props: { articles },
  };
}
