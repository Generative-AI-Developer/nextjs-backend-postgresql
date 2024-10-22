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
                <div className="flex justify-center items-center gap-6">
                  <p className="w-28">{val.title}</p>
                  <button
                    onClick={() => setObj(val)}
                    className="w-28 bg-green-800 rounded-lg px-6 py-2 my-4 flex align-center"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(val.id)}
                    className="w-28 bg-red-800 rounded-lg px-6 py-2 my-4 flex align-center "
                  >
                    Delete
                  </button>
                </div>
              </div>
              <hr className="my-2 " />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
