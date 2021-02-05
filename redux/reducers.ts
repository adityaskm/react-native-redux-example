import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_NAME } from "./constants"

const initialState = { counter: 0, firstname: 'Aditya' };

export const counterReducer = (state = initialState, action: { type: any, firstname: string }) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { counter: state.counter + 1, firstname: state.firstname }
        case DECREMENT_COUNTER:
            return { counter: state.counter - 1, firstname: state.firstname }
        case SET_NAME:
            return { ...state, firstname: action.firstname }
        default:
            return state
    }
}


export const counterReducer2 = (state = initialState, action: { type: any, firstname: string }) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { counter: state.counter - 1, firstname: state.firstname }
        case DECREMENT_COUNTER:
            return { counter: state.counter + 1, firstname: state.firstname }
        default:
            return state
    }
}