import {RootStateType} from "../redux/state";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState ) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: RootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};