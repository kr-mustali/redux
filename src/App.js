import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { addBug, removeBug, resolveBug } from "./actions";
function App() {
  store.subscribe(() => {
    console.log("Store changed!", store.getState());
  });
  store.dispatch(addBug("First Bug"));
  store.dispatch(addBug("Second Bug"));
  store.dispatch(removeBug(1));
  store.dispatch(resolveBug(2));

  console.log(store.getState());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
