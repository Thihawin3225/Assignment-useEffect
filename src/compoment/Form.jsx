import { useState } from "react";

const Form = () => {
  const [id, setId] = useState(undefined);
  const [err, setErr] = useState(false);
  const [todo, setTodo] = useState({});
  console.log(Object.keys(todo));

  const fetchData = async () => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const response = await api.json();
    setTodo(response);
    console.log(response);
  };
  const getData = (event) => {
    event.preventDefault();

    if (id < 1 || id === undefined) {
      setErr(true);
      return;
    }
    setErr(false);
    fetchData();
  };
  return (
    <div>
      <form onSubmit={getData}>
        <input
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button>Get data</button>
      </form>
      <div>{err && <p>Please fill input eg 1, 2, 3 etc...</p>}</div>
      {todo && Object.keys(todo).length > 0 && (
        <div key={todo.id}>
          <p>UserId: {todo.userId}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "Done" : "Not Done"}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
