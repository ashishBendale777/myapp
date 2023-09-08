import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

const MyNavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container>
                    <Navbar.Brand className='mbrand'>React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to='home' spy={true} smooth={true}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nlink' to='about' spy={true} smooth={true}>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='contact' spy={true} smooth={true}>Contact</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></div>
    )
}

export default MyNavBar