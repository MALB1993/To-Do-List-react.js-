import { useCallback, useReducer, useState } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import axios from "axios";

const TodoProvider = ({ children }) => {
    const initialState = {
        todos: [],
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const [error, setError] = useState(null);

    const fetchTodos = useCallback(async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if (response.status === 200) {
                dispatch({ type: "SET_TODOS", payload: response.data });
            } else {
                setError(`${response.status} : ${response.statusText}`);
            }
        } catch (error) {
            setError(error.message);
        }
    }, [dispatch]);

    return (
        <TodoContext.Provider value={{ todos: state.todos, fetchTodos, error }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
