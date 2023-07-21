const Book = (props) => {
  const { author, title, image } = props;

  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button>show title</button>
    </article>
  );
};

export default Book;
