import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "./Hooks/useFetch";
import { Button } from 'react-bootstrap';

export default function App() {
  const [data, isFetching, reload] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {isFetching ?
        <p>Fetching Data ...</p>
        :
        <ul>{
          data?.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
          <Button onClick={reload}>Reload</Button>
        </ul>
      }
    </>
  );
}