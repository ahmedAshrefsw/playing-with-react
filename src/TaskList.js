const TaskList = (props) => {
  const handleDelete = (todoID) => {
    let tempTodo = [...props.todos];
    tempTodo.map((item) => {
      if (item.id === todoID) tempTodo.pop();
      props.setTodos(tempTodo);
      localStorage.setItem("data", JSON.stringify(tempTodo));
    });
    console.log(tempTodo);
  };
  return (
    <div className="taskList">
      {props.todos &&
        props.todos.map((todo) => (
          <div className="taskListItem" key={todo.id}>
            <h2>{todo.name}</h2>
            <button
              onClick={() => {
                handleDelete(todo.id);
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
