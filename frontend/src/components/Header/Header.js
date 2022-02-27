import React from 'react';

import { Button, Container, Form, FormControl, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" varian="dark">
            <Container>
                <Navbar.Brand href="/">Notes</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" style={{ position: "relative" }}>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', margin: "0 auto" }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link href="/mynotes">
                            <Link to="/mynotes">My Notes</Link>
                        </Nav.Link>
                        <NavDropdown title="Jai" id="navbarScrollingDropdown" style={{ left: "0px" }}>
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header