const Home = () => {
  let name = "ahmed";
  const handlePrintAhmed = () => {
    console.log("Hello Ahmed");
  };
  const handlePrintNameVar = (name) => {
    console.log("hello " + name);
  };

  return (
    <div className="content">
      <h1>Hello ya {name} , welcom to react ! </h1>
      {/* we use on onClick = {funName} like this way intead of calling the fun to fire it only when we click  */}
      <button onClick={handlePrintAhmed}> Print Ahmed</button>

      {/* to handle dynamic values or passed values we use anynmous arrow function insted of () to avoid calling the fun without clicking it */}
      <button
        onClick={(name) => {
          handlePrintNameVar("teez");
        }}
      >
        Print Name Var
      </button>

      {/* we can  use curly praces to render vars in the return  , we can use this to render anything to a string we can't use this in rendering objects and bool directly*/}
    </div>
  );
};

export default Home;
