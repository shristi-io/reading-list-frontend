import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [haveAccount, setHaveAccount] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = (value) => {
    setHaveAccount(value);
  };

  const login = async ({ email, password }) => {
    const { data } = await axios.post(
      "https://reading-list-backend.onrender.com/api/users/login",
      {
        email,
        password,
      }
    );
    const token = data.accessToken;
    if (!token) throw new Error("Couldn't login user");
    setToken(token);
    setUsername(data.username);
    setLoggedIn(true);
  };

  const signup = async ({ email, username, password }) => {
    const { data } = await axios.post(
      "https://reading-list-backend.onrender.com/api/users/register",
      {
        email,
        password,
        username,
      }
    );

    setHaveAccount(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setToken("");
    setBooks([]);
  };

  const getBook = async () => {
    const { data } = await axios.get(
      "https://reading-list-backend.onrender.com/api/books",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setBooks(data);
  };

  const createBook = async (title) => {
    // const id = Math.round(Math.random() * 9999);
    // setBooks([...books, { id, title }]);
    const { data } = await axios.post(
      "https://reading-list-backend.onrender.com/api/books",
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBooks([...books, data]);
  };

  const deleteById = async (id) => {
    await axios.delete(
      `https://reading-list-backend.onrender.com/api/books/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBooks(books.filter((book) => book._id !== id));
  };

  const updateBook = async (id, title) => {
    const { data } = await axios.put(
      `https://reading-list-backend.onrender.com/api/books/${id}`,
      {
        title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBooks(
      books.map((book) => {
        if (book._id === id) return { ...book, ...data };
        return book;
      })
    );
  };

  const valueToShare = {
    haveAccount,
    handleLogin,
    books,
    updateBook,
    deleteById,
    createBook,
    getBook,
    login,
    signup,
    loggedIn,
    logout,
    username,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
