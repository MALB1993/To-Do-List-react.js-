const TodoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return { ...state, todos: action.payload };
        case "SET_FILTER":
            return { ...state, todos: action.payload };
        case "ADD_TODO":
            return { ...state, todos: [action.payload, ...state.todos] };
        default:
            return state;
    }
};

export default TodoReducer;
