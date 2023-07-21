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
      <EventExample />
      {books.map((book) => {
        // const { id, author, title, image } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleFormButton = () => {
    return alert("handle form Button");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    console.log("handle form submission");
  };
  return (
    <section>
      <h2>typical form</h2>
      <form>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleFormSubmission} type="button">
          click me
        </button>
      </form>
    </section>
  );
};
const Book = (props) => {
  const { author, title, image } = props;
  console.log(props);
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
