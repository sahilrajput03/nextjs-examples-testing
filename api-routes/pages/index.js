import useSWR from "swr";
import Person from "../components/Person";

export default function Index() {
  const {data, error} = useSWR("/api/people");

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  );
}
