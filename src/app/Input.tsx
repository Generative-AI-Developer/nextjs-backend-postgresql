"use client";
import router from "next/router";
import React, { useEffect, useState } from "react";

const Input = ({ obj }: any) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const handlePost = async () => {
    // POST request using fetch()
    fetch("http://localhost:3000/api/crud-operation", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({ title }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setTitle("");
  };

  const handleUpdate = async () => {
    // POST request using fetch()
    fetch("http://localhost:3000/api/crud-operation", {
      // Adding method type
      method: "PUT",
      // Adding body or contents to send
      body: JSON.stringify({ title, id }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setTitle("");
  };

  // const handleDelete = async () => {
  //   // DELETE request using fetch()
  //   fetch("http://localhost:3000/api/crud-operation", {
  //     method: "DELETE",
  //     body: JSON.stringify({ title, id }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   setTitle("");
  //   setId("");
  // };

  useEffect(() => {
    setTitle(obj.title);
    setId(obj.id);
  }, [obj]);

  return (
    <>
      <div>
        <input
          className="border border-collapse rounded-lg text-black py-2 px-20"
          placeholder="Enter User Name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
      </div>
      <div>
        <div>
          {!id && (
            <button
              onClick={handlePost}
              className="bg-red-800 w-20 rounded-lg px-6 py-2 my-4 flex align-center"
            >
              Add
            </button>
          )}
        </div>
        <div>
          {id && (
            <button
              onClick={handleUpdate}
              className="bg-blue-400 w-20 rounded-lg px-6 py-2 text-white mt-6"
            >
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
