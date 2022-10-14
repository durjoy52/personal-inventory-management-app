import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PranGroup from "./components/PranGroup/PranGroup";
import SaGroup from "./components/SaGroup/SaGroup";
import Navbar from "./components/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/pran" element={<PranGroup/>}></Route>
        <Route path="/sa" element={<SaGroup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
