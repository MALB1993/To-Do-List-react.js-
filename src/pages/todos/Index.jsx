import { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoContext from "../../context/todos/TodoContext";

const IndexTodo = () => {
    const { todos, fetchTodos, error } = useContext(TodoContext);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Container>
            <Row>
                <Col md={12} sm={12} className="border p-2 mt-3">
                    <p>Todo Page</p>
                    {error && <p className="text-danger">Error: {error}</p>}
                    <ul>
                        {todos && todos.length > 0 ? (
                            todos.map(todo => (
                                <li key={todo.id}>
                                    {todo.title} - {todo.completed ? "Completed" : "Pending"}
                                </li>
                            ))
                        ) : (
                            <p>No todos available</p>
                        )}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default IndexTodo;
