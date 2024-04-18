import { RouterProvider } from "react-router-dom";
import userContextProvider from "./contexts/userContext";
import router from "./Router";

function App() {
  return (
    <>
      <userContextProvider>
        <RouterProvider router={router} />
      </userContextProvider>
    </>
  );
}

export default App;
