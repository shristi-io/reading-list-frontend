import React, { useState, useContext } from "react";
import BooksContext from "../context/Books";

const BookEdit = ({ onSubmit, book }) => {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook(book._id, title);
    onSubmit();
  };

  return (
    <div className="my-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-1"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 py-1 border-2 rounded-md outline-none border-gray-400 text-sm"
          type="text"
          placeholder="Enter name"
        />
        <button className="bg-green-500 text-sm px-2 text-white font-bold rounded-md py-1">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
