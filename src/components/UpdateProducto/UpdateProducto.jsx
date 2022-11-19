import './UpdateProducto.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import { useParams } from 'react-router-dom';



export const UpdateProducto = () => {
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const[loading,setLoading] = useState(false);
    const[unidades,setUnidades] =useState("");
    const userdata = JSON.parse(localStorage.getItem("usuario"));
    const objeto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: parseInt(precio),
        cantidaddisponible: parseInt(unidades)
    }

    const apiServer = new ApiConnectionServer();
    const cargarPeticion = () => {
        setLoading(true);
        
        const peticion = apiServer.getDataId("/producto/selectbyid/", id,userdata.token);

        peticion.then((data) => {
            setLoading(false);
            return data.json();

        }).then((responseJson) => {
            setLoading(false);
            setNombre(responseJson[0].nombre)
            setDescripcion(responseJson[0].descripcion)
            setPrecio(responseJson[0].precio)
            setUnidades(responseJson[0].cantidaddisponible)

        })
            .catch((error) => {
                console.log(error);
                setLoading(false);

            });
    }
    useEffect(() => {
        cargarPeticion();
    }, []);

    const modificar = (objeto) => {
        const modificar = apiServer.putData(objeto,"/producto/update/", id,userdata.token); 
        modificar.then((data) => {
            setLoading(false);
            return data.json();

        }).then((responseJson1) => {
            setLoading(false);
            setNombre(responseJson1[0].nombre)
            setDescripcion(responseJson1[0].descripcion)
            setPrecio(responseJson1[0].precio)
            setUnidades(responseJson1[0].cantidaddisponible)
        })
            .catch((error) => {
                console.log(error);
                setLoading(false);

            });
    }
    

    const handleProducto =(event) =>{
        //console.log(event.target.value)
        setNombre(event.target.value);

    }
    const handleDescripcion =(event) =>{
        //console.log(event.target.value)
        setDescripcion(event.target.value);

    }

    const handlePrecio =(event) =>{
        //console.log(event.target.value)
        setPrecio(event.target.value);
        

    }
    const handleUnidades =(event) =>{
        //console.log(event.target.value)
        setUnidades(event.target.value);
        

    }


    return (

        <div className='container text-align-left'>
            <div className='row'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label >Nombre producto</Form.Label>
                        <Form.Control  type="text" placeholder="Por favor coloque el nombre del producto" onChange={handleProducto} name="nombre" value={nombre} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control  type="text" placeholder="Por favor coloque el nombre del producto" onChange={handleDescripcion} value={descripcion} name='descripcion' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control  type="text" placeholder="Por favor coloque el nombre del producto" onChange={handlePrecio} name='precio'  value={precio} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Unidades Disponibles</Form.Label>
                        <Form.Control  type="text" placeholder="Por favor coloque el nombre del producto" onChange={handleUnidades} name='unidades'  value={unidades} />
                    </Form.Group>

                    {
                        !loading && <button onClick={() => {
                            modificar(objeto)
                        }} className="btn btn-success">Modificar Producto</button>
                    }
                    {
                        loading && <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                </Form>
            </div>
        </div>
    )

}
