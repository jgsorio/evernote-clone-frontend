import React from 'react';
import presentationImage from '../../assets/images/evernote_presentation.png';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import './style.scss';

const HomeScreen = () => {
    return (
    <Container className="home">
        <Row className="mt-4">
                <Col xs={12} md={4}>
                    <h2>Create notes easily and access when you wants on the cloud</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor ante eget ex eleifend viverra.
                        Praesent molestie sagittis tempor. Etiam auctor sodales condimentum. Sed tincidunt eget orci non tincidunt. </p>
                    <p>Morbi vehicula elit a enim interdum, vitae congue elit tristique. Nunc imperdiet, dui a iaculis ornare, quam sapien feugiat est,
                        vel condimentum quam lacus eleifend elit.
                        Vestibulum luctus, quam ut aliquam suscipit, augue urna condimentum mauris, ut convallis dolor elit eget odio. </p>
                    <Button variant="outline-dark mb-4" size="lg" href="/auth/register">Register for free Now</Button>
                </Col>
                <Col xs={12} md={8} className="d-flex justify-content-center">
                    <Image src={presentationImage} alt="presentation" fluid={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen;