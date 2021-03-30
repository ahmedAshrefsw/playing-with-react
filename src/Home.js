import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";
import { createApi } from "unsplash-js";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [img, setImg] = useState(" ");
  const [changepic, setChangepic] = useState(false);

  const handelChangePic = () => {
    setChangepic(!changepic);
  };

  const unsplash = createApi({
    accessKey: "l5MaWXVX1NFfZ3Q2YK75JvPm7wJiQPL3bR_1zPl0UjM",

    //...other fetch options
  });
  unsplash.photos.getRandom({}).then((res) => {
    console.log(res.response.urls.regular);
    setImg(res.response.urls.regular);
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    setTodos(data);
  }, [changepic]);

  return (
    <div>
      <h1>Choose your background</h1>
      <h2>all photos from Unsplash.com</h2>
      <img src={img} alt="" />
      <button onClick={handelChangePic}>change</button>
    </div>
  );
};

export default Home;
