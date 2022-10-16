import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PranGroup from "./components/PranGroup/PranGroup";
import SaGroup from "./components/SaGroup/SaGroup";
import Navbar from "./components/Shared/Navbar/Navbar";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="update/:id" element={<UpdateProduct/>}></Route>
        <Route path="/pran" element={<PranGroup/>}></Route>
        <Route path="/sa" element={<SaGroup/>}></Route>
      </Routes>
    </>
  );
}

export default App;
