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
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <BookListsCard key={book.id} book={book}></BookListsCard>
        ))}
      </div>
    </>
  );
};

export default BookLists;
