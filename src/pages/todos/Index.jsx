import { useContext, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import TodoContext from "../../context/todos/TodoContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/Index.scss";
import Filter from "../../components/todos/Filter";

const IndexTodo = () => {
    const { todos, fetchTodos, error } = useContext(TodoContext);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <Container className="my-4">
            {error && <p className="text-danger text-center">Error: {error}</p>}
                    <Filter todos={todos}/>
            
            <Row className="g-3">
                {todos && todos.length > 0 ?
                    todos.map((todo) => (
                        <Col sm={12} md={6} lg={4} key={todo.id}>
                            <Card className="h-100">
                                <Card.Body className="d-flex align-items-center align-content-center justify-content-between">
                                    <Card.Text>{todo.title}</Card.Text>
                                    <Card.Text className="d-flex align-items-center">
                                        {todo.completed ? <i className="bi fs-4 bi-check-all pointer text-success"></i> : <i className="bi fs-4 bi-check pointer text-primary"></i>}
                                        <i className="bi bi-trash fs-5 pointer text-danger"></i>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    :
                    <Col>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Text>Todo list is empty!</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </Container>
    );
};

export default IndexTodo;
