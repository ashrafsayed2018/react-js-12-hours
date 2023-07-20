import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    title: "first book title",
    author: "ashraf sayed 2023",
    image: "./images/book.jpg",
  },
  {
    id: 2,
    title: "second book title",
    author: "mohammed ali",
    image: "./images/book2.jpeg",
  },
];

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

const Book = (props) => {
  const { author, title, image } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button>click me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
