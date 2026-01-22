const initialState = {
    task: '',
    tasks: []
};

function tasksReducer( state = initialState, action ) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((_, index) => index !== action.payload.index)
            }
        default:
            return state;
    }
}

export default tasksReducer;