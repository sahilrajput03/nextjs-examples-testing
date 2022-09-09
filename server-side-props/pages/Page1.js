import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import data from "./data";
import router from "next/router";
import commonData from "../utils/commonData";

export default function Home(props) {
  console.log("sahill-newprops", props);
  // if (!props.isSecured) return "Its secured page, error!";
  return (
    <div className={styles.container}>
      <h1>Page 1</h1>
      {props.count}
      {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}

      <button
        onClick={() => {
          router.push("/");
        }}
      >
        go to home page.
      </button>
      {props.common}
    </div>
  );
}

export async function getServerSideProps() {
  const common = await commonData();
  return { props: { data, isSecured: true, common } };
}
