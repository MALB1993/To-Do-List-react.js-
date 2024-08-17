const TodoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return { ...state, todos:  action.payload }

        default:
            break;
    }
}

export default TodoReducer;