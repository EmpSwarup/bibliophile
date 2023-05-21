import "./bookscard.css";

const BookCard = ({ title, imageUrl }) => {
  return (
    <div className="book-card">
      <img className="book-img" src={imageUrl} alt={title} />
      <h3 className="book-title">{title}</h3>
    </div>
  );
};

const BooksCard = () => {
  const books = [
    {
      title: "TK Eldridge's Series Starters",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-01/seriesstarter%20copy.jpg?itok=rZz5p7xE",
    },
    {
      title: "The Making of a Matchmaker",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/51BWlPvGsHL.jpg?itok=9fFmTFl1",
    },
    {
      title: "The Black Bag",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/41DaRMlW6mL.jpg?itok=DvqYrA3k",
    },
    {
      title: "The Secret of Poppyridge Cove",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-04/51bbKaXzvaL.jpg?itok=OCPg5pqN",
    },
    {
      title: "Trading Knives",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/51Ea9dkQfaL.jpg?itok=ujCrkcx_",
    },
  ];

  return (
    <div className="book-card-row">
      {books.map((book, index) => (
        <BookCard key={index} title={book.title} imageUrl={book.imageUrl} />
      ))}
    </div>
  );
};

export default BooksCard;
