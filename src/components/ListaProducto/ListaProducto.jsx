import { useContext } from "react"
import { DataContext } from "../../Context/DataProvider";
import Table from 'react-bootstrap/Table';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import { useState,useEffect } from "react";
import { Link,Navigate } from 'react-router-dom';

export const ListaProducto = () =>{
    const [listaNueva,setListaNueva]= useState([]);
    const [unidades,setUnidades]= useState([]);
    //console.log(provider.listaProductos)
    const provider = useContext(DataContext);
    const  apiServer = new ApiConnectionServer();
    const userdata = JSON.parse(localStorage.getItem("usuario"));
    var userinfo;
    const cargarPeticion = () =>{
        
        const peticion = apiServer.getData('/producto/getall',userdata.token);
        
        peticion.then((data) => {
            //setLoading(false);
            
            return data.json();
            
        }).then((responseJson) =>{
            
            //setLoading(false);
            //console.log(responseJson)
            switch(responseJson.code){
                
                case 200:
                    //alert(responseJson.message);
                    localStorage.setItem("productos",JSON.stringify(responseJson.data));
                    setListaNueva(responseJson.data);
                    
                    //console.log(listaMostrar);
                    break;
                    
                case 500:
                    alert(responseJson.message);
                    break;
    
            }
        })
        .catch((error) => {
            console.log(error);
            //setLoading(false);
    
        });
    }
    useEffect(() => {
        cargarPeticion();
      },[]);
    

    const adicionarProductoCarrito = (producto) =>{
        provider.setCarrito([...provider.carritoCompras,producto]);
    }


    const handleUnidades =(event) =>{
        //console.log(event.target.value)
        setUnidades([...unidades,event.target.value]);

    }
    const validateSession = () =>{
        const userdata = JSON.parse(localStorage.getItem("usuario"));
       
        if(userdata != null && userdata.token != null && userdata.token != ""){
            userinfo = userdata;
            return true;
        }
        return false;
      }
    
      if(!validateSession()) {
        return(
            <>
                <Navigate to="/"></Navigate>
            </>
        )
      }
    return(
        
        <div>
            <Table className="striped bordered hover">
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Valor</th>
                        <th>Cantidad Disponible</th>

                        <th>Imagen</th>
                        <th>Adicionar Carrito</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        listaNueva.map((object, index) => {
                            //console.log(object)
                            return <tr>

                                <td>{object.nombre}</td>
                                <td>{object.descripcion}</td>
                                <td>{object.precio}</td>
                                <td>{object.cantidaddisponible}</td>


                                <td><img src={object.imagen.url} width="90"></img></td>
                                <td><button onClick={() => {
                                    adicionarProductoCarrito(object)
                                }} className="btn btn-primary">+</button></td>
                                <td><Link className="btn btn-primary nav-link" to={"/modificar/" + object._id} >Modificar</Link></td>
                                <td><Link className="btn btn-danger nav-link" to={"/delete/" + object._id} >Eliminar</Link></td>
                                <td>{index}</td>
                            </tr>


                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
