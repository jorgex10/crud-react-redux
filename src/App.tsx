import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store";

import ListOfUsers from "./components/ListOfUsers";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <ListOfUsers />
        <CreateUser />
        <Toaster richColors />
      </Provider>
    </div>
  );
}

export default App;
