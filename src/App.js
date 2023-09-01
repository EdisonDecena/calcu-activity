import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H1 } from "./components/H1";

function App() {
  const [total, setTotal ] = useState(0);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const clickCalculate = (symbol)=> {
    switch (symbol){
      case "+":
        return setTotal(firstNumber + secondNumber);
      case "-":
        return setTotal(firstNumber - secondNumber);
      case "*":
        return setTotal(firstNumber * secondNumber);
      case "/":
        return setTotal(firstNumber / secondNumber);
      default:
        return "invalid please try again";
    }
  }
  


  return (
    <>
      <H1 label="Simple Calculator"/>
      <hr/>
      <H1 label={total}/>
      <hr/>
      <Input type="number" placeholder="Enter your first number" step={0.25} onChange={(e)=>  setFirstNumber(Number(e.target.value))} value={firstNumber}/>
      <Input type="number" placeholder="Enter your second number" step={0.25} onChange={(e)=>  setSecondNumber(Number(e.target.value))} value={secondNumber}/>
      <hr/>
      <Button label="Add" onClick={()=> clickCalculate("+")}/>
      <Button label="Subtract" onClick={()=> clickCalculate("-")}/>
      <Button label="Divide" onClick={()=> clickCalculate("/")}/>
      <Button label="Multiply" onClick={()=> clickCalculate("*")}/>
    </>
  );
}

export default App;
