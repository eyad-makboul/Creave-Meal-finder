export const initialState = {
    todos: [],
};
export function todoReducer(state: any, action: any) {
    switch (action.type) {
        case "ADD":
            return { ...state, todos: [...state.todos, action.payload], };
        case "DELETE":
            return {...state, todos: state.todos.filter((todo: any, index: number) => index !== action.payload )};
        default:
            return state;
    }
}