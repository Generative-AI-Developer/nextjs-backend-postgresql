"use client";
import React, { useState } from "react";
import Input from "./Input";
const Main = ({ data }: any) => {
  const [obj, setObj] = useState({});

  return (
    <div>
      <div>
        <Input obj={obj} />
      </div>

      <div>
        {data.map((val: any) => {
          return (
            <div key={val.id} className="w-[250px] flex justify-between">
              <p>{val.title}</p>
              <button onClick={() => setObj(val)}>Edit</button>
              <button onClick={() => setObj(val)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
