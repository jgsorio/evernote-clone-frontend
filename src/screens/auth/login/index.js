import React, {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UsersService from "../../../services/users";

const LoginScreen = () => {
    const [logged, setLogged] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await UsersService.login({ email, password });
        if (response.statusCode === 200) {
            window.location.href = '/notes';
        }
    }


    useEffect(() => {
        const getUser = localStorage.getItem('user');
        if (getUser) {
            setLogged(true)
        }
    }, []);

    if (logged) {
        return window.location.href = '/notes';
    }

    return (
        <Container fluid style={{ height: "100vh"}}>
            <Row className="h-75 d-flex justify-content-center align-items-center">
                <Col xs={0} md={7} className="sidebar-login">

                </Col>
                <Col xs={12} md={5}>
                    <Form onSubmit={handleSubmit} className="me-5">
                        <h2 className="text-center">Login</h2>
                        <p className="text-center">Access your notes now</p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Input your email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Input your password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-4" variant="outline-success">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginScreen;