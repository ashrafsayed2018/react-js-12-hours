import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function BookList() {
  return (
    <section className="book-list">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondtBook.title}
        author={secondtBook.author}
        image={secondtBook.image}
      />
    </section>
  );
}

const firstBook = {
  title: "first book title",
  author: "ashraf sayed 2023",
  image: "./images/book.jpg",
};
const secondtBook = {
  title: "second book title",
  author: "mohammed ali",
  image: "./images/book2.jpeg",
};

const Book = (props) => {
  const { author, title, image } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
