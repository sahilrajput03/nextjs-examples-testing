import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import router from "next/router";
import commonData from "../utils/commonData";
import "colors";

export default function Home(props) {
  console.log("hello where am i ?".magenta.bold);
  console.log("is server:renderFn", typeof window === "undefined");

  useEffect(() => {
    console.log("is server:didMount", typeof window === "undefined");
    // ^^ interestingly ^^ this only renders on the browser.
  }, []);

  return (
    <div className={styles.container}>
      {console.log("is server:jsx: " + typeof window === "undefined")}
      {"is server-in:jsx" + typeof window === "undefined"}
      <h1>Hello world!</h1>
      {props.count}
      <button
        onClick={() => {
          router.push("/Page1");
        }}
      >
        go to page 1
      </button>
      {props.common}
    </div>
  );
}

export async function getServerSideProps() {
  const common = await commonData();
  return { props: { common } };
}
