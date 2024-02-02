import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);
  
  return (
    <div>
      <h1 className={styles}>hello</h1>
      <Button text={"button"}/>
      
      <hr />

      <h1>To Do List part One</h1>
      <h2>My To Dos ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>

      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
