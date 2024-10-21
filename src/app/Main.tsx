"use client";
import React, { useState } from "react";
import Input from "./Input";
import router from "next/router";
const Main = ({ data }: any) => {
  const [obj, setObj] = useState({});

  const handleDelete = async (id: string) => {
    await fetch("http://localhost:3000/api/crud-operation", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

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
              <button onClick={() => handleDelete(val.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
