import './AddProducto.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import { useContext } from 'react';
import { ApiConnectionServer } from '../../data/ApiConnectionServer';
import { Link,Navigate } from 'react-router-dom';


export const AddProducto = () => {
    const[producto,setProducto] = useState('');
    const[descripcion,setDescripcion] = useState('');
    const[precio,setPrecio] = useState('');
    const[imagen,setImagen] = useState('');
    const[loading,setLoading] = useState(false);
    var userinfo;
    const objeto ={
        nombre:producto,
        descripcion:descripcion,
        precio:precio,
        cantidaddisponible:1,
        imagen:{
            data:"",
            url:"",
            name:""
        },

        
    }
    
    const provider = useContext(DataContext);
    //console.log(provider.listaProductos)

    const adicionarProducto = async(producto) =>{
        const userdata = JSON.parse(localStorage.getItem("usuario"));
        const  apiServer = new ApiConnectionServer();
        //console.log(producto);
        provider.setLista([...provider.listaProductos,producto]);
        setLoading(true);
        const base64 = await convertBase64(imagen);
        console.log(producto.nombre);
        
        const extension = imagen.name.split('.')[1];
        objeto.imagen.data = base64.split(',')[1];
        //objeto.imagen.name = imagen.name;
        objeto.imagen.name = producto.nombre+"."+extension;
        
        const peticion = apiServer.postData(objeto,'/producto/create',userdata.token);
        peticion.then((data) => {
            setLoading(false);
            return data.json();
        }).then((responseJson) =>{
            setLoading(false);
            switch(responseJson.code){
                case 200:
                    //alert(responseJson.message);
                    localStorage.setItem("usuario",JSON.stringify(responseJson.data));
                    break;
                case 500:
                    alert(responseJson.message);
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        })
       
    }

    const handleProducto =(event) =>{
        //console.log(event.target.value)
        setProducto(event.target.value);

    }
    const handleDescripcion =(event) =>{
        //console.log(event.target.value)
        setDescripcion(event.target.value);

    }

    const handlePrecio =(event) =>{
        //console.log(event.target.value)
        setPrecio(event.target.value);
        

    }
    const handleImagen =(event) =>{
        //console.log(event.target.value)
        setImagen(event.target.files[0]);
        
    }

    const  convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
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
        
        <div className='container text-align-left'>
            <div className='row'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Nombre producto</Form.Label>
                        <Form.Control onChange={handleProducto} type="text" placeholder="Por favor coloque el nombre del producto"  name="nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control onChange={handleDescripcion} type="text" placeholder="Por favor coloque el nombre del producto" name='descripcion'  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control onChange={handlePrecio} type="text" placeholder="Por favor coloque el nombre del producto" name='valor' />
                    </Form.Group>

                     <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Disabled file input example</Form.Label>
                        <Form.Control type="file" onChange={handleImagen}/>
                    </Form.Group>

                    
                    {
                            !loading &&  <button onClick={() => {
                                adicionarProducto(objeto)
                            }} className="btn btn-success">Crear Producto</button>
                        }
                        {
                            loading &&  <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                </div>
                        }
                </Form>
            </div>
        </div>
    )

}
