import '../css/Calculator.css';
import Button from "./Button";
import Screen from "./Screen";
import Clear from "./Clear";
import {useState} from "react";
import {evaluate} from "mathjs";

export default function Calculator () {

  const INITIAL_VALUE = '';

  const [input, setInput] = useState(INITIAL_VALUE);

  const concatInput = value => {
    setInput(input + value);
  }

  const clearInput = () => {
    setInput(INITIAL_VALUE);
  }

  const calculateInput = () => {
    setInput(evaluate(input));
  }

  return (
    <div className="calculator-container">
      <Screen input={input}/>
      <div className="row">
        <Button clickHandler={concatInput}>1</Button>
        <Button clickHandler={concatInput}>2</Button>
        <Button clickHandler={concatInput}>3</Button>
        <Button clickHandler={concatInput}>+</Button>
      </div>
      <div className="row">
        <Button clickHandler={concatInput}>4</Button>
        <Button clickHandler={concatInput}>5</Button>
        <Button clickHandler={concatInput}>6</Button>
        <Button clickHandler={concatInput}>-</Button>
      </div>
      <div className="row">
        <Button clickHandler={concatInput}>7</Button>
        <Button clickHandler={concatInput}>8</Button>
        <Button clickHandler={concatInput}>9</Button>
        <Button clickHandler={concatInput}>*</Button>
      </div>
      <div className="row">
        <Button clickHandler={calculateInput}>=</Button>
        <Button clickHandler={concatInput}>0</Button>
        <Button clickHandler={concatInput}>.</Button>
        <Button clickHandler={concatInput}>/</Button>
      </div>
      <div className="row">
        <Clear clickHandler={clearInput}/>
      </div>
    </div>
  );
}