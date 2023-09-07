import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
            <Container>
                <Navbar.Brand className='mbrand'>React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar></div>
    )
}

export default MyNavBar