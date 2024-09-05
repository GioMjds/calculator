// InputsWrapper.jsx
import React from 'react';
import Button from './Button';

const InputsWrapper = ({ handleClear, handlePlusMinus, handlePercent, handleOperator, handleNumber, handleDelete, handleCompute }) => {
  return (
    <div className="inputsWrapper">
      <Button className="featured" onClick={handleClear}>C</Button>
      <Button className="featured" onClick={handlePlusMinus}>+/-</Button>
      <Button className="featured" onClick={handlePercent}>%</Button>
      <Button className="featured" onClick={() => handleOperator("÷")}>÷</Button>
      <Button onClick={() => handleNumber("7")}>7</Button>
      <Button onClick={() => handleNumber("8")}>8</Button>
      <Button onClick={() => handleNumber("9")}>9</Button>
      <Button className="featured" onClick={() => handleOperator("*")}>*</Button>
      <Button onClick={() => handleNumber("4")}>4</Button>
      <Button onClick={() => handleNumber("5")}>5</Button>
      <Button onClick={() => handleNumber("6")}>6</Button>
      <Button className="featured" onClick={() => handleOperator("-")}>-</Button>
      <Button onClick={() => handleNumber("1")}>1</Button>
      <Button onClick={() => handleNumber("2")}>2</Button>
      <Button onClick={() => handleNumber("3")}>3</Button>
      <Button className="featured" onClick={() => handleOperator("+")}>+</Button>
      <Button onClick={() => handleNumber(",")}>,</Button>
      <Button onClick={() => handleNumber("0")}>0</Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button className="featured" onClick={handleCompute}>=</Button>
    </div>
  );
};

export default InputsWrapper;