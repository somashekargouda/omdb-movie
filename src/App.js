import "./App.css";
import Movies from "./Components/Movies";
import { createStore } from "redux";
import movieReducer from "./redux/Reducers.jsx";
import { Provider } from "react-redux";

//Creating redux stores
const store = createStore(movieReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Movies />
      </Provider>
    </div>
  );
}

export default App;
