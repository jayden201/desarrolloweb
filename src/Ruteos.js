import { Registro } from "./components/Registro/Registro";
import { Login } from "./components/Login/Login";
import { AddProducto } from "./components/AddProducto/AddProducto";
import { Route, Routes } from "react-router-dom";
import { ListaProducto } from "./components/ListaProducto/ListaProducto";
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras";
import { UpdateProducto } from "./components/UpdateProducto/UpdateProducto";
import { DeleteProducto } from "./components/DeleteProducto/DeleteProducto";
import { Checkout } from "./components/Checkout/Checkout";
export const Ruteos = () =>{

    return(
        
        <Routes>
            
            
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/productos" element={<ListaProducto/>}></Route>
            <Route path="/carrito" element={<CarritoCompras/>}></Route>
            <Route path="/modificar/:id" element={<UpdateProducto/>}></Route>
            <Route path="/delete/:id" element={<DeleteProducto/>}></Route>
            <Route path="/Checkout" element={<Checkout/>}></Route>
        </Routes>
    )

}