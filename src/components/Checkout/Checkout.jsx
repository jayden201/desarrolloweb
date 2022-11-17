import { useContext } from "react"
import { DataContext } from "../../Context/DataProvider";
import Table from 'react-bootstrap/Table';
//import { ApiConnectionServer } from '../../data/ApiConnectionServer';
//import { useState,useEffect } from "react";
//import { Link } from 'react-router-dom';

export const Checkout = () =>{

    //console.log(provider.listaProductos)
    const provider = useContext(DataContext);
    console.log(provider.carritoVenta);
    return(
        
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Valor Pagar</th>
            </tr>
          </thead>
          <tbody>
            {

              provider.carritoVenta.map((object, index) => {
                //console.log(object)
                return <tr>
                  <td>{object.nombre}</td>
                  <td>{object.precio}</td>
                  <td>{object.cantidad}</td>
                  <td>{object.cantidad*object.precio}</td>
                </tr>


              })
            }
          
          </tbody>
        </Table>
      </div>
    )

}
