import logo from "./logo.svg";
import "./App.css";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";
import Box3 from "./components/Box3/Box3";
import PopUp from "./components/PopUp/PopUp";
import Box4 from "./components/Box4/Box4";
import Box5 from "./components/Box5/Box5";

function App() {
  return (
    <div className="App">
      <Box1 />
      <Box2 />
      <Box3 />
      <PopUp />
      <Box4 />
      <Box5 />
    </div>
  );
}

export default App;
