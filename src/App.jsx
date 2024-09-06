import { useState } from "react";
import "./App.css";
import InputsWrapper from "./InputsWrapper";
import Screens from "./Screens";

const App = () => {
  const [calc, setCalc] = useState({
    firstOperand: null,
    secondOperand: null,
    operator: "=",
  });

  const handleNumber = (number) => {
    if (calc.secondOperand !== null && calc.secondOperand.length === 15) return;
    if (calc.secondOperand === "0" && number === "0") return;
    if (calc.secondOperand?.includes(",") && number === ", ") return;
    let l_calc = {};
    if (calc.secondOperand === null && number === ",") {
      l_calc = {
        ...calc,
        secondOperand: "0,",
      };
    } else {
      l_calc = {
        ...calc,
        secondOperand:
          calc.secondOperand !== null ? calc.secondOperand + number : number,
      };
    }
    setCalc(l_calc);
  };

  const handleOperator = (operator) => {
    if (calc.firstOperand === null && calc.secondOperand === null) return;

    if (calc.firstOperand === null) {
      setCalc({
        ...calc,
        operator: operator,
        firstOperand: calc.secondOperand,
        secondOperand: null,
      });
    } else {
      setCalc({
        ...calc,
        operator: operator,
      });
    }

    if (calc.secondOperand === null) {
      setCalc({
        ...calc,
        operator: operator,
      });
    }

    if (calc.firstOperand !== null && calc.secondOperand !== null) {
      setCalc({
        ...calc,
        firstOperand: compute(),
        operator: operator,
        secondOperand: null,
      });
    }
  };

  const handleClear = () => {
    setCalc({
      ...calc,
      firstOperand: null,
      secondOperand: null,
      operator: "=",
    });
  };

  const handlePlusMinus = () => {
    if (calc.secondOperand !== null) {
      const secondOperand = -1 * parseFloat(calc.secondOperand);
      setCalc({
        ...calc,
        secondOperand: secondOperand.toString(),
      });
    }
  };

  const handlePercent = () => {
    if (calc.secondOperand !== null) {
      let secondOperand = parseFloat(calc.secondOperand) * 0.01;
      if (secondOperand.toString().length > 7) {
        secondOperand = secondOperand.toFixed(7);
      }
      setCalc({
        ...calc,
        secondOperand: secondOperand.toString(),
      });
    }
  };

  const handleDelete = () => {
    if (calc.secondOperand === null) return;
    let secondOperand = calc.secondOperand;
    if (secondOperand?.length === 1) {
      secondOperand = null;
    } else {
      secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    }
    setCalc({
      ...calc,
      secondOperand: secondOperand,
    });
  };

  const handleCompute = () => {
    if (calc.firstOperand === null || calc.secondOperand == null) return;
    setCalc({
      ...calc,
      secondOperand: compute(),
      firstOperand: null,
    });
  };

  const format = (value) => {
    if (value === null) return;
    const sub = value.split(",");
    let formated = "";
    if (sub.length > 1) {
      formated = sub[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + sub[1];
    } else {
      formated = sub[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return formated;
  };

  const compute = () => {
    if (
      calc.firstOperand !== null &&
      calc.secondOperand !== null &&
      calc.operator !== null
    ) {
      let result = "";

      const firstOperand = parseFloat(calc.firstOperand);
      const secondOperand = parseFloat(calc.secondOperand);

      if (isNaN(firstOperand) || isNaN(secondOperand)) {
        return result;
      }

      switch (calc.operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "÷":
          result =
            secondOperand > 0 ? firstOperand / secondOperand : "NOT ALLOW";
          break;
      }

      if (result !== "NOT ALLOW" && result.toString().length > 7) {
        result = result.toFixed(7); // we limit decimal to 7
      }

      return result.toString().replace(".", ","); // This will help for the formatting.
    }

    const randomWords = [
      "Miss na kita",
      "Balik ka na plss",
      "Labyu!",
      "Sana ako nalang",
      "Sana ako parin ;(",
      "Miss you lods",
      "Sana all lahat",
      "Sana all may jowa",
      "I love you",
      "Miss mo ba ko lods?",
      "I'm suffering, need you",
      "Sorry na",
      "Sorry na agad",
      "Sorry na talaga",
      "Sorry na bhe",
    ]

    return randomWords[Math.floor(Math.random() * randomWords.length)];
  };

  return (
    <div className="container">
      <div className="calculator">
        <Screens
          firstOperand={calc.firstOperand}
          operator={calc.operator}
          secondOperand={calc.secondOperand}
          format={format}
        />
        <InputsWrapper
          handleClear={handleClear}
          handlePlusMinus={handlePlusMinus}
          handlePercent={handlePercent}
          handleOperator={handleOperator}
          handleNumber={handleNumber}
          handleDelete={handleDelete}
          handleCompute={handleCompute}
        />
      </div>
    </div>
  );
}

export default App;