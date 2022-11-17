import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();


export const DataProvider = (props) =>{

    const [listaProductos,setLista] = useState([]);
    const [carritoCompras,setCarrito] = useState([]);
    const [compra,setCompra]=useState(0);
    
    const [unidades,setUnidades] = useState([]);
    const [carritoVenta,setVenta] = useState([]);

    useEffect(() =>{
        setLista(listaProductos)
    },[listaProductos])

    useEffect(() =>{
        setCarrito(carritoCompras)
    },[carritoCompras])
    useEffect(() =>{
        setVenta(carritoVenta)
    },[carritoVenta])

    useEffect(() =>{
        setCompra(compra)
    },[compra])


    useEffect(() =>{
        setUnidades(unidades)
    },[unidades])

    const value = {
        listaProductos: listaProductos,
        setLista: setLista,
        
        
        carritoCompras:carritoCompras,
        setCarrito:setCarrito,
        compra:compra,
        setCompra:setCompra,
        setUnidades:setUnidades,
        unidades:unidades,
        setVenta:setVenta,
        carritoVenta:carritoVenta
    }

    return(
        <>
            <DataContext.Provider value={value}>
                {props.children}
            </DataContext.Provider>
        </>
    )
}
