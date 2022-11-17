import { useContext,useState} from "react"
import { DataContext } from "../../Context/DataProvider"
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const CarritoCompras = () =>{
    var itemSubtotal = 0;
    const provider = useContext(DataContext);
    //const[unidades,setUnidades] =useState([]);
    const[unidades,setUnidades] =useState('');
    const[nombre,setNombre]=useState('');
    const[precio,setPrecio]=useState('');
   console.log(provider.carritoCompras);


    
    provider.carritoCompras.map((object,index)=>{
        var item = 0;
        
        item=itemSubtotal=itemSubtotal+Math.round(object.precio)*unidades;
        //console.log(item)
        provider.setCompra(item);
        

       
    })
    const handleUnidades =(event) =>{
        //console.log(event.target.value)
        //setUnidades([...unidades,event.target.value]);
        setUnidades(event.target.value);

    }
    const adicionarProductoVenta = (nombre,precio,unidades) =>{
        setNombre(nombre)
        setPrecio(precio)
        setUnidades(unidades)
        const objetoEnviar={
            nombre:nombre,
            precio:precio,
            cantidad:unidades
        };
        provider.setVenta([...provider.carritoVenta,objetoEnviar]);

        
    }    

    return(
        <div className="continer">
        <div className="row mt-2">
            <div className="col">
                <h1>Mi carrito de compras</h1>
            </div>
        </div>
        <div className="row">
            <div className="col 6">
            <div className="row">
            <div className="col-sm-12">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre articulo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Venta Final</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       provider.carritoCompras.map((object,index) => {
                            return <tr>
                                
                                        <td>{index}</td>
                                        <td>{object.nombre}</td>
                                        <td>{object.precio}</td>
                                        <td><input onChange={handleUnidades} className="form-control" type="text" ></input></td>
                                        <td><button onClick={()=>{

                                                adicionarProductoVenta(object.nombre,object.precio,unidades)
                                                }}className="btn btn-primary">+</button></td>
                                    </tr>
                       }) 
                   }
                </tbody>
            </Table>
            </div>
        </div>
            </div>
            <div className="col 6">
                    <Card style={{ width: '18rem' }}>
                        
                        <Card.Body>
                            <Card.Title>Resumen de compra</Card.Title>
                            <Card.Text>
                            <div className="col 6">
                                TOTAL:
                            </div>
                            <div className="col 6">
                                {provider.compra}
                            </div>
                            </Card.Text>
                            <Link to="/Checkout" className="btn btn-success">Pagar</Link>
                        </Card.Body>
                    </Card>
            </div>
        </div>


       </div>
    )
}