import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  // To Do List part One, Two
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  // Coin Tracker
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  
  // To Do List part One, Two
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  //Coin Tracker
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Create React App */}
      <h1 className={styles}>Create React App</h1>
      <Button text={"button"} />

      <hr style={{ border: "solid 1px" }} />
      {/* To Do List part One, Two */}
      <h1>To Do List part One, Two</h1>
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

      <hr style={{ border: "solid 1px" }} />
      {/* Coin Tracker */}
      <h1>Coin Tracker</h1>
      <h2>The Coins! {loading ? "" : `(${coins.length})`}</h2>
      <input></input>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
