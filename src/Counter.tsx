import React from "react";

type CounterPropsType = {
    counter: number;
    increment: () => void
    maxValue: number
    startValue: number
    reset: () => void
    instruction: string
}

function Counter(props: CounterPropsType) {
    const disableValue = props.counter === props.maxValue || props.startValue < 0 || props.startValue >= props.maxValue;
    const counterStyle = (disableValue) ? "incorrectCounterStyle" : "CounterStyle";

    return (
        <div>
            <div className={counterStyle}>{props.instruction || props.counter} </div>
            <div className="CounterButtons">
            </div>
        </div>
    );
}

export default Counter;