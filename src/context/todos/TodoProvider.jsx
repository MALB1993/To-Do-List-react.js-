import { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoProvider = ({ children }) => {
    const initialState = {
        todos: [],
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);


    return (
        <TodoContext.Provider value={{ todos: state.todos }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;