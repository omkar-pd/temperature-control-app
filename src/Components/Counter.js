import { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./Counter.css";
const Counter = () => {
  const [temp, setCount] = useState(1);
  const [tempColor, setTempColor] = useState("light-blue");
  const incrementHandler = () => {
    setCount(temp + 1);
    if (temp < 5) {
      setTempColor("light-blue");
    }
    if (temp >= 5 && temp < 15) {
      setTempColor("powder-blue");
    }
    if (temp >= 15 && temp < 25) {
      setTempColor("orange");
    }
    if (temp >= 25 && temp < 40) {
      setTempColor("yellow");
    }
    if (temp >= 40) {
      setTempColor("red");
    }
  };
  const decrementHandler = () => {
    setCount(temp - 1);
    if (temp < 5) {
      setTempColor("light-blue");
    }
    if (temp >= 5 && temp < 15) {
      setTempColor("powder-blue");
    }
    if (temp >= 15 && temp < 25) {
      setTempColor("orange");
    }
    if (temp >= 25 && temp < 40) {
      setTempColor("yellow");
    }
    if (temp >= 40) {
      setTempColor("red");
    }
  };

  return (
    <Card>
      <div className={`counter-container ${tempColor}`}>
        <p className="counter">
          {temp}
          <span> C</span>
        </p>
      </div>
      <div className="button-container">
        <Button className="increment" onClick={incrementHandler}>
          +
        </Button>
        <Button className="decrement" onClick={decrementHandler}>
          -
        </Button>
      </div>
    </Card>
  );
};
export default Counter;
