import styles from "../styles/Home.module.css";
// This is the default way of using css modules in nextjs.

export default function Home() {
  return <div className={styles.container}>Hello, from nextjs!</div>;
}

// console.log(styles);  // This is typed though. :)
