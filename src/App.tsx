import React, {useEffect} from 'react';
import './App.css';
import Counter from "./Counter";
import {StartInput} from "./StartInput";
import {MaxInput} from "./MaxInput";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/state";
import {
  changeMaxInputValueAC,
  changeMinInputValueAC, disableBtnInc, disableResetBtnAC, disableSetBtn, IncrementCounterValueAC,
  InitialStateType, resetCounterValueAC, setInstructionAC, setMaxInputValueAC, setMinInputValueAC,
} from "./redux/counterReducer";
import {Box, Container, makeStyles, Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function App() {

  const dispatch = useDispatch();
  const state = useSelector<RootStateType, InitialStateType>(state => state.counter);

  const classes = useStyles();

  const changeMaxValue = (newValue: number) => {

    let incorrectValue = state.minInputValue >= newValue;

    if (incorrectValue) {
      dispatch(changeMaxInputValueAC(newValue));
      dispatch(setInstructionAC("Incorrect value"));
      dispatch(disableBtnInc(true));
      dispatch(disableSetBtn(true));
      dispatch(disableResetBtnAC(true));


    } else {
      dispatch(changeMaxInputValueAC(newValue));
      dispatch(setInstructionAC("Set counter value"));
      dispatch(disableBtnInc(true));
      dispatch(disableSetBtn(false));
      dispatch(disableResetBtnAC(true));
    }
  }

  const changeStartValue = (newValue: number) => {

    let incorrectValue = newValue < 0 || newValue >= state.maxInputValue;

    if (incorrectValue) {
      dispatch(changeMinInputValueAC(newValue));
      dispatch(setInstructionAC("Incorrect value"));
      dispatch(disableBtnInc(true));
      dispatch(disableSetBtn(true));
      dispatch(disableResetBtnAC(true));

    } else {
      dispatch(changeMinInputValueAC(newValue));
      dispatch(setInstructionAC("Set counter value"));
      dispatch(disableBtnInc(true));
      dispatch(disableSetBtn(false));
      dispatch(disableResetBtnAC(true));
    }
  }

  const setValue = () => {
    dispatch(setMinInputValueAC())
    dispatch(setMaxInputValueAC())
    dispatch(setInstructionAC(""));
    dispatch(disableBtnInc(false));
    dispatch(disableSetBtn(true));
    dispatch(disableResetBtnAC(false));
  }

  const increment = () => {
    dispatch(IncrementCounterValueAC());
  }

  useEffect(() => {
    if (state.maxInputValue === state.counterValue) {
      dispatch(disableBtnInc(true));
    }
  }, [state.maxInputValue, state.counterValue])

  const reset = () => {
    dispatch(resetCounterValueAC(false));
  }


  return (
      <Container fixed style={{height: "100vh"}}>
        <Box display="flex" alignItems="center" justifyContent="center" style={{height: "100vh"}}>
          <Box style={{height: "50%", width: "40%", margin: "20px"}}>
            <Paper elevation={4} className={classes.root}>
              <MaxInput changeMaxValue={changeMaxValue}
                        maxValue={state.maxInputValue} startValue={state.minInputValue}
                        title={"Max Input:"}/>

              <StartInput changeStartValue={changeStartValue} title={"Min Input:"}
                          startValue={state.minInputValue}
                          maxValue={state.maxInputValue}/>

              <Button variant={"contained"} size={"small"} disabled={state.isSetBtnDisabled}
                      onClick={setValue}>Set</Button>
            </Paper>
          </Box>
          <Box style={{height: "50%", width: "40%", margin: "20px"}}>
            <Paper elevation={4} className={classes.root}>
              <Counter counter={state.counterValue} increment={increment} startValue={state.minInputValue}
                       maxValue={state.maxInputValue}
                       reset={reset} instruction={state.instruction}/>

              <Button variant={"contained"} size={"small"} disabled={state.isIncBtnDisabled}
                      onClick={increment}> inc</Button>
              <Button variant={"contained"} size={"small"} disabled={state.isResetBtnDisabled}
                      onClick={reset}> reset</Button>
            </Paper>
          </Box>
        </Box>
      </Container>
  )
}
