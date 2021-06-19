const initialState = 1

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_CATEGORIES': {
        return  payload;
    }
    default:
        return state
    }
}