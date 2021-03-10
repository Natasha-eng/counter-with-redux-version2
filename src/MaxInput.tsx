import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";


type InputProps = {
    changeMaxValue: (newValue: number) => void
    maxValue: number
    startValue: number
    title: string
}

export function MaxInput(props: InputProps) {

    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(+e.currentTarget.value);
    }

    let maxInputMistake = props.maxValue < 0 || props.maxValue <= props.startValue ? "MaxMistakeInput" : "Input";

    return (
        <div className="input">

            {props.title} <TextField label="Number" variant="filled" className={maxInputMistake} type={"number"}
                                     onChange={onMaxInputChangeHandler} value={props.maxValue}/>

        </div>
    );
}
