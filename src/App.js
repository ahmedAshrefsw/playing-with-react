import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
// app is the root component ! in react app 
// component tree starts with app component 
// every other component should be nested in the app component and so on 
// component is just a fun that return a jsx code and export it at the end of the file 
 
function App() {
  const name = "Ahmed";

  return (
    // className is alternative to html calss att in jsx
    <div className="App">
      <Navbar />
        <div className="myFirstdiv">
          <h1>Hello ya {name} , welcom to react ! </h1>
           
           {/* we can  use curly praces to render vars in the return  , we can use this to render anything to a string we can't use this in rendering objects and bool directly*/}
        </div>
    </div>
  );
}

export default App;
