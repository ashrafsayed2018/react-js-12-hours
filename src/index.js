import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        // const { id, author, title, image } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
