
const UserReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL':
            return Object.assign({}, state, {
                newState: action.payload
            });
        default:
            return state
    }
}

export default UserReducer;