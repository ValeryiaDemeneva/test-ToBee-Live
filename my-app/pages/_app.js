import { useState } from "react";
import { Input, List } from "../components";
import "../styles/globals.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Input
        setList={setList}
        list={list}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
