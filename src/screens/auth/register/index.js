import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './style.scss';
import UsersService from "../../../services/users";

const RegisterScreen = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await UsersService.register({ name, email, password });
        if (response.statusCode === 200) {
            window.location.href = '/auth/login';
        }
    }
    return (
        <Container fluid style={{ height: "80vh"}}>
            <Row className="h-100 justify-content-center align-items-center">
                <Col xs={0} md={7} className="sidebar-login">

                </Col>
                <Col xs={12} md={5}>
                    <Form onSubmit={handleSubmit} className="me-5">
                        <h2 className="text-center">Register Now</h2>
                        <p className="text-center">Your notes on cloud</p>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Input your name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Input your email" onChange={(e) => setEmail(e.target.value) } />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Input your password"  onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-4" variant="outline-success">Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterScreen;