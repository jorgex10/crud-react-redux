import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store";

import ListOfUsers from "./components/ListOfUsers";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Provider store={store}>
      <ListOfUsers />
      <CreateUser />
      <Toaster richColors />
    </Provider>
  );
}

export default App;
