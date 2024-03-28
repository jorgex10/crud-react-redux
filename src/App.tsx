import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </Provider>
  );
}

export default App;
