import {useRouter} from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    // We send status 200 from backend if there is no error, so we are covering the case here.
    // Also, the error will be caught in error property returned by useSWR hook!!
    throw new Error(data.message);
  }
  // throw new Error("booomiiee!!"); // my testing..

  return data;
};

export default function Person() {
  const {query} = useRouter();
  console.log(query);
  const {data, error} = useSWR(`/api/people/${query.id}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.mass}</td>
          <td>{data.hair_color}</td>
          <td>{data.skin_color}</td>
          <td>{data.eye_color}</td>
          <td>{data.gender}</td>
        </tr>
      </tbody>
    </table>
  );
}
