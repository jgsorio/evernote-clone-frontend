import './App.scss'
import Header from "./components/header";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Sidebar from "./components/sidebar";
import {Col, Container, Row} from "react-bootstrap";

const App = () => {
    const getUser = localStorage.getItem("user");
    return (
        <>
            <Header></Header>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={12}>
                        <RouterProvider router={routes} />
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default App;