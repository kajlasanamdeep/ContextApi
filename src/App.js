import { useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
export default function App() {
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(1);
  const [dec, setDec] = useState(1);
  const increment = useCallback(() => {
    setCount(prev => (+prev) + (+inc))
  }, [inc])
  const decrement = useCallback(() => {
    setCount(prev => prev - dec)
  }, [dec])
  useEffect(() => {
    console.log("decrement");
  }, [decrement])
  useEffect(() => {
    console.log("increment");
  }, [increment])
  return (
    <div className="d-flex">
      <select className="me-1" value={inc} onChange={(e) => {
        setInc(e.target.value)
      }}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>

      <Button onClick={increment}>+</Button>
      <span>{count}</span>
      <Button variant="danger" onClick={decrement}>-</Button>
      <select className="ms-1" value={inc} onChange={(e) => {
        setDec(e.target.value)
      }}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </select>

    </div>)
}