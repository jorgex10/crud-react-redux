import ListOfUsers from "./components/ListOfUsers";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <ListOfUsers />
      </Provider>
    </div>
  );
}

export default App;
