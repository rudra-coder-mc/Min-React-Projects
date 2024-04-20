import { RouterProvider } from "react-router-dom";
import userContextProvider from "./contexts/userContext";
import router from "./Router";
import ThemeContextProvider from "./contexts/theme";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <userContextProvider>
          <RouterProvider router={router} />
        </userContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
