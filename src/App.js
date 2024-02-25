import 'bootstrap/dist/css/bootstrap.min.css'
import useFetch from "./Hooks/useFetch";
import { Button } from 'react-bootstrap';

export default function App() {
  const [data, isFetching, paginate] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h3>Items</h3>
      {isFetching ?
        <p>Fetching Data ...</p>
        :
        <ul>{
          data?.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      }
      <div>
        <Button className='me-1' onClick={() => paginate(1)}>1</Button>
        <Button className='me-1' onClick={() => paginate(2)}>2</Button>
        <Button onClick={() => paginate(3)} >3</Button>
      </div>
    </>
  );
}