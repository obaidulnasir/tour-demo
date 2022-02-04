import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navigation = () => {
    const { user, handleSignOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="nav-link">
                        <Link className="nav-link" to="/home">React-Bootstrap</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            {/* dropDown menu */}
                            <NavDropdown className="nav-link" title="Packages">
                                <NavDropdown.Item>
                                    <Link className="nav-link text-dark" to="/umrahPackages">Umrah Packages</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link className="nav-link text-dark" to="/tourPackages">Tour Packages </Link>
                                </NavDropdown.Item>

                                {/* divider */}
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                            {/* nav link */}
                            <Nav.Link>
                                <Link className="nav-link" to="/">SS</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">Register</Nav.Link> */}
                            {
                                user.email ? <Nav.Link><button onClick={handleSignOut}>Logout</button></Nav.Link> :
                                    <Nav.Link>
                                        <Link className="nav-link" to="/login"><button className="btn btn-info">Register</button></Link>
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;