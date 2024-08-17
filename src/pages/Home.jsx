import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={6} sm={6} className="mx-auto border p-4 mt-5">
                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo sint repudiandae, totam, assumenda nulla, amet eaque neque dicta maxime consectetur ea? Exercitationem eaque vero maxime expedita repudiandae, provident eveniet reiciendis!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;