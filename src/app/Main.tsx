"use client";
import React, { useState } from "react";
import Input from "./Input";
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
            <>
              <div key={val.id} className="w-[350px] flex justify-between">
                <p className="w-28">{val.title}</p>
                <button onClick={() => setObj(val)} className="w-28">
                  Edit
                </button>
                <button onClick={() => handleDelete(val.id)} className="w-28 ">
                  Delete
                </button>
              </div>
              <hr className="my-4 " />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
