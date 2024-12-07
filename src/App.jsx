import React, { useEffect, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await api.json();
    setTodo(data);
  };
  return (
    <div>
      {todo.map((todos) => (
        <p key={todos.id}>{todos.title}</p>
      ))}
    </div>
  );
};

export default App;
