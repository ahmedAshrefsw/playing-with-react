import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    setTodos(data);
  }, []);

  return (
    <div>
      <AddTodo todos={todos} setTodos={setTodos} />

      <TaskList todos={todos} setTodos={setTodos}></TaskList>
    </div>
  );
};

export default ToDo;
