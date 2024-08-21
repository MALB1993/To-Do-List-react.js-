import { useContext, useState } from "react";
import TodoContext from "../../context/todos/TodoContext";
import { Spinner } from "react-bootstrap";

const UpdateTodo = ({ todo }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { updateTodos } = useContext(TodoContext);
    const handleClick = async () => {
        setIsLoading(true);
        try {
            await updateTodos(todo);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading ?
                (
                    <Spinner animation="grow" size="sm" variant="primary"/>
                )
                :
                (
                    todo.completed ?
                        (<i onClick={(event) => handleClick(event)} className="bi fs-4 bi-check-all pointer text-success"></i>)
                        :
                        (<i onClick={(event) => handleClick(event)} className="bi fs-4 bi-check pointer text-primary"></i>)
                )
            }
        </>
    )
}

export default UpdateTodo;