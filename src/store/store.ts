import { combineReducers, createStore } from "redux";

const initialState = {
    isSignedIn: false,
    userName: "Tsh"
}


const rootReducer = combineReducers({
    userData : () => initialState
})

export const store = createStore(rootReducer)