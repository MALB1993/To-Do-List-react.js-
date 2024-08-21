import { useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TodoContext from '../../context/todos/TodoContext';
import Swal from "sweetalert2";
import Loading from '../shared/Loading';


function CreateTodo() {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { addTodo } = useContext(TodoContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title) {
            return;
        }
        setIsLoading(true);
        try {
            await addTodo(title);
            setTitle('');
            Swal.fire({
                title: "Task Added !",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            });
        } catch (error) {
            console.error("Failed to add todo", error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Row className='gap-2'>
            <Col lg={5} sm={12}>
                <form action="/" method="post" onSubmit={(event) => handleSubmit(event)}>
                    <Form.Label htmlFor="createTodo">Create Todo</Form.Label>
                    <div className='d-flex'>
                        <div>
                            <Form.Control type="text" id="createTodo" placeholder="Please enter title ... ." onChange={(event) => setTitle(event.target.value)} disabled={isLoading ? true : false} />
                        </div>
                        <Button variant='btn btn-primary mx-2' type="submit">
                            {isLoading ?
                                <Loading />
                                :
                                <> <i className='bi bi-plus'></i> Create </>
                            }
                        </Button>
                    </div>
                </form>
            </Col>
            <hr />
        </Row>
    );
}

export default CreateTodo;