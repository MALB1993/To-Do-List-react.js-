import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CreateTodo() {
    return (
        <Row className='gap-2'>
            <Col lg={5} sm={12}>
                <form>
                    <Form.Label htmlFor="createTodo">Create Todo</Form.Label>
                    <div className='d-flex'>
                        <Form.Control type="text" id="createTodo" placeholder="Please enter title ... ." />
                        <Button variant="outline-primary" className='ms-2' type='submit'>Submit</Button>
                    </div>
                </form>
            </Col>
        </Row>
    );
}

export default CreateTodo;