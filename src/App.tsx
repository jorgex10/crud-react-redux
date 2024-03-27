import ListOfUsers from "./components/ListOfUsers";
import { Provider } from "react-redux";
import { store } from "./store";
import { CreateNewUser } from "./components/CreateNewUser";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <ListOfUsers />
        <CreateNewUser />
        <Toaster richColors />
      </Provider>
    </div>
  );
}

export default App;
