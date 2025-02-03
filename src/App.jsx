import "./App.css";

import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Journal from "./components/pages/Journal";
import Error from "./components/pages/Error";
import { Routes, Route } from "react-router";
import RootLayout from "./components/layouts/RootLayout";

function App() {
  return (
    <>
      <Routes>
       
       <Route element={<RootLayout/>}>
       <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="About" element={<About />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="Journal" element={<Journal />} />
        <Route path="*" element={<Error />} />
       </Route>
      </Routes>
    </>
  );
}

export default App;
