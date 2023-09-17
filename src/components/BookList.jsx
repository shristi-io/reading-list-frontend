import React from "react";
import BookShow from "./BookShow";
import { useContext, useEffect } from "react";
import BooksContext from "../context/Books";

const BookList = () => {
  const { books, getBook, username } = useContext(BooksContext);
  useEffect(() => {
    getBook();
  }, []);

  return (
    <section className="max-md:pb-[500px]">
      <div className="my-4">
        <h1
          className="text-center text-xl
        "
        >
          Welcome {username}
        </h1>
      </div>
      <div className="w-full md:mb-44 max-md:mb-56 px-4 py-2 justify-items-center j grid gap-2 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {books.map((book) => {
          return <BookShow key={book._id} book={book} />;
        })}
      </div>
    </section>
  );
};

export default BookList;
