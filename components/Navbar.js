// components/NavBar.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link'



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
    <Navbar expand="lg" fixed="top"  variant="dark">
      <Navbar.Brand href="#home"><img src="/logo.png" style={logoStyle}/></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#work">Work</Nav.Link>
        <Nav.Link href="#training">Training</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#service">Sevice</Nav.Link>
        <Nav.Link href="#gallery">Gallery</Nav.Link>
        
      </Nav>
      </Navbar.Collapse>

    </Navbar>
    </div>



  );
  
  export default NavBar;