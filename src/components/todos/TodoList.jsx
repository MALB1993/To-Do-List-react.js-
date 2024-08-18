import { Card, Col } from "react-bootstrap";

const TodoList = ({ todos }) => {
    return (
        <>
            {todos && todos.length > 0 ?
                    todos.map((todo) => (
                        <Col sm={12} md={6} lg={4} key={todo.id}>
                            <Card className={(todo.completed ? "bg-light" : "bg-white")}>
                                <Card.Body className="d-flex align-items-center align-content-center justify-content-between">
                                    <Card.Text>{todo.completed ? <del>todo.title</del> : todo.title}</Card.Text>
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
        </>
    )
}

export default TodoList;