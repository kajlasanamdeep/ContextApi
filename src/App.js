import { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap";
const initialState = { todos: [], title: "", time: "" };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        todos: [...state.todos, {
          title: state.title,
          time: state.time
        }],
        title: "",
        time: ""
      }
    case "title": {
      console.log("updating title..");
      return {
        ...state,
        title: action.value
      }
    }
    case "time": {
      console.log("updating time..");
      return {
        ...state,
        time: action.value
      }
    }
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div className="text-center">
    <h3 className="text-center w-100">Todos List</h3>
    <div className="d-flex justify-content-center">
      <input type="text" value={state?.title} onChange={(e) => {
        dispatch({ type: "title", value: e.target.value })
      }}></input>
      <input className="ms-1" type="time" value={state?.time} onChange={(e) => {
        dispatch({ type: "time", value: e.target.value })
      }}></input>
      <Button className="ms-1" onClick={() => {
        dispatch({ type: "ADD" })
      }}>Add Todo</Button>
    </div>
    <div className="mt-3">
      {
        state.todos.map((todo, i) => {
          return <h6 key={i}>{i + 1}. {todo.title} at {todo.time}</h6>
        })
      }
    </div>
  </div>
}