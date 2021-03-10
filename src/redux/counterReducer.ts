export enum ACTIONS_TYPE {
    CHANGE_MIN_INPUT_VALUE = 'CHANGE_MIN_INPUT_VALUE',
    CHANGE_MAX_INPUT_VALUE = 'CHANGE_MAX_INPUT_VALUE',
    SET_VALUES = 'SET_VALUES',
    INCREMENT_COUNTER_VALUE = 'INCREMENT_COUNTER_VALUE',
    RESET_COUNTER_VALUE = 'RESET_COUNTER_VALUE',
    DISABLE_BTN_INC = 'DISABLE_BTN_INC',
    DISABLE_SET_BTN = 'DISABLE_SET_BTN',
    DISABLE_RESET_BTN = 'DISABLE_RESET_BTN',
    SET_INSTRUCTION = 'SET_INSTRUCTION',
    SET_MIN_INPUT_VALUES = 'SET_MIN_INPUT_VALUES',
    SET_MAX_INPUT_VALUES = 'SET_MAX_INPUT_VALUES',
}

const initialState = {
    maxInputValue: 5,
    minInputValue: 0,
    counterValue: 0,
    instruction: "",
    isSetBtnDisabled: false,
    isIncBtnDisabled: false,
    isResetBtnDisabled: false
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case ACTIONS_TYPE.CHANGE_MIN_INPUT_VALUE: {
            return {
                ...state,
                minInputValue: action.minInputValue,
            }
        }

        case ACTIONS_TYPE.CHANGE_MAX_INPUT_VALUE: {
            return {
                ...state,
                maxInputValue: action.maxInputValue
            }
        }

        case ACTIONS_TYPE.SET_MAX_INPUT_VALUES: {
            return {
                ...state,
                maxInputValue: state.maxInputValue
            }
        }

        case ACTIONS_TYPE.SET_MIN_INPUT_VALUES: {
            return {
                ...state,
                counterValue: state.minInputValue
            }
        }

        case ACTIONS_TYPE.INCREMENT_COUNTER_VALUE: {
            return {
                ...state,
                counterValue: 1 + state.counterValue
            }
        }

        case ACTIONS_TYPE.RESET_COUNTER_VALUE: {
            return {
                ...state,
                counterValue: state.minInputValue,
                isIncBtnDisabled: action.isIncBtnDisabled
            }
        }

        case ACTIONS_TYPE.DISABLE_BTN_INC:
            return {
                ...state,
                isIncBtnDisabled: action.value
            }

        case ACTIONS_TYPE.DISABLE_RESET_BTN:
            return {
                ...state,
                isResetBtnDisabled: action.value
            }

        case ACTIONS_TYPE.DISABLE_SET_BTN:
            return {
                ...state,
                isSetBtnDisabled: action.value
            }

        case ACTIONS_TYPE.SET_INSTRUCTION:
            return {
                ...state,
                instruction: action.instruction
            }

        default:
            return state;
    }
}

//actions

export const changeMinInputValueAC = (minInputValue: number): changeMinInputValueActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MIN_INPUT_VALUE,
        minInputValue
    }
}

export const changeMaxInputValueAC = (maxInputValue: number): changeMaxInputValueActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_INPUT_VALUE,
        maxInputValue
    }
}

export const setMinInputValueAC = (): setMinInputValueType => {
    return {
        type: ACTIONS_TYPE.SET_MIN_INPUT_VALUES
    }
}

export const setMaxInputValueAC = (): setMaxInputValueType => {
    return {
        type: ACTIONS_TYPE.SET_MAX_INPUT_VALUES
    }
}

export const setInstructionAC = (instruction: string): setInstructionType => {
    return {
        type: ACTIONS_TYPE.SET_INSTRUCTION,
        instruction
    }
}

export const IncrementCounterValueAC = (): IncrementCounterValueActionType => {
    return {
        type: ACTIONS_TYPE.INCREMENT_COUNTER_VALUE,
    }
}

export const resetCounterValueAC = (isIncBtnDisabled: boolean): resetCounterValueActionType => {
    return {
        type: ACTIONS_TYPE.RESET_COUNTER_VALUE,
        isIncBtnDisabled
    }
}

export const disableBtnInc = (value: boolean): DisableBtnType => {
    return {
        type: ACTIONS_TYPE.DISABLE_BTN_INC,
        value
    }
}

export const disableSetBtn = (value: boolean): DisableSetBtnType => {
    return {
        type: ACTIONS_TYPE.DISABLE_SET_BTN,
        value
    }
}

export const disableResetBtnAC = (value: boolean): DisableResetBtnType => {
    return {
        type: ACTIONS_TYPE.DISABLE_RESET_BTN,
        value
    }
}

//types

export type InitialStateType = typeof initialState

type ActionsType = changeMinInputValueActionType |
    changeMaxInputValueActionType |
    setValueActionType |
    IncrementCounterValueActionType |
    resetCounterValueActionType | DisableBtnType |
    DisableResetBtnType | DisableSetBtnType
    | setInstructionType | setMinInputValueType |
    setMaxInputValueType

export type changeMinInputValueActionType = {
    type: ACTIONS_TYPE.CHANGE_MIN_INPUT_VALUE
    minInputValue: number
}


export type changeMaxInputValueActionType = {
    type: ACTIONS_TYPE.CHANGE_MAX_INPUT_VALUE
    maxInputValue: number
}

export type setValueActionType = {
    type: ACTIONS_TYPE.SET_VALUES
}

export type setMinInputValueType = {
    type: ACTIONS_TYPE.SET_MIN_INPUT_VALUES
}

export type setMaxInputValueType = {
    type: ACTIONS_TYPE.SET_MAX_INPUT_VALUES
}


export type IncrementCounterValueActionType = {
    type: ACTIONS_TYPE.INCREMENT_COUNTER_VALUE

}

export type resetCounterValueActionType = {
    type: ACTIONS_TYPE.RESET_COUNTER_VALUE
    isIncBtnDisabled: boolean
}


export type DisableBtnType = {
    type: ACTIONS_TYPE.DISABLE_BTN_INC
    value: boolean
}


export type DisableSetBtnType = {
    type: ACTIONS_TYPE.DISABLE_SET_BTN
    value: boolean
}


export type DisableResetBtnType = {
    type: ACTIONS_TYPE.DISABLE_RESET_BTN
    value: boolean
}

export type setInstructionType = {
    type: ACTIONS_TYPE.SET_INSTRUCTION,
    instruction: string
}

