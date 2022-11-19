import './DeleteProducto.css';
import { useEffect } from 'react';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import { useParams } from 'react-router-dom';



export const DeleteProducto = () => {
    const { id } = useParams();
    const apiServer = new ApiConnectionServer();
    const userdata = JSON.parse(localStorage.getItem("usuario"));
   
    const cargarPeticion = () => {

        const peticion = apiServer.deleteDataId("/producto/delete/", id,userdata.token);

        peticion.then((data) => {

            return data.json();

        }).then((responseJson) => {
            console.log(responseJson)
        })
            .catch((error) => {
                console.log(error);


            });
    }
    useEffect(() => {
        cargarPeticion();
    }, []);


}
