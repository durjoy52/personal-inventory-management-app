import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from './components/AddProduct/AddProduct';
import Home from "./components/Home/Home";
import ManageProducts from './components/ManageProducts/ManageProducts';
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
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="update/:id" element={<UpdateProduct/>}></Route>
        <Route path="manageProducts" element={<ManageProducts/>}></Route>
        <Route path="/pran" element={<PranGroup/>}></Route>
        <Route path="/sa" element={<SaGroup/>}></Route>
      </Routes>
        <Toaster />
    </>
  );
}

export default App;
