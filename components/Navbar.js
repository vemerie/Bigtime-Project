// components/NavBar.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';


const navBarStyle = {
    background: "transparent",
    color: "white",
    width: "100%",
    height: "60px"
  };
  const logoStyle = {
    height:"60px",
  }
  
  const NavBar = () => (
    <div className="navBarContainer" style={navBarStyle}>
    <Navbar className="navBarContainer" bg="" variant="dark" className="navbar">
      <Navbar.Brand href="#home"><img src="/logo.png" style={logoStyle}/></Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Work</Nav.Link>
        <Nav.Link href="#pricing">Training</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
    </Navbar>
    </div>



  );
  
  export default NavBar;