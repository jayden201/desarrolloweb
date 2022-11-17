import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useContext } from "react"
import { DataContext } from '../../Context/DataProvider';


export const Header = () =>{
    const Titulo = "Aplicación";
    const provider = useContext(DataContext);
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    const logOut = () =>{
      localStorage.setItem("usuario",null);
      window.location = '/';
    }
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">{Titulo}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link className='nav-link' to="/">Bienvenido  </Link>
                <Link className='nav-link' to="/nuevo">Nuevo Producto</Link>
                <Link className='nav-link' to="/productos">Lista Productos</Link>
                <Link className='nav-link' to="/carrito">Lista Ventas</Link>
                <Link className='nav-link' to="/checkout">Checkout</Link>
                <Button onClick={()=>{
                        provider.setCarrito([]);
                        provider.setVenta([]);
                }} className='btn btn-danger'>Cancelar compra</Button>
                                <Button onClick={()=>{  
                                  logOut();
                }} className='btn btn-danger'>Cerrar Sesión</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}