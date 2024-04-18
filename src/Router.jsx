import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Currency,PassWordGen,BgChange } from "./components";
import Layout from "./Layout";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="bgChanger" element={<BgChange />} />
      <Route path="passwordGenerator" element={<PassWordGen />} />
      <Route path="currencyConvertor" element={<Currency />} />
    </Route>
  )
);
export default router;
