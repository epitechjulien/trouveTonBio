import { ADD_PLACE } from "./places-actions";

const initialState = {
    places = []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            default:
                return state;
    }
    return state;
};