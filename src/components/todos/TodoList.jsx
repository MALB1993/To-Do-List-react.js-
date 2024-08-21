import { Card, Col } from "react-bootstrap";
import UpdateTodo from "./Update";
import DeleteTodo from "./Delete";

const TodoList = ({ todos }) => {
    return (
        <>
            {todos && todos.length > 0 ?
                    todos.map((todo) => (
                        <Col sm={12} md={6} lg={4} key={todo.id}>
                            <Card className={(todo.completed ? "bg-light" : "bg-white")}>
                                <Card.Body className="d-flex align-items-center align-content-center justify-content-between">
                                    <Card.Text>{todo.completed ? <del>{todo.title}</del> : todo.title}</Card.Text>
                                    <Card.Text className="d-flex align-items-center">
                                        <UpdateTodo todo={todo}/>
                                        <DeleteTodo todoId={todo.id}/>
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