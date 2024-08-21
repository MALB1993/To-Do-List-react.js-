import { useContext, useState } from "react";
import TodoContext from "../../context/todos/TodoContext";
import { Spinner } from "react-bootstrap";

const DeleteTodo = ({ todoId }) => {

    const [isDeleting, setIsDeleting] = useState(false);
    const { deleteTodos } = useContext(TodoContext);

    const handleClick = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            setIsDeleting(true);
            try {
                await deleteTodos(todoId);
            } catch (error) {
                console.error(error);
            } finally {
                setIsDeleting(false);
            }
        }
    }

    return (
        <>
            { isDeleting ?
                <Spinner animation="grow" role="status" size="sm">
                    <span className="visually-hidden">
                        Loading...
                    </span>
                </Spinner> : <i onClick={() => handleClick()} className="bi bi-trash fs-5 pointer text-danger"></i> 
            }
        </>
    )
}

export default DeleteTodo;