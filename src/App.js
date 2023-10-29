import "./App.css";

import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import List from "./components/List";

import Register from "./components/Register";
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategoey";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='add-product' element={<AddProduct/>} />
        <Route path="" element={<List />} />
        <Route path="list" element={<List />} />
        <Route path="register" element={<Register />} />
        <Route path="categoryList" element={<CategoryList />} />
        <Route path="addCategory" element={<AddCategory />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
