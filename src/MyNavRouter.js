import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavRouter = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container>
                    <Navbar.Brand className='mbrand'>React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </div >
    )
}

export default MyNavRouter