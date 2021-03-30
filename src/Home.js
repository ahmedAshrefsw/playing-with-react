import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const Home = () => {
  // let name = "ahmed";
  // const handlePrintAhmed = () => {
  //   console.log("Hello Ahmed");
  // };
  // const handlePrintNameVar = (name) => {
  //   console.log("hello " + name);
  // };

  // const [counter, setCounter] = useState(0);

  // const handleUpdateCounter = () => {
  //   setCounter(1213);
  // };
  const [todos, setTodos] = useState([]);

  const handleDelete = (todoID) => {
    let remv = null;
    let tempTodo = [...todos];
    tempTodo.map((item) => {
      if (item.id == todoID) remv = tempTodo.pop();
      setTodos(tempTodo);
      localStorage.setItem("data", JSON.stringify(tempTodo));
    });
    console.log(tempTodo);
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    setTodos(data);
  }, []);

  return (
    <div className="content">
      <h1>To-Do-list</h1>

      <label htmlFor="newTodo"> enter new todo</label>
      <br />
      <AddTodo todos={todos} setTodos={setTodos} />

      <TaskList todos={todos} handleDelete={handleDelete}></TaskList>
      {/* <h1>Hello ya {name} , welcom to react ! </h1> */}
      {/* we use on onClick = {funName} like this way intead of calling the fun to fire it only when we click  */}
      {/* <button onClick={handlePrintAhmed}> Print Ahmed</button> */}

      {/* to handle dynamic values or passed values we use anynmous arrow function insted of () to avoid calling the fun without clicking it */}
      {/* <button
        onClick={(name) => {
          handlePrintNameVar("teez");
        }}
      >
        Print Name Var
      </button> */}
      {/* we can  use curly praces to render vars in the return  , we can use this to render anything to a string we can't use this in rendering objects and bool directly*/}

      {/* <h2>now we are on {counter}</h2>
      <button onClick={handleUpdateCounter}>updateCounter</button> */}
    </div>
  );
};

export default Home;
