import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">Tuan Nguyen DEV</Navbar.Brand> */}
                <NavLink className="navbar-brand" to="/">
                    Tuan Nguyen DEV
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/user">
                            Users
                        </NavLink>
                        <NavLink className="nav-link" to="/admin">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        <button className="btn-login">Login</button>
                        <button className="btn-signup">Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log In</NavDropdown.Item>
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
