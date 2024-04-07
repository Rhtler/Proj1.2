import Home from "./pages/home";
import Produtos from "./pages/produtos";
import Login from "./pages/login";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router(){
return (
<BrowserRouter>
<Menu/>
<Routes>
    <Route path="/login" element={<Login />}/>  
    <Route path="/produtos" element={<Produtos />}></Route>
    <Route path="/" element={<Home />}></Route> 
</Routes>
</BrowserRouter>


)

}