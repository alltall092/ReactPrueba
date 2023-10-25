import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css';
import { useNavigate } from 'react-router-dom';
const Header=()=>{
  const navigate = useNavigate();
  const Redireccion = () => {
    window.location.href = 'https://nodejsprueba.onrender.com/api/v1/docs/';
   
 };
 const servidor = () => {
  const n=navigate('/servidor');
  return n;
    
  };
  const guia = () => {
    const n=navigate('/guia');
    return n;
      
    };
//hola 
return(<>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
       
      <img src="./logo/logo.png" height="50" width="50" />
    R ArchivoRD
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"> <i className="fa-solid fa-file"></i>AppArchivo</Nav.Link>
            <Nav.Link href="#servidor" onClick={servidor}><i className="fa-solid fa-server"></i>Servidor</Nav.Link>
            <Nav.Link href="#guia" onClick={guia }> <i className="fa-solid fa-guarani-sign"></i>Guia</Nav.Link>
            <Nav.Link href="#docuemtnacion" onClick={Redireccion }> <i className="fa-solid fa-folder"></i>Documentacion</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


</>)


}
export default Header;