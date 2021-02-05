import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_NAME } from "./constants"

export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
})


// This is a shorthand version of the above
export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
})

export const setName = (name: any) => ({
    type: SET_NAME,
    firstname: name
})