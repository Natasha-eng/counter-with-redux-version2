import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localeStorageUtils";


const rootReducer = combineReducers(
    {counter: counterReducer})

let preloadedState
const persistedStateString = localStorage.getItem("state")
if (persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem("state", JSON.stringify(store.getState()))
})

//types
export type RootStateType = ReturnType<typeof rootReducer>;