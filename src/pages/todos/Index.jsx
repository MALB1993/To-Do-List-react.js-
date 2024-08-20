import { useContext, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TodoContext from "../../context/todos/TodoContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scss/Index.scss";
import Filter from "../../components/todos/Filter";
import ErrorMessage from "../../components/shared/ErrorMessage";
import TodoList from "../../components/todos/TodoList";
import CreateTodo from "../../components/todos/Create";

const IndexTodo = () => {
    const { todos, fetchTodos, error } = useContext(TodoContext);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <Container className="my-4">
            <ErrorMessage error={error} />
            <Row className="g-3">
                <CreateTodo todos={todos} />
                <Filter todos={todos} />
                <TodoList todos={todos} />
            </Row>
        </Container>
    );
};

export default IndexTodo;
