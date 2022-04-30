// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

export default function Two({quotes}) {
  return <div>{quotes ? quotes.map((quote) => <li key={quote}>{quote}</li>) : "Loading..."}</div>;
}

const URL = "https://loveapi.ml/kanye.rest/quotes.json";

export async function getStaticProps(context) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const quotes = await (await fetch(URL)).json();
  return {
    props: {quotes}, // will be passed to the page component as props
  };
}
