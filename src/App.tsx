import "./App.css";
import { Provider } from "react-redux";
import { MovieComponent } from "./views/Dashboard";
import configureStore from "./redux/configurestore";

function App() {
  return (
    <Provider store={configureStore}>
      <div className="App">
        <MovieComponent />
      </div>
    </Provider>
  );
}

export default App;
