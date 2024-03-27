import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store";

import ListOfUsers from "./components/ListOfUsers";

function App() {
  return (
    <Provider store={store}>
      <ListOfUsers />
      <Toaster richColors />
    </Provider>
  );
}

export default App;
