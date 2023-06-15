import "./bookscard.css";

const BookCard = ({ title, imageUrl, price }) => {
  return (
    <div className="books-card">
      <img className="books-img" src={imageUrl} alt={title} />
      <h3 className="books-title">{title}</h3>
      <h3 className="books-title">{price}</h3>
    </div>
  );
};

const BooksCard = () => {
  const books = [
    {
      title: "TK Eldridge's Series Starters",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-01/seriesstarter%20copy.jpg?itok=rZz5p7xE",
      price: "Rs. 5000",
    },
    {
      title: "The Making of a Matchmaker",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/51BWlPvGsHL.jpg?itok=9fFmTFl1",
      price: "Rs. 3000",
    },
    {
      title: "The Black Bag",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/41DaRMlW6mL.jpg?itok=DvqYrA3k",
      price: "Rs. 2000",
    },
    {
      title: "The Secret of Poppyridge Cove",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-04/51bbKaXzvaL.jpg?itok=OCPg5pqN",
      price: "Rs. 4000",
    },
    {
      title: "Trading Knives",
      imageUrl:
        "https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-02/51Ea9dkQfaL.jpg?itok=ujCrkcx_",
      price: "Rs. 2000",
    },
  ];

  return (
    <div className="book-card-row">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          imageUrl={book.imageUrl}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BooksCard;
