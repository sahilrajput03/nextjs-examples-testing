import useSWR from "swr";

const fetcher = async (url) => {
  // return fetch(url).then((res) => res.text());
  let res = await fetch(url, {
    credentials: "same-origin",
  });
  let text = await res.text();
  return {text, res};
};

export default function Index() {
  const {data, error} = useSWR("/api/cookies", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {`Cookie from response: "${data.text}"`}
      <br />
      <br />
      My notes
      <br />
      <br />
      :: Cookies are not accessible by browser js, thats why its secure than jwt, but also it would vulnerable to network hacks on your wifi.
      <br />
      <br />
      :: httponly flag is set to true by default. If you set httponly flag as false then only you would be able to read cookies from browser js.
      <a href="https://stackoverflow.com/a/17508321">Read more here..</a>
      <br />
      :: Read about httponly from amazing link <a href="https://owasp.org/www-community/HttpOnly">here</a>.{/* {data.res.cookie("Next.js", "api-middleware!")} */}
      <br />
      Set httpOnly flag from express backend as suggested here: <a href="https://stackoverflow.com/a/39792609">stackoverflow answer.</a>
    </div>
  );
}
