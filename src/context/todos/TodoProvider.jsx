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
    const [loading, setLoading] = useState(false);
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

    const filterTodos = useCallback( async(count) => {
        setLoading(true);
        try {
            setLoading(false);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
            dispatch({ type: "SET_TODOS", payload: response.data });
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }finally{
            setLoading(false);
        }
    },[dispatch]);

    return (
        <TodoContext.Provider value={{ todos: state.todos, fetchTodos, error , loading ,filterTodos}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
