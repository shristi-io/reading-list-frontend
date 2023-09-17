import { useEffect, useContext } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import Signup from "./components/Signup";
import Login from "./components/Login";
import BooksContext from "./context/Books";

function App() {
  const { haveAccount, loggedIn } = useContext(BooksContext);

  return (
    <>
      <header
        className="py-12 h-[20vh] bg-red-500
      "
      >
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Book Reading List</h1>
        </div>
      </header>
      <main className="h-[80vh]">
        {loggedIn ? (
          <>
            <BookList /> <BookCreate />
          </>
        ) : haveAccount ? (
          <Login />
        ) : (
          <Signup />
        )}
      </main>
    </>
  );
}

export default App;
