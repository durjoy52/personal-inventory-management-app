import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import ManageProducts from './components/ManageProducts/ManageProducts';
import MuskanGroup from './components/MuskanGroup/MuskanGroup';
import PowerGroup from './components/PowerGroup/PowerGroup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Navbar from "./components/Shared/Navbar/Navbar";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="update/:id" element={<RequireAuth><UpdateProduct/></RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}>
        <Route index element={<UserProfile/>}></Route>
        <Route path="add" element={<AddProduct/>}></Route>
        <Route path="manageProducts" element={<RequireAuth><ManageProducts/></RequireAuth>}></Route>
        </Route>
        <Route path="/power" element={<PowerGroup/>}></Route>
        <Route path="/muskan" element={<MuskanGroup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
        <Toaster />
    </>
  );
}

export default App;
