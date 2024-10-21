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
          className="border border-collapse my-6 rounded-lg text-black py-2 px-8"
          placeholder="Enter User Name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
      </div>
      <div>
        {!id && <button onClick={handlePost}>Add</button>}
        {id && <button onClick={handleUpdate}>Update</button>}
      </div>
    </>
  );
};

export default Input;
function refresh() {
  throw new Error("Function not implemented.");
}
