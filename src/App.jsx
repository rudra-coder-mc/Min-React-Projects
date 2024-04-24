import { RouterProvider } from "react-router-dom";
// import userContextProvider from "./contexts/userContext";
import router from "./Router";
import ThemeContextProvider from "./contexts/theme";
import { TodoProvider } from "./contexts";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <TodoProvider>
          <RouterProvider router={router} />
        </TodoProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
