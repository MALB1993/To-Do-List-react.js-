import { useCallback, useReducer, useState } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import axios from "axios";
import Swal from "sweetalert2";

const TodoProvider = ({ children }) => {
    const initialState = {
        todos: [],
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // get todos
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

    // filter by count 
    const filterTodos = useCallback(async (count) => {
        setLoading(true);
        try {
            setLoading(false);
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
            dispatch({ type: "SET_TODOS", payload: response.data });
        } catch (error) {
            setLoading(false);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [dispatch]);

    // added new item for todo list
    const addTodo = useCallback(async (title) => {
        setLoading(true);
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false,
            });
            dispatch({ type: "ADD_TODO", payload: response.data });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [dispatch])

    // update todo
    const updateTodos = useCallback(async (todo) => {
        setLoading(true);
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                title: todo.title,
                completed: todo.completed ? false : true,
            });
            dispatch({ type: "UPDATE_TODO", payload: response.data });
            Swal.fire({
                title: "Task Updated !",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            });
        } catch (error) {
            console.error(error);
            
        }finally{
            setLoading(false);
        }
    }, [dispatch]);

    return (
        <TodoContext.Provider value={{ todos: state.todos, fetchTodos, error, loading, filterTodos, addTodo, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
