import styles from "../styles/Home.module.css";
import useSWR, {mutate} from "swr";
// all code is replicated/inspired from https://swr.vercel.app/docs/mutation
function App() {
  const {data} = useSWR("/api/hello");

  return (
    <div>
      <Profile />
      <button
        onClick={async () => {
          // Tell all SWRs with this key to revalidate
          // mutate("/api/hello");
          // ^^^ This makes swr to make fresh request for '/api/hello' and update in components as well.
          ///
          // mutate("/api/hello", {...data, surname: "Kalra"});
          // ^^^ This udpates data locally first and then
          // refetch all related queries using `/api/hello` and update in all components as well.
          ///
          // mutate("/api/hello", {...data, surname: "Malra"}, false);
          // ^^ If you use false in third param, refetch won't
          // occur at all, but data is updated just locally in all components for `/api/hello` used as query.
          ///
          // swr is not reliable for defining updating on itself,
          // but you got to update via a custom function or so..

          const data = await new Promise((resolve) => setTimeout(() => resolve({name: "Mohinder Singh"})), 2000);

          mutate("/api/hello", data);
          // ^^ This updates data instantly locally and then make request again and updates locally again.
        }}>
        Refetch...
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      page 1
      <br />
      <App />
    </div>
  );
}

const Profile = () => {
  const {data} = useSWR("/api/hello");
  if (!data) return null;
  return JSON.stringify(data);
};
