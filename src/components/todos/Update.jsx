import { useContext, useState } from "react";
import TodoContext from "../../context/todos/TodoContext";
import Loading from "../shared/Loading";

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
                    <Loading />
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