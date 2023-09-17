import React, { useState, useContext } from "react";
import BooksContext from "../context/Books";
import BookEdit from "./BookEdit";
import Edit from "../assets/edit.svg";
import Delete from "../assets/delete.svg";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteById } = useContext(BooksContext);

  const handleDelete = () => {
    deleteById(book._id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-700">
      <div>
        <img
          className="cursor-pointer"
          width={200}
          src={`https://picsum.photos/seed/${book._id}/200/300`}
          alt={book.title}
          title={book.title}
        />
      </div>
      {showEdit ? (
        <BookEdit book={book} onSubmit={handleEdit} />
      ) : (
        <div className="w-full px-2 flex justify-between items-center">
          <h2 className="cursor-pointer inline text-xl font-serif">
            {book.title}
          </h2>
          <div>
            <button onClick={handleDelete} className="hover:opacity-[0.8] mr-1">
              <img
                className="translate-y-1"
                width={20}
                height={20}
                src={Delete}
                alt="Delete button"
              />
            </button>
            <button onClick={handleEdit} className="hover:opacity-[0.8]">
              <img
                className="translate-y-1"
                width={20}
                height={20}
                src={Edit}
                alt="Edit button"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookShow;
