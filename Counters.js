import {
  DeleteFilled,
  MinusCircleFilled,
  PlusCircleFilled,
} from "@ant-design/icons";
import React, { useState } from "react";

const Counters = ({ number, setNumber }) => {
  const [deleteG, setDeleteG] = useState(false);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    !deleteG && (
      <div className="flex items-center py-4">
        <span
          style={{
            backgroundColor: number > 0 ? "#007bff" : "#ffc107",
            // color: number > 0 ? "#fff": "#000"
          }}
          className={` mr-2 border w-20 flex justify-center p-3 font-bold ${
            number === 0 ? "text-black" : "text-white"
          }  rounded`}
        >
          {number === 0 ? "ZERO" : number}
        </span>

        <PlusCircleFilled
          onClick={increment}
          className="mr-2 border  bg-gray-800 p-4 text-white rounded"
        />

        <MinusCircleFilled
          className="border mr-2 bg-blue-400 p-4 text-white rounded"
          onClick={decrement}
        />
        <DeleteFilled
          onClick={() => setDeleteG(true)}
          className=" border bg-red-600 p-4 text-white rounded"
        />
      </div>
    )
  );
};

export default Counters;
