import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar';
import Home from './Home'
// app is the root component ! in react app 
// component tree starts with app component 
// every other component should be nested in the app component and so on 
// component is just a fun that return a jsx code and export it at the end of the file 
 
function App() {
  const name = "Ahmed";



  return (
    // className is alternative to html calss att in jsx
    <div className="App">
      {/*  // here is nav bar react js component nested in the main component */}
      <Navbar /> 
      <Home />

    </div>
  );
}

export default App;
