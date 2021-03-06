import { useState } from "react";

const AddTodo = (props) => {
  const [name, setName] = useState("");

  const handleClearAll = () => {
    props.setTodos([]);
    localStorage.setItem("data", JSON.stringify([]));
  };

  const handleAddNewTodo = () => {
    if (name === "" || name === "enter valid task!") {
      setName("enter valid task!");
      return;
    }
    let tempTodo = [...props.todos];
    let id = generateId(tempTodo);
    tempTodo.push({ name, id });

    props.setTodos(tempTodo);
    localStorage.setItem("data", JSON.stringify(tempTodo));
    setName("");
  };

  return (
    <div className="AddTodo">
      <h1>Add new task</h1>
      <input
        type="text"
        name="newTodo"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleAddNewTodo}>go</button>
      <button onClick={handleClearAll}>clear all </button>
    </div>
  );
};
function generateId(tempTodo) {
  if (tempTodo.length != 0) {
    return tempTodo[tempTodo.length - 1].id + 1;
  }
  return 0;
}

export default AddTodo;
