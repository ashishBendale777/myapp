import React, { useState } from 'react'
import { Button, Nav, Offcanvas } from 'react-bootstrap'

const MyOffCanvas = () => {
    const [show, setshow] = useState(false)

    const handleShow = () => {
        setshow(true)
    }
    const handleHide = () => {
        setshow(false)
    }
    return (
        <div>
            <Button onClick={() => handleShow()}>Open</Button>
            <Offcanvas show={show} onHide={handleHide}>
                <Offcanvas.Header closeButton>
                    Beauti Admin
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link>Dashboard</Nav.Link>
                        <Nav.Link>Add</Nav.Link>
                        <Nav.Link>All</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MyOffCanvas