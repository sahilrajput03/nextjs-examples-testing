import Link from "next/link";

const Navigation = () => (
  <div>
    Go to page:
    <br />
    <Link href="/">
      <a>Home</a>
    </Link>
    <br />
    <Link href="/1">
      <a>One</a>
    </Link>
    <br />
    <Link href="/2">
      <a>Two</a>
    </Link>
  </div>
);

export default Navigation;
