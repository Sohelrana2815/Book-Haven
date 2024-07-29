import { useEffect, useState } from "react";
import BookListsCard from "../BookListsCard/BookListsCard";

const BookLists = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h2 className="text-center font-bold text-3xl">Books</h2>
      <h2 className="text-center text-4xl"> All books : {books.length}</h2>
      <div>
        {books.map((book) => (
          <BookListsCard key={book.id} book={book}></BookListsCard>
        ))}
      </div>
    </>
  );
};

export default BookLists;
