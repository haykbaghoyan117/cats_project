const initialState = [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CATS_IN_LIST": {
            return [...state, ...payload]
        }
        case 'SET_TEN_CATS': {
            return payload;
        }
        default:
            return state
    }
}