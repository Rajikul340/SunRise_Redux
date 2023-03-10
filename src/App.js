import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./Redux/store/Store";
import routes from "./routes/routes";

function App() {


  return (
 
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
  
  );
}

export default App;
