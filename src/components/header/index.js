import React, {useEffect} from 'react';
import {Button, Container, Image, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from '../../assets/images/logo_evernote.png';

const Header = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    useEffect(() => {
        const getUser = localStorage.getItem('user');
        if (getUser) {
            return setLoggedIn(true)
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/auth/login';
    }

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container fluid={true} className="mx-2">
                <Navbar.Brand>
                    <NavLink className="navbar-brand" href="/">
                        <Image src={logo} alt="logo" width={40} /> Evernote Clone
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        {loggedIn ? ([
                                <Button variant="outline-success" onClick={handleLogout} key={0}>Logout</Button>,
                                <Nav.Link href="/notes" className="text-light" key={1}>Notes</Nav.Link>
                            ]
                        ) : ( [
                                <Button variant="outline-success" href="/auth/register" key={0}>Register</Button>,
                                <Nav.Link href="/auth/login" className="text-light" key={1}>Login</Nav.Link>
                            ]
                        ) }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;