import React, { useEffect, useState } from "react";
import "./App.css";
import {
  DeleteFilled,
  ReloadOutlined,
  ShoppingCartOutlined,
  PlusCircleFilled,
  MinusCircleFilled,
  DeleteRowOutlined,
} from "@ant-design/icons";
import Counters from "./Counters";

export default function App() {
  function reload() {
    window.location.reload();
  }

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let z = 0;
    let a = 0;
    if (number1 > 0) {
      x = 1;
    }
    if (number2 > 0) {
      y = 1;
    }
    if (number3 > 0) {
      z = 1;
    }
    if (number4 > 0) {
      a = 1;
    }
    setCount(x + y + z + a);
  }, [number1, number2, number3, number4]);

  const refresh = () => {
    setNumber1(0);
    setNumber2(0);
    setNumber3(0);
    setNumber4(0);
  };

  return (
    <div className="h-screen">
      <div>
        <ShoppingCartOutlined /> {count}
      </div>
      <span title="Reload">
        <ReloadOutlined
          className="mr-5  border ml-10 mt-10 bg-green-600 p-4 text-white rounded-2xl"
          onClick={reload}
        />
      </span>
      <span title="Refresh">
        <ReloadOutlined
          className="mr-5  border ml-10 mt-10 bg-green-600 p-4 text-white rounded-2xl"
          onClick={refresh}
        />
      </span>
      <Counters number={number1} setNumber={setNumber1} />
      <Counters number={number2} setNumber={setNumber2} />
      <Counters number={number3} setNumber={setNumber3} />
      <Counters number={number4} setNumber={setNumber4} />

      {/* <Counters /> <Counters /> <Counters /> */}
    </div>
  );
}
