import { useState } from "react";
import { Input, List } from "../components";
import "../styles/globals.css";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='main-container'>
      <h1>TODOS</h1>
      <div className = 'input-container'>
        <Input
          setList={setList}
          list={list}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <List list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
