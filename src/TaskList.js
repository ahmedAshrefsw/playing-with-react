const TaskList = (props) => {
  const handleDelete = (todoID) => {
    let remv = null;
    let tempTodo = [...props.todos];
    tempTodo.map((item) => {
      if (item.id == todoID) remv = tempTodo.pop();
      props.setTodos(tempTodo);
      localStorage.setItem("data", JSON.stringify(tempTodo));
    });
    console.log(tempTodo);
  };
  return (
    <div>
      {props.todos &&
        props.todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.name}</h2>
            <button
              onClick={() => {
                props.handleDelete(todo.id);
              }}
            >
              DEL
            </button>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
