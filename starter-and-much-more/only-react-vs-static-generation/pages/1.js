// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

import useSWR from "swr";

export default function One() {
  const {data: quotes} = useSWR("/api/quotes");
  return <div>{quotes ? quotes.map((quote) => <li>{quote}</li>) : "Loading..."}</div>;
}
