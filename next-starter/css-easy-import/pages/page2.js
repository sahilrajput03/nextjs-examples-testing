import "../styles/Page2.module.css";
// To make this kind of import work, you get to install a dependency i.e., `npm i -D @zeit/next-css`.
// And in `next.config.js`, configure `withCSS` as described @ https://stackoverflow.com/a/50169230/10012446

export default function Page2() {
  return (
    <div>
      <div className="red">I got styles from Page2.module.css</div>
      <div className="boom">I got styles from global.css</div>
    </div>
  );
}
