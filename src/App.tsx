import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const App = () => {
  console.log("rerender App");

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
