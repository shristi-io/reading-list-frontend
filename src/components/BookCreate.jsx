import React, { useState, useContext } from "react";
import BooksContext from "../context/Books";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook, logout } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="fixed bottom-0 bg-[#030303]/[0.80] w-full flex max-md:flex-col justify-between">
      <form
        onSubmit={handleSubmit}
        className="px-12 py-4 flex flex-col justify-center items-start gap-2"
      >
        <label className="text-xl ml-2 text-white" htmlFor="input">
          Add a book
        </label>
        <input
          name="input"
          value={title}
          onChange={handleChange}
          placeholder="Enter book name"
          className="sm:w-[500px] max-sm:w-[280px] border-2 border-gray-400 outline-none rounded-md px-4 py-2 text-sm"
          type="text"
        />
        <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
      <div className="flex justify-center items-center max-md:py-2 px-12">
        <button
          onClick={logout}
          className="bg-red-500 rounded-md font-bold text-white px-4 py-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default BookCreate;
