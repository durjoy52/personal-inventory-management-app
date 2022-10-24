import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from './components/AddProduct/AddProduct';
import Home from "./components/Home/Home";
import ManageProducts from './components/ManageProducts/ManageProducts';
import MuskanGroup from './components/MuskanGroup/MuskanGroup';
import PowerGroup from './components/PowerGroup/PowerGroup';
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
        <Route path="/power" element={<PowerGroup/>}></Route>
        <Route path="/muskan" element={<MuskanGroup/>}></Route>
      </Routes>
        <Toaster />
    </>
  );
}

export default App;
